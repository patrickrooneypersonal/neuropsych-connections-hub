import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Brain,
  GraduationCap,
  HeartPulse,
  Building2,
  Award,
  MapPin,
  Mail,
  FileText,
  Download,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import logo from "@/assets/neuropsych-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroPsychConnections — Dr. Carolyn Rooney, Ph.D. | Madison, NJ" },
      {
        name: "description",
        content:
          "Specialized neuropsychological evaluations, academic consulting, and integrative psychotherapy in Madison, NJ. Duke & RWJ Medical School trained. 30+ years experience.",
      },
      { property: "og:title", content: "NeuroPsychConnections — Dr. Carolyn Rooney, Ph.D." },
      {
        property: "og:description",
        content:
          "Neuropsychological evaluations, academic consulting & psychotherapy in Madison, NJ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const PHONE = "(973) 410-0705";
const PHONE_HREF = "tel:+19734100705";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FormsLocation />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#academic", label: "Academic Consulting" },
    { href: "#about", label: "About Dr. Rooney" },
    { href: "#forms", label: "Forms & Patient Info" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="NeuroPsychConnections logo"
            className="h-10 w-auto shrink-0 sm:h-11"
          />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-semibold tracking-tight text-navy">
              NeuroPsychConnections
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Dr. Carolyn Rooney, Ph.D.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-teal-foreground shadow-sm transition-all hover:bg-teal/90 hover:shadow-md sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call {PHONE}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-teal"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-teal-foreground sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const badges = [
    { icon: Award, label: "30+ Years Experience" },
    { icon: GraduationCap, label: "Duke & RWJ Medical School Trained" },
    { icon: MapPin, label: "Madison, NJ" },
  ];
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--teal) 40%, transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Clinical Neuropsychology · Consulting · Psychotherapy
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Specialized Neuropsychological Evaluations, Academic Consulting & Psychotherapy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Integrating mind-body health, neuroscience, and positive psychology to help children,
            adolescents, adults, and families thrive.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-teal-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-teal/90 hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#referrals"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
            >
              For Referring Providers & Schools
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5 text-teal" strokeWidth={2.5} />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: "services",
    icon: Brain,
    title: "Neuropsychological & Educational Evaluations",
    points: [
      "Comprehensive testing for AD/HD, learning disorders, processing disorders, and Autism Spectrum.",
      "Concussion, TBI, and sports / elite athlete cognitive evaluations.",
      "Academic accommodation recommendations for elementary through graduate school.",
    ],
  },
  {
    id: "academic",
    icon: GraduationCap,
    title: "College Transitions & Higher Ed Consulting",
    points: [
      "Expertise in high school to college transitions and navigating campus disability services.",
      "Support for academic petitions, returning after a leave of absence, or school transfers.",
      "Custom intervention plans for students facing academic or emotional challenges.",
    ],
  },
  {
    id: "therapy",
    icon: HeartPulse,
    title: "Integrative Psychotherapy & Mind-Body Wellness",
    points: [
      "Evidence-based care: CBT, DBT, Mindfulness-Based Cognitive Therapy, and Ecotherapy.",
      "Specialized treatment for anxiety, OCD, mood disorders, acute stress, PTSD, and life transitions.",
      "Resiliency and mind-body models tailored for adolescents, adults, and elite performers.",
    ],
  },
  {
    id: "consulting",
    icon: Building2,
    title: "Organizational & Professional Consultation",
    points: [
      "Advisory services for corporations, law enforcement agencies, schools, and healthcare providers.",
      "Training in resiliency, mind-body performance, and workplace mental health.",
      "Expert case review and program development for institutional partners.",
    ],
  },
];

