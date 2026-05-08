import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  X,
  ClipboardCheck,
  Droplets,
  Facebook,
  HeartPulse,
  Instagram,
  Mail,
  Menu,
  Play,
  PillBottle,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Video,
  Youtube,
} from "lucide-react";
import "./index.css";

const navItems = [
  "Health Topics",
  "Advice from Doctors",
  "GLP-1 & Treatments",
  "Find a Doctor",
  "Community",
  "Resources",
];

const features = [
  {
    icon: BookOpen,
    title: "Learn",
    copy: "Articles, videos, and tools on high blood pressure, diabetes, and healthy living.",
  },
  {
    icon: Stethoscope,
    title: "Advice from Doctors",
    copy: "Get practical advice from trusted doctors who understand your culture and lifestyle.",
  },
  {
    icon: PillBottle,
    title: "GLP-1 & Treatments",
    copy: "Learn how GLP-1 medications can help manage high blood pressure and diabetes and improve your overall health.",
    purple: true,
  },
  {
    icon: UsersRound,
    title: "Community",
    copy: "Connect with others who understand your journey. Share, learn, and support each other.",
  },
  {
    icon: ClipboardCheck,
    title: "Health Tools",
    copy: "Track your numbers, assess your risk, and get personalized recommendations.",
  },
];

const benefits = [
  ["Lower blood pressure", Droplets],
  ["Improve blood sugar control", Droplets],
  ["Support healthy weight loss", Activity],
  ["Reduce risk of heart disease & stroke", HeartPulse],
];

const doctorFeatures = [
  ["Book online in minutes", CalendarCheck],
  ["In-person or video visits", Video],
  ["Insurance accepted", ShieldCheck],
];

