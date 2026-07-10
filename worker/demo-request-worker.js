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
    if (!body.phone || !body.smsConsent) {
      return new Response(JSON.stringify({ success: false, error: 'phone and smsConsent required' }), {
        status: 400,
        headers: corsHeaders(origin),
      });
    }
    const record = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      clientIp: request.headers.get('CF-Connecting-IP') || 'unknown',
      country: request.headers.get('CF-IPCountry') || 'unknown',
      origin,
    };
    const key = `consent:${record.serverTimestamp}:${crypto.randomUUID()}`;
    await env.CONSENT_RECORDS.put(key, JSON.stringify(record));
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: corsHeaders(origin) });
  },
};
