// Nail Salon Notebook — demo-request + SMS consent capture endpoint.
// Stores each submission in KV with server-side timestamp and client IP
// to maintain the A2P consent audit trail.
const ALLOWED_ORIGINS = [
  'https://mailtoray-lgtm.github.io',
  'http://localhost:4573',
  'http://localhost:5173',
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ success: false, error: 'POST only' }), {
        status: 405,
        headers: corsHeaders(origin),
      });
    }
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ success: false, error: 'Invalid JSON' }), {
        status: 400,
        headers: corsHeaders(origin),
      });
    }
    // SMS consent is OPTIONAL — a demo request is valid without it (A2P 30923).
    // A phone number is only required when the user affirmatively opts in to SMS.
    if (body.smsConsent && !body.phone) {
      return new Response(JSON.stringify({ success: false, error: 'phone required when opting in to SMS' }), {
        status: 400,
        headers: corsHeaders(origin),
      });
    }
    const record = {
      ...body,
      smsConsent: Boolean(body.smsConsent),
      serverTimestamp: new Date().toISOString(),
      clientIp: request.headers.get('CF-Connecting-IP') || 'unknown',
      country: request.headers.get('CF-IPCountry') || 'unknown',
      origin,
    };
    // Only opt-in submissions belong in the consent audit trail.
    const prefix = record.smsConsent ? 'consent' : 'demo';
    const key = `${prefix}:${record.serverTimestamp}:${crypto.randomUUID()}`;
    await env.CONSENT_RECORDS.put(key, JSON.stringify(record));
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: corsHeaders(origin) });
  },
};