const topics = [
  {
    tag: "Blood Pressure",
    title: "7 Simple Ways to Lower Your Blood Pressure Naturally",
    time: "5 min read",
    image: "/assets/topic-blood-pressure.png",
  },
  {
    tag: "Nutrition",
    title: "Healthy African Foods That Support Your Heart",
    time: "6 min read",
    image: "/assets/topic-nutrition.png",
  },
  {
    tag: "Diabetes",
    title: "Understanding Your A1C: What It Means and Why It Matters",
    time: "5 min read",
    image: "/assets/topic-diabetes.png",
  },
  {
    tag: "Lifestyle",
    title: "Small Changes, Big Results: Daily Habits That Heal",
    time: "4 min read",
    image: "/assets/topic-lifestyle.png",
  },
];

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/afiya-logo.png"
        alt="Afiya Health"
        className={`afiya-logo ${light ? "afiya-logo-light" : ""}`}
      />
      <div>
        <div
          className={`font-serif text-[1.35rem] font-bold leading-none tracking-normal sm:text-[1.75rem] md:text-[2rem] ${
            light ? "text-white" : "text-forest"
          }`}
        >
          Afiya Health
        </div>
        <div
          className={`mt-1 flex items-center gap-1.5 text-[0.72rem] font-semibold ${
            light ? "text-cream/85" : "text-ink"
          } justify-end`}
        >
          powered by
          <img
            src="/assets/elaviere-logo-blk.png"
            alt="Elaviere"
            className={`h-4 w-auto object-contain ${light ? "invert brightness-0" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <div className="page-shell flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-[0.9rem] font-semibold text-black lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <button className="btn btn-outline">Log In</button>
          <button className="btn btn-primary">Join for Free</button>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded border border-forest/25 bg-white/80 text-forest shadow-sm lg:hidden">
          <Menu size={23} />
        </button>
      </div>
    </header>
  );
}

function Hero({ onWatchVideo }) {
  return (
    <section className="hero-band relative overflow-hidden bg-cream pt-28 lg:pt-24">
      <div className="page-shell grid items-center gap-6 lg:grid-cols-[43fr_57fr]">
        <div className="relative z-10 pb-4 lg:pb-10">
          <h1 className="font-serif text-[2.25rem] font-bold leading-[1.08] text-[#0F3D2E] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.7rem]">
            Your Health.
            <br />
            Your Community.
            <br />
            <span className="text-gold">Better Outcomes.</span>
          </h1>
          <p className="mt-6 max-w-[545px] text-base font-normal leading-[1.65] text-[#3A4A45] sm:text-lg">
            Afiya Health is a free space for African immigrants in America to get trusted
            health advice, connect with others, and access care that fits our lives.
          </p>
          <div className="mt-7 grid max-w-[610px] gap-4 text-sm font-medium text-[#0F3D2E] sm:grid-cols-3">
            {["Culturally relevant health information", "Trusted experienced doctors", "Real support, real results"].map(
              (badge) => (
                <div key={badge} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{badge}</span>
                </div>
              ),
            )}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <button className="btn btn-primary h-12 min-w-40 text-base">Join for Free</button>
            <button
              className="inline-flex h-12 items-center gap-3 rounded px-1 text-[0.95rem] font-medium text-ink"
              onClick={onWatchVideo}
              type="button"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-forest text-forest">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px] xl:min-h-[560px]">
          <img
            src="/assets/hero-couple.png"
            alt="Smiling African couple"
            className="hero-image"
          />
          <div className="floating-card">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-forest text-forest">
              <HeartPulse size={31} />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink">We focus on what matters most.</h2>
              <p className="mt-2 text-[0.95rem] font-normal leading-6 text-[#3A4A45]">
                Helping you prevent, manage, and reverse chronic diseases so you can live
                longer and feel better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label="Afiya Health video">
      <button className="video-modal-backdrop" type="button" onClick={onClose} aria-label="Close video" />
      <div className="video-modal-panel">
        <button className="video-modal-close" type="button" onClick={onClose} aria-label="Close video">
          <X size={22} />
        </button>
        <video className="video-modal-player" src="/assets/afiya-video.mp4" controls autoPlay playsInline />
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <section className="relative z-20 mt-5 px-4 sm:px-6 lg:mt-6 lg:px-8">
      <div className="page-shell grid rounded-lg border border-black/10 bg-white shadow-soft md:grid-cols-2 xl:grid-cols-5">
        {features.map(({ icon: Icon, title, copy, purple }, index) => (
          <article
            key={title}
            className={`feature-card ${index !== 0 ? "xl:border-l" : ""}`}
          >
            <Icon size={42} strokeWidth={1.8} className="text-forest" />
            <div>
              <h3>{title}</h3>
              <p className="mt-2.5">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GLPSection() {
  return (
    <article className="conversion-card glp-panel grid md:grid-cols-[35fr_65fr]">
      <div className="glp-product-wrap">
        <img src="/assets/glp-product.png" alt="GLP-1 vial and injection pen" className="glp-product-image" />
      </div>
      <div className="relative z-10 min-w-0 p-5 pl-2">
        <h2 className="font-serif text-[1.48rem] font-bold leading-[1.08] text-purple sm:text-[1.62rem]">
          GLP-1 Medications for High Blood Pressure & Type 2 Diabetes
        </h2>
        <p className="mt-3 max-w-[430px] text-[0.82rem] font-normal leading-[1.45] text-black">
          GLP-1 medications can do more than help with blood sugar and weight. They can
          also help lower blood pressure and reduce the risk of heart disease, two key
          concerns for our community.
        </p>
        <div className="mt-4 grid grid-cols-4 gap-1">
          {benefits.map(([label, Icon]) => (
            <div key={label} className="benefit text-purple">
              <Icon size={22} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button className="btn conversion-button bg-purple text-white hover:bg-[#391566]">See If You Qualify</button>
          <span className="text-[0.78rem] font-medium text-ink">Takes 2 minutes • No cost</span>
        </div>
      </div>
    </article>
  );
}

function DoctorSection() {
  return (
    <article className="conversion-card doctor-panel relative">
      <div className="relative z-10 max-w-[58%] p-5">
        <h2 className="font-serif text-[1.38rem] font-semibold leading-[1.12] text-forest sm:text-[1.55rem]">
          Find a Doctor. Get Care That Fits Your Life.
        </h2>
        <p className="mt-3 max-w-[395px] text-[0.82rem] font-normal leading-[1.45] text-black">
          Connect with licensed healthcare providers who listen to you, understand your
          lifestyle, and help you reach your health goals.
        </p>
        <div className="mt-6 grid max-w-[315px] grid-cols-3 gap-1">
          {doctorFeatures.map(([label, Icon]) => (
            <div key={label} className="benefit text-forest">
              <Icon size={22} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button className="btn btn-primary conversion-button">Find a Doctor & Schedule</button>
          <a href="#" className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-ink">
            How it works <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <img src="/assets/doctors.png" alt="Diverse Black doctors" className="doctor-image" />
    </article>
  );
}

function TopicVisual({ image, title }) {
  return (
    <div className="topic-visual">
      <img src={image} alt="" aria-hidden="true" />
    </div>
  );
}

function TopicCards() {
  return (
    <article className="card-panel p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-ink">Popular Health Topics</h2>
        <a href="#" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-forest">
          View all topics <ArrowRight size={17} />
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic) => (
          <article key={topic.title} className="overflow-hidden rounded-lg border border-black/10 bg-white">
            <TopicVisual image={topic.image} title={topic.title} />
            <div className="p-4">
              <span className="rounded bg-sage px-2 py-1 text-[0.62rem] font-black uppercase text-ink">
                {topic.tag}
              </span>
              <h3 className="mt-3 min-h-[72px] text-[0.92rem] font-medium leading-[1.45] text-black">
                {topic.title}
              </h3>
              <p className="mt-4 text-[0.78rem] font-normal text-black/70">{topic.time}</p>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}

function Testimonial() {
  return (
    <article className="card-panel testimonial-panel p-7 sm:p-9">
      <h2 className="text-xl font-semibold text-ink">Real People. Real Stories. Real Progress.</h2>
      <div className="mt-9 grid items-center gap-8 md:grid-cols-[1fr_210px]">
        <div>
          <div className="font-serif text-5xl font-bold leading-none text-forest">“</div>
          <p className="-mt-5 text-[0.95rem] font-normal leading-[1.65] text-black">
            Afiya Health gave me the knowledge and support I needed. With the right care
            and lifestyle changes, I was able to get my blood pressure and blood sugar
            under control. I have more energy and feel like myself again.
          </p>
          <p className="mt-5 font-semibold text-black">– Kemi, 47</p>
        </div>
        <img
          src="/assets/testimonial-kemi.png"
          alt="Kemi testimonial portrait"
          className="mx-auto h-48 w-48 rounded-full object-cover shadow-card"
        />
      </div>
      <div className="mt-9 flex justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-forest" />
        <span className="h-3 w-3 rounded-full bg-forest/15" />
        <span className="h-3 w-3 rounded-full bg-forest/15" />
      </div>
    </article>
  );
}

function CommunityCTA() {
  return (
    <section className="px-4 pb-3 sm:px-6 lg:px-8">
      <div className="page-shell flex flex-col items-start gap-6 rounded-lg border border-gold/35 bg-[#fffaf1] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[#f8e4b7] text-gold">
            <UsersRound size={41} />
          </div>
          <div>
            <h2 className="font-serif text-[1.75rem] font-bold text-forest">You’re not alone on this journey.</h2>
            <p className="mt-2 text-[0.96rem] font-normal text-[#3A4A45]">
              Join thousands of African immigrants taking charge of their health, together.
            </p>
          </div>
        </div>
        <button className="btn btn-primary h-14 w-full px-10 text-base md:w-auto">
          Join the Community – It’s Free
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const columns = {
    Explore: navItems,
    Company: ["About Us", "Our Mission", "For Partners", "Careers", "Contact Us"],
    Support: ["Help Center", "FAQ", "Privacy Policy", "Terms of Use"],
  };

  return (
    <footer className="bg-forest px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.45fr_2.2fr_1.5fr]">
        <div>
          <Logo light />
          <p className="mt-8 max-w-[300px] text-base leading-7 text-cream/90">
            Culturally relevant care and support for African immigrants in America.
            Better health. Better lives.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold">{heading}</h3>
              <ul className="mt-5 space-y-3 text-[0.86rem] font-normal text-cream/90">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-sm font-semibold">Stay Connected</h3>
          <p className="mt-5 max-w-[330px] text-[0.86rem] font-normal leading-6 text-cream/90">
            Get health tips, new articles, and community updates.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">Email address</label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-forest/55" size={18} />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full rounded border border-white/20 bg-white pl-10 pr-3 font-medium text-ink outline-none"
              />
            </div>
            <button className="btn border border-gold/45 bg-leaf px-6 text-white hover:bg-[#0a4b34]">
              Join for Free
            </button>
          </div>
          <p className="mt-3 text-xs text-cream/80">No spam. Unsubscribe anytime.</p>
          <div className="mt-6 flex gap-4">
            {[Facebook, Instagram, Youtube, Activity].map((Icon, index) => (
              <a key={index} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="page-shell mt-12 border-t border-white/10 pt-6 text-center text-sm text-cream/85">
        © 2025 Afiya Health. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <Hero onWatchVideo={() => setIsVideoOpen(true)} />
      <FeatureCards />
      <main className="page-shell grid gap-6 py-6">
        <section className="conversion-grid">
          <GLPSection />
          <DoctorSection />
        </section>
        <section className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
          <TopicCards />
          <Testimonial />
        </section>
      </main>
      <CommunityCTA />
      <Footer />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
