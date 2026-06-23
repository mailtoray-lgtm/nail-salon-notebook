import React from 'react';
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
            <p className="mt-4 leading-7 text-soft-brown">Nail Salon Notebook uses demo request information only to respond to inquiries and coordinate product demos.</p>
            <p className="mt-4 leading-7 text-soft-brown">We do not sell, rent, trade, or share mobile numbers or SMS consent information with third parties for marketing or promotional purposes.</p>
            <p className="mt-4 leading-7 text-soft-brown">Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.</p>
          </div>
        </section>

        <section id="terms" className="py-8">
          <div className="rounded-3xl border border-champagne bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold">Terms & Conditions</h2>
            <p className="mt-4 leading-7 text-soft-brown">By requesting a demo or opting in, you agree to receive messages from Nail Salon Notebook related to demo coordination and product communication.</p>
            <p className="mt-4 leading-7 text-soft-brown">Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.</p>
            <p className="mt-4 leading-7 text-soft-brown">This public website does not provide online booking, payment processing, account login, or a customer database.</p>
          </div>
        </section>
        <section id="contact" className="grid gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="pt-2">
            <h2 className="text-3xl font-extrabold">Want to try Nail Salon Notebook?</h2>
            <p className="mt-3 text-lg text-soft-brown">Request a demo for your salon.</p>
            <div className="mt-8 space-y-3 text-sm font-bold text-soft-brown">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> Front-desk friendly setup</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> Demo request only; no public booking engine</p>
            </div>
          </div>

          <form className="rounded-3xl border border-champagne bg-white p-5 shadow-xl shadow-soft-brown/10 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Name', 'Salon Name', 'Phone', 'Email'].map((field) => (
                <label key={field} className="text-sm font-bold text-soft-brown">
                  {field}
                  <input className="mt-2 w-full rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm font-bold text-soft-brown">
              Message
              <textarea rows="4" className="mt-2 w-full resize-none rounded-2xl border border-taupe/70 bg-warm-white px-4 py-3 text-dark-brown outline-none focus:border-soft-brown" />
            </label>
            <button type="button" className="mt-5 w-full rounded-full bg-dark-brown px-6 py-4 font-bold text-cream shadow-lg shadow-soft-brown/20 sm:w-auto">
              Request a Demo
            </button>
          </form>
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