function Services() {
  return (
    <section id="referrals" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Core Services
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-5xl">
            A whole-person approach to evaluation and care.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Each engagement is grounded in rigorous neuropsychological science and delivered with
            warmth, discretion, and clinical excellence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              id={s.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-teal/10 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-teal">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
                <ul className="mt-5 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                        strokeWidth={2.2}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              About Dr. Rooney
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-5xl">
              Three decades of practice at the intersection of neuroscience and human potential.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              Dr. Carolyn Rooney, Ph.D., brings more than 30 years of combined experience as a
              university professor, administrator, and licensed clinical psychologist. Her
              integrative model draws on neuropsychology, positive psychology, and mind-body
              medicine to guide clients through evaluation, treatment, and transition.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              She completed predoctoral training in medical psychology and neuropsychology at
              <strong className="text-navy"> Duke University Medical School</strong> and her
              postdoctoral fellowship at
              <strong className="text-navy"> Robert Wood Johnson Medical School</strong>.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Stat value="30+" label="Years of Experience" />
              <Stat value="Duke" label="Predoctoral Training" />
              <Stat value="RWJ" label="Postdoctoral Fellow" />
            </div>
          </div>

          <figure className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl"
              style={{ background: "var(--gradient-hero)", opacity: 0.08 }}
            />
            <blockquote className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
              <Quote className="h-10 w-10 text-teal/70" strokeWidth={1.4} />
              <p className="mt-5 font-serif text-xl leading-relaxed text-navy md:text-2xl">
                “My approach incorporates mind-body connections utilizing positive psychology and
                resiliency models to empower individuals through life's transitions.”
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-navy font-serif text-sm font-semibold text-teal">
                  CR
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">Dr. Carolyn Rooney, Ph.D.</div>
                  <div className="text-xs text-muted-foreground">
                    Licensed Clinical Psychologist · Neuropsychologist
                  </div>
                </div>
              </footer>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-5">
      <div className="font-serif text-3xl text-navy">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

const forms = [
  { title: "New Patient Intake Form", desc: "Complete prior to your first appointment." },
  { title: "HIPAA Privacy Notice", desc: "Our privacy practices and your rights." },
  { title: "Consent for Treatment", desc: "Informed consent documentation." },
  { title: "Insurance & Payment Policies", desc: "Fees, insurance, and cancellations." },
];

function FormsLocation() {
  return (
    <section id="forms" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Forms */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Practice Forms
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              Forms & patient information
            </h2>
            <p className="mt-4 text-muted-foreground">
              Please review and complete relevant forms before your visit. Bring printed copies or
              email them securely in advance.
            </p>
            <div className="mt-8 grid gap-3">
              {forms.map((f) => (
                <a
                  key={f.title}
                  href="#"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-teal-soft text-teal">
                    <FileText className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium text-navy">{f.title}</div>
                    <div className="truncate text-sm text-muted-foreground">{f.desc}</div>
                  </div>
                  <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-teal" />
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-navy p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Office Location
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <span className="text-white/85">Madison, New Jersey</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <a href={PHONE_HREF} className="text-white/85 hover:text-teal">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <span className="text-white/85">By appointment · secure correspondence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="lg:pt-14">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Contact
              </p>
              <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
                Schedule a consultation
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Share a few details and we will reach out within one business day.
              </p>
              <ContactForm />
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <p>
                  Please do not submit confidential medical information via this form. For clinical
                  matters, please call the office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    inquiryType: "",
    message: "",
  });
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.inquiryType) {
      toast.error("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — we'll be in touch within one business day.");
      setForm({
        name: "",
        email: "",
        phone: "",
        preferredTime: "",
        inquiryType: "",
        message: "",
      });
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            maxLength={100}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            maxLength={200}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            maxLength={30}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="time">Preferred Time</Label>
          <Input
            id="time"
            placeholder="e.g. Weekday mornings"
            value={form.preferredTime}
            onChange={(e) => set("preferredTime", e.target.value)}
            maxLength={100}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Inquiry Type *</Label>
        <Select value={form.inquiryType} onValueChange={(v) => set("inquiryType", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="evaluation">Neuropsychological Evaluation</SelectItem>
            <SelectItem value="therapy">Psychotherapy</SelectItem>
            <SelectItem value="college">College / Academic Consulting</SelectItem>
            <SelectItem value="general">General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Brief message</Label>
        <Textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          maxLength={1000}
          placeholder="Share a short note (no confidential medical details)."
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-teal py-6 text-sm font-semibold text-teal-foreground hover:bg-teal/90"
      >
        {submitting ? "Sending…" : "Request a Consultation"}
      </Button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-xl text-white">NeuroPsychConnections</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-teal">
              Dr. Carolyn Rooney, Ph.D.
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Clinical neuropsychology, academic consulting, and integrative psychotherapy for
              children, adolescents, adults, and families.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal">Services</a></li>
              <li><a href="#academic" className="hover:text-teal">Academic Consulting</a></li>
              <li><a href="#about" className="hover:text-teal">About Dr. Rooney</a></li>
              <li><a href="#forms" className="hover:text-teal">Forms</a></li>
              <li><a href="#contact" className="hover:text-teal">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Office</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                Madison, New Jersey
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <a href={PHONE_HREF} className="hover:text-teal">{PHONE}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/70">
          <strong className="text-white">HIPAA Notice:</strong> Please do not submit confidential
          medical information via standard web contact forms. For clinical matters, please contact
          the office directly by phone.
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} NeuroPsychConnections. All rights reserved.</div>
          <div>Licensed Clinical Psychologist · New Jersey</div>
        </div>
      </div>
    </footer>
  );
}
