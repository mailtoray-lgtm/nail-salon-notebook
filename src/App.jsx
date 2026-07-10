import React, { useState } from 'react';
import {
  ArchiveRestore,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Monitor,
  GripHorizontal,
  LockKeyhole,
  Mail,
  MousePointer2,
  Phone,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react';

const CONTACT_EMAIL = 'mailtoray@gmail.com';

const technicians = ['Amy', 'Jenny', 'Lily', 'May', 'Tina'];

const appointments = [
  { tech: 0, top: 76, height: 78, title: 'Gel Mani', client: 'Sarah J.', color: 'bg-blush' },
  { tech: 1, top: 130, height: 104, title: 'Acrylic Fill', client: 'Michelle T.', color: 'bg-champagne' },
  { tech: 2, top: 88, height: 90, title: 'Dip Powder', client: 'Emily R.', color: 'bg-white' },
  { tech: 3, top: 190, height: 88, title: 'Pedicure + Art', client: 'Walk-In', color: 'bg-blush' },
  { tech: 4, top: 68, height: 116, title: 'Full Set', client: 'Jessica K.', color: 'bg-taupe/25' },
];

const values = [
  {
    icon: ClipboardList,
    title: 'Replace the paper book',
    text: 'A tablet-friendly Floor Board your front desk can read fast: techs, times, walk-ins, resources, and today.',
  },
  {
    icon: MousePointer2,
    title: 'Move appointments visually',
    text: 'Move appointments across time, technician rows, and service length while the schedule checks the rules.',
  },
  {
    icon: LockKeyhole,
    title: "Protect the owner's schedule",
    text: 'Backup, restore, repair tools, and owner PIN controls help protect salon data.',
  },
];

const features = [
  ['Floor Board Timeline', CalendarDays],
  ['Drag-and-Drop Timeline', GripHorizontal],
  ['Walk-In Welcome', UserRoundCheck],
  ['Rotation Order', UserRoundCheck],
  ['Resource Rules', Check],
  ['Visit Builder', ClipboardList],
  ['Boss Mode', LockKeyhole],
  ['Backup & Restore', ArchiveRestore],
  ['Customer Display', Monitor],
  ['Local-First Data', Check],
];

function ScheduleMockup() {
  return (
    <div className="rounded-[2rem] border border-champagne bg-white p-3 shadow-2xl shadow-soft-brown/15">
      <div className="overflow-hidden rounded-[1.45rem] border border-taupe/60 bg-warm-white">
        <div className="flex flex-col gap-3 border-b border-taupe/40 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-soft-brown">Nail Salon Notebook</p>
            <h2 className="text-xl font-bold text-dark-brown">Today Schedule</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-soft-brown px-3 py-2 text-xs font-bold text-cream">Walk-In Welcome</span>
            <span className="rounded-full bg-champagne px-3 py-2 text-xs font-bold text-dark-brown">Next in Rotation</span>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <div className="grid min-w-[760px] grid-cols-[64px_repeat(5,1fr)]">
            <div className="border-r border-taupe/40 bg-white" />
            {technicians.map((tech) => (
              <div key={tech} className="border-r border-taupe/35 bg-white py-3 text-center text-sm font-bold text-dark-brown last:border-r-0">
                {tech}
              </div>
            ))}

            <div className="col-span-6 grid grid-cols-[64px_repeat(5,1fr)]">
              <div className="bg-white text-right text-xs font-semibold text-soft-brown">
                {['9 AM', '10 AM', '11 AM', '12 PM'].map((time) => (
                  <div key={time} className="h-20 border-r border-taupe/40 pr-2 pt-2">
                    {time}
                  </div>
                ))}
              </div>
              {technicians.map((tech, techIndex) => (
                <div key={tech} className="relative h-80 border-r border-taupe/25 last:border-r-0">
                  {[0, 1, 2, 3].map((line) => (
                    <div key={line} className="h-20 border-b border-taupe/20" />
                  ))}
                  {appointments
                    .filter((item) => item.tech === techIndex)
                    .map((item) => (
                      <div
                        key={item.title}
                        className={`absolute left-2 right-2 rounded-2xl border border-taupe/50 ${item.color} p-3 shadow-sm`}
                        style={{ top: item.top, height: item.height }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <strong className="text-sm text-dark-brown">{item.title}</strong>
                          <GripHorizontal className="h-4 w-4 text-soft-brown" />
                        </div>
                        <p className="mt-1 text-xs font-medium text-soft-brown">{item.client}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-[270px] top-[118px] w-48 overflow-hidden rounded-2xl border border-taupe/50 bg-white shadow-xl shadow-dark-brown/15">
            {['Move', 'Modify', 'Cancel', 'Complete'].map((action, index) => (
              <div
                key={action}
                className={`px-4 py-3 text-sm font-bold ${
                  index === 2 ? 'text-rose-700' : index === 3 ? 'text-soft-brown' : 'text-dark-brown'
                } ${index !== 0 ? 'border-t border-taupe/25' : ''}`}
              >
                {action}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-taupe/35 bg-white px-4 py-3 text-xs font-bold text-soft-brown">
          <span className="rounded-full bg-blush px-3 py-2">Rotation: Amy → Jenny → Lily → May → Tina</span>
          <span className="rounded-full bg-warm-white px-3 py-2">Resources: 2 chairs open</span>
          <span className="rounded-full bg-warm-white px-3 py-2">Visit Builder ready</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [smsConsent, setSmsConsent] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: '', salonName: '', phone: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState('idle'); // idle | sending | success | error

  const setDemoField = (key) => (event) => setDemoForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleDemoSubmit = async (event) => {
    event.preventDefault();
    if (!smsConsent || submitState === 'sending') return;
    setSubmitState('sending');
    const consentRecord = {
      ...demoForm,
      smsConsent: true,
      consentText:
        'I agree to receive SMS text messages from Nail Salon Notebook at the phone number provided, related to demo scheduling and product updates. Msg & data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase.',
      consentTimestamp: new Date().toISOString(),
      page: window.location.href,
      userAgent: navigator.userAgent,
    };
    try {
      const response = await fetch('https://nsn-demo-request.mailtoray.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(consentRecord),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const records = JSON.parse(localStorage.getItem('nsn_consent_records') || '[]');
      records.push(consentRecord);
      localStorage.setItem('nsn_consent_records', JSON.stringify(records));
      setSubmitState('success');
    } catch (err) {
      setSubmitState('error');
    }
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-dark-brown">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blush text-soft-brown">
            <CalendarDays className="h-5 w-5" />
          </span>
          Nail Salon Notebook
        </a>
        <a href="#contact" className="rounded-full bg-dark-brown px-5 py-2.5 text-sm font-bold text-cream shadow-lg shadow-soft-brown/20">
          Request a Demo
        </a>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-10">
        <section className="grid gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne bg-white px-4 py-2 text-sm font-bold text-soft-brown shadow-sm">
              <Sparkles className="h-4 w-4" />
              In-store salon notebook app
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-dark-brown md:text-6xl">
              A Better Appointment Notebook for Nail Salons
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-soft-brown">
              Drag-and-drop scheduling for walk-ins, appointments, technicians, rotation, resources, and daily salon work.
            </p>
            <p className="mt-4 text-base font-bold text-dark-brown">
              Simple enough for the front desk. Strong enough for the owner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-dark-brown px-7 py-4 font-bold text-cream shadow-xl shadow-soft-brown/25">
                Request a Demo
                <ChevronRight className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-champagne bg-white px-7 py-4 font-bold text-dark-brown shadow-sm">
                See Features
              </a>
            </div>
          </div>

          <ScheduleMockup />
        </section>

        <section id="features" className="grid gap-4 py-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-champagne bg-white p-6 shadow-lg shadow-soft-brown/10">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blush text-soft-brown">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-extrabold">{title}</h2>
              <p className="mt-3 leading-7 text-soft-brown">{text}</p>
            </article>
          ))}
        </section>

        <section className="py-8">
          <div className="flex flex-wrap gap-3 rounded-3xl border border-champagne bg-white p-5 shadow-sm">
            {features.map(([label, Icon]) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-warm-white px-4 py-2 text-sm font-bold text-soft-brown">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </section>

        <section id="privacy" className="py-8">
          <div className="rounded-3xl border border-champagne bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold">Privacy Policy</h2>
            <p className="mt-4 leading-7 text-soft-brown">Nail Salon Notebook ("we," "us") collects the name, salon name, phone number, email, and message you submit through the "Request a Demo" form on this website. We use this information only to respond to your inquiry and to coordinate a product demo.</p>
            <p className="mt-4 leading-7 text-soft-brown">We do not sell, rent, trade, or otherwise share your phone number, mobile information, or SMS opt-in consent with third parties or affiliates for their marketing or promotional purposes. Text messaging originator opt-in data and consent are never shared with any third party for any purpose.</p>
            <p className="mt-4 leading-7 text-soft-brown"><strong>SMS Program:</strong> By checking the SMS consent box on the demo request form, you agree to receive text messages from Nail Salon Notebook at the phone number provided, related to demo scheduling, appointment coordination, and product updates. Consent to receive SMS messages is not a condition of purchasing any goods or services.</p>
            <p className="mt-4 leading-7 text-soft-brown">Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> at any time to opt out of messages. Reply <strong>HELP</strong> for assistance, or contact us using the details below.</p>
            <p className="mt-4 leading-7 text-soft-brown">You may request access to, correction of, or deletion of your personal information at any time by contacting us at the email listed in the contact section below.</p>
          </div>
        </section>

        <section id="terms" className="py-8">
          <div className="rounded-3xl border border-champagne bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold">Terms & Conditions</h2>
            <p className="mt-4 leading-7 text-soft-brown"><strong>How to opt in:</strong> Users opt in to receive SMS messages exclusively by submitting the "Request a Demo" form on this website and affirmatively checking the unchecked "I agree to receive SMS messages" consent checkbox next to the phone number field. No phone number is enrolled in messaging without this explicit, opt-in checkbox action.</p>
            <p className="mt-4 leading-7 text-soft-brown"><strong>Message types:</strong> Demo scheduling and coordination, appointment confirmations, and occasional product updates from Nail Salon Notebook.</p>
            <p className="mt-4 leading-7 text-soft-brown"><strong>How to opt out:</strong> Reply <strong>STOP</strong> to any message at any time to be unsubscribed immediately. You will receive one final confirmation message.</p>
            <p className="mt-4 leading-7 text-soft-brown"><strong>How to get help:</strong> Reply <strong>HELP</strong> to any message, or email us at the address listed in the contact section for assistance.</p>
            <p className="mt-4 leading-7 text-soft-brown">Message frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</p>
            <p className="mt-4 leading-7 text-soft-brown">This public website does not provide online booking, payment processing, account login, or a customer database.</p>
          </div>
        </section>
        <section id="contact" className="grid gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="pt-2">
            <h2 className="text-3xl font-extrabold">Want to try Nail Salon Notebook?</h2>
            <p className="mt-3 text-lg text-soft-brown">Request a demo for your salon.</p>
            <div className="mt-8 space-y-3 text-sm font-bold text-soft-brown">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> Front-desk friendly setup</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> Demo request only; no public booking engine. Contact: {CONTACT_EMAIL}</p>
            </div>
          </div>

          {submitState === 'success' ? (
            <div className="rounded-3xl border border-champagne bg-white p-7 shadow-xl shadow-soft-brown/10">
              <h3 className="text-2xl font-extrabold text-dark-brown">You're opted in — request received!</h3>
              <p className="mt-4 leading-7 text-soft-brown">
                Thank you! Your demo request was submitted and you have successfully opted in to receive SMS text
                messages from Nail Salon Notebook at the phone number you provided. We recorded your consent on{' '}
                {new Date().toLocaleString()}.
              </p>
              <p className="mt-4 leading-7 text-soft-brown">
                Message frequency varies. Msg &amp; data rates may apply. Reply <strong>STOP</strong> at any time to
                cancel, or <strong>HELP</strong> for help. See our{' '}
                <a href="#privacy" className="underline decoration-champagne underline-offset-4">Privacy Policy</a>.
              </p>
            </div>
          ) : (
          <form onSubmit={handleDemoSubmit} className="rounded-3xl border border-champagne bg-white p-5 shadow-xl shadow-soft-brown/10 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-soft-brown">
                Name
                <input required value={demoForm.name} onChange={setDemoField('name')} className="mt-2 w-full rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
              </label>
              <label className="text-sm font-bold text-soft-brown">
                Salon Name
                <input required value={demoForm.salonName} onChange={setDemoField('salonName')} className="mt-2 w-full rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
              </label>
              <label className="text-sm font-bold text-soft-brown">
                Phone
                <input required type="tel" value={demoForm.phone} onChange={setDemoField('phone')} className="mt-2 w-full rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
                <span className="mt-2 block text-xs font-semibold leading-5 text-soft-brown">
                  Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help.{' '}
                  <a href="#privacy" className="underline decoration-champagne underline-offset-4">Privacy Policy</a>
                </span>
              </label>
              <label className="text-sm font-bold text-soft-brown">
                Email
                <input required type="email" value={demoForm.email} onChange={setDemoField('email')} className="mt-2 w-full rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-bold text-soft-brown">
              Message
              <textarea rows="4" value={demoForm.message} onChange={setDemoField('message')} className="mt-2 w-full resize-none rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
            </label>

            <label className="mt-5 flex items-start gap-3 rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-sm font-semibold leading-6 text-soft-brown">
              <input
                type="checkbox"
                checked={smsConsent}
                onChange={(event) => setSmsConsent(event.target.checked)}
                className="mt-1 h-4 w-4 flex-shrink-0"
              />
              <span>
                I agree to receive SMS text messages from Nail Salon Notebook at the phone number provided, related to demo
                scheduling and product updates. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out,
                HELP for help. Consent is not a condition of purchase. See our{' '}
                <a href="#privacy" className="underline decoration-champagne underline-offset-4">Privacy Policy</a> and{' '}
                <a href="#terms" className="underline decoration-champagne underline-offset-4">Terms &amp; Conditions</a>.
              </span>
            </label>

            <button
              type="submit"
              disabled={!smsConsent || submitState === 'sending'}
              className="mt-5 w-full rounded-full bg-dark-brown px-6 py-4 font-bold text-cream shadow-lg shadow-soft-brown/20 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {submitState === 'sending' ? 'Sending…' : 'Request a Demo'}
            </button>
            {submitState === 'error' && (
              <p className="mt-4 text-sm font-bold text-red-700">
                Sorry, something went wrong sending your request. Please try again, or email us at {CONTACT_EMAIL}.
              </p>
            )}
          </form>
          )}
        </section>
      </main>

      <footer className="border-t border-champagne bg-white px-5 py-7 text-center text-sm font-bold text-soft-brown">
        <div>Nail Salon Notebook — local-first appointment scheduling for nail salons.</div>
        <div className="mt-3 flex justify-center gap-5">
          <a className="underline decoration-champagne underline-offset-4" href="#privacy">Privacy Policy</a>
          <a className="underline decoration-champagne underline-offset-4" href="#terms">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

