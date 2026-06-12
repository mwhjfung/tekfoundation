import Link from "next/link";
import Icon from "@/components/Icon";
import HeroVideo from "@/components/HeroVideo";
import CountUp from "@/components/CountUp";
import { STATS, TESTIMONIALS, CHARITY_NETWORK, SITE } from "@/data/site";

const PATHS = [
  {
    kicker: "For charities",
    title: "Strengthen your digital core",
    body: "Connect with vetted volunteers and digital experts, join a supportive peer community, and access member benefits that help you do more with less.",
    cta: "View memberships",
    href: "/charities",
  },
  {
    kicker: "For volunteers",
    title: "Share your expertise",
    body: "Use your skills as a force for good. Join a vetted community, apply your expertise in a new context, and take on meaningful projects.",
    cta: "Become a volunteer",
    href: "/volunteers",
  },
  {
    kicker: "For companies",
    title: "Power the ecosystem",
    body: "Unlock digital capability for the charity sector through sponsorships, flexible skilled volunteering programs for your staff, or bespoke ESG partnerships.",
    cta: "Explore partnerships",
    href: "/partners",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__media">
          <HeroVideo />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__content">
          <p className="eyebrow">A digital capability engine for community impact</p>
          <h1 className="display">We amplify the impact of charities.</h1>
          <p className="lede">
            tekFoundation connects Australian charities with skilled tech volunteers and trusted
            partners — turning community goodwill into real capability.
          </p>
          <Link href="#paths" className="btn btn--inverse btn--lg">
            Choose your path <Icon name="arrow" size={20} />
          </Link>
        </div>
      </section>

      {/* Why we exist */}
      <section className="section">
        <div className="container split split--wide-left">
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="h2">
              Charities do extraordinary work. Too many are held back by technology.
            </h2>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              Outdated digital systems, limited budgets, and stretched teams stand between good
              organisations and the people who depend on them.
            </p>
            <p className="muted measure" style={{ marginTop: "1.25rem" }}>
              tekFoundation closes that gap. We match real charity needs with the right skilled
              volunteers, and we power a support system around that work — year-round, not just for
              one-off moments. We&rsquo;re not just a matchmaker; we&rsquo;re a support system.
            </p>
          </div>
          <img
            className="rounded-photo"
            src="/images/photos/team-meeting.jpg"
            alt="A tekFoundation volunteer team working with a charity around a meeting table"
            style={{ aspectRatio: "4 / 3" }}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="section section--brand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Proof, not promises</p>
            <h2 className="h2">Visible impact since 2023.</h2>
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat__value"><CountUp value={s.value} /></div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="section section--paper" id="paths">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Get involved</p>
            <h2 className="h2">Choose your path to impact.</h2>
          </div>
          <div className="card-grid">
            {PATHS.map((p) => (
              <Link key={p.href} href={p.href} className="path-card">
                <span className="path-card__kicker">{p.kicker}</span>
                <span className="h3">{p.title}</span>
                <p>{p.body}</p>
                <span className="path-card__cta">
                  {p.cta} <Icon name="arrow" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Trusted by Australia&rsquo;s charity network</p>
            <h2 className="h2">The right people, on real frontline work.</h2>
            <p className="lede">
              Since 2023, we&rsquo;ve partnered with frontline organisations to solve technical
              challenges, match the right skills, and deliver lasting digital infrastructure.
            </p>
          </div>
          <div className="logo-strip">
            {CHARITY_NETWORK.map((org) =>
              org.href ? (
                <a
                  key={org.name}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-strip__tile logo-strip__tile--link"
                >
                  {org.logo ? (
                    <img src={org.logo} alt={org.name} />
                  ) : (
                    <span className="logo-strip__name">{org.name}</span>
                  )}
                </a>
              ) : (
                <div key={org.name} className="logo-strip__tile">
                  {org.logo ? (
                    <img src={org.logo} alt={org.name} />
                  ) : (
                    <span className="logo-strip__name">{org.name}</span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In their words</p>
            <h2 className="h2">Stories from the community.</h2>
          </div>
          <div className="card-grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="quote-card">
                <span className="quote-card__mark">
                  <Icon name="quote" size={32} />
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  {t.avatar && (
                    <img src={t.avatar} alt={t.name} className="quote-card__avatar" />
                  )}
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section section--tint" id="get-in-touch">
        <div className="container cta-banner">
          <p className="eyebrow">Get in touch</p>
          <h2 className="h2">Ready to get involved?</h2>
          <p className="lede">
            Whether you&rsquo;re a charity, a skilled volunteer, or a company with purpose —
            we&rsquo;d love to hear from you.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="btn btn--primary btn--lg"
          >
            Get in touch <Icon name="arrow" size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
