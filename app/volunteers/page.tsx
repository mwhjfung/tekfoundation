import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import SignupForm from "@/components/SignupForm";
import { PROJECT_TYPES } from "@/data/site";

export const metadata: Metadata = {
  title: "For Volunteers",
  description:
    "Use your skills as a force for good. Join tekFoundation as an individual, with friends or coworkers, or through a company team program.",
};

const WAYS = [
  {
    icon: "person",
    title: "Join as an individual",
    body: "Sign up yourself and become part of the trusted volunteer community — events, webinars, and projects matched to your skills.",
  },
  {
    icon: "people",
    title: "Volunteer with friends",
    body: "Bring a friend, an email group, or a cross-functional team, and contribute together on a shared project.",
  },
  {
    icon: "building",
    title: "Bring your company team",
    body: "If your workplace wants a bigger volunteer experience, we design and run structured programs through our corporate volunteering offering.",
  },
];

export default function VolunteersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__media">
          <img src="/images/photos/volunteers-event.jpg" alt="" aria-hidden="true" style={{ objectPosition: "center 8%" }} />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__content">
          <p className="eyebrow">For volunteers</p>
          <h1 className="display">Your skills can change the world.</h1>
          <p className="lede">
            Join tekFoundation as an individual, with friends or coworkers, or through a company
            team program. Your contribution is part of something bigger.
          </p>
          <a href="#apply" className="btn btn--primary btn--lg">
            Apply to volunteer <Icon name="arrow" size={20} />
          </a>
        </div>
      </section>

      {/* Why volunteer */}
      <section className="section">
        <div className="container split split--wide-left">
          <div>
            <p className="eyebrow">Why volunteer with tekFoundation</p>
            <h2 className="h2">Give the skills you already have. Get a community back.</h2>
            <p className="muted measure" style={{ marginTop: "1.5rem" }}>
              Volunteering with tekFoundation is a way to contribute to causes you care about while
              meeting great people and using the skills you already have. It&rsquo;s for people at
              all stages of work and life — employed, between jobs, retired, freelancing, or simply
              looking for a more meaningful way to give your time.
            </p>
            <p className="muted measure" style={{ marginTop: "1.25rem" }}>
              Through tekFoundation, you stay connected to charities, other volunteers, and
              opportunities that go beyond one-off support: events, webinars, community
              conversations, and future projects where there&rsquo;s a fit.
            </p>
          </div>
          <img
            className="rounded-photo"
            src="/images/photos/volunteer-spotlight.jpg"
            alt="A tekFoundation volunteer celebrating National Volunteer Week at Kids with Cancer Foundation"
            style={{ aspectRatio: "4 / 5", maxHeight: "34rem" }}
          />
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Ways to get involved</p>
            <h2 className="h2">Come as you are. Bring whoever you like.</h2>
          </div>
          <div className="card-grid">
            {WAYS.map((w) => (
              <div key={w.title} className="path-card" style={{ cursor: "default" }}>
                <span className="icon-disc">
                  <Icon name={w.icon} size={26} />
                </span>
                <span className="h3">{w.title}</span>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
          <p className="muted" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            Company team programs are part of our corporate offering.{" "}
            <Link href="/partners" className="text-link">
              Explore partnerships
            </Link>
          </p>
        </div>
      </section>

      {/* Project types */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Common volunteer projects</p>
            <h2 className="h2">Real work, matched to real needs.</h2>
            <p className="lede">
              We connect the right people to the right work — clearly scoped, well supported, and
              genuinely useful to the charity on the other side.
            </p>
          </div>
          <div className="card-grid card-grid--4">
            {PROJECT_TYPES.map((p) => (
              <div
                key={p.label}
                className="card card--pad"
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.375rem 1.5rem" }}
              >
                <span className="icon-disc" style={{ margin: 0, width: "2.75rem", height: "2.75rem" }}>
                  <Icon name={p.icon} size={22} />
                </span>
                <strong style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}>{p.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonial */}
      <section className="section section--brand">
        <div className="container split">
          <div>
            <p className="eyebrow">Volunteer stories</p>
            <h2 className="h2">Hear it from Bradley.</h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              We caught up with Bradley, a tekFoundation volunteer helping FoodLab Sydney with an
              SEO audit. Here&rsquo;s what he had to say about the experience.
            </p>
          </div>
          <video
            controls
            preload="none"
            poster="/images/photos/bradley-video-poster.jpg"
            style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-pop)", background: "#000" }}
          >
            <source src="/videos/bradley-volunteer-story.mp4" type="video/mp4" />
            Your browser doesn&rsquo;t support embedded video.
          </video>
        </div>
      </section>

      {/* Apply */}
      <section className="section section--paper" id="apply">
        <div className="container">
          <div className="split split--wide-right" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Apply to volunteer</p>
              <h2 className="h2">Ready when you are.</h2>
              <p className="lede" style={{ marginTop: "1.25rem" }}>
                Every volunteer joins through a short application, so we can match the right people
                to the right work.
              </p>
              <ul className="check-list" style={{ marginTop: "1.75rem" }}>
                <li>
                  <Icon name="check" size={18} strokeWidth={2.5} />
                  <span className="muted">Tell us about yourself and the skills you want to share.</span>
                </li>
                <li>
                  <Icon name="check" size={18} strokeWidth={2.5} />
                  <span className="muted">We&rsquo;ll be in touch about next steps — our community is vetted, so expect a short conversation.</span>
                </li>
                <li>
                  <Icon name="check" size={18} strokeWidth={2.5} />
                  <span className="muted">Get matched when a project fits your skills and availability.</span>
                </li>
              </ul>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
