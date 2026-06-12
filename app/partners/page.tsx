import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { PARTNER_TIERS, VAAS_FORMATS, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "For Corporate Partners",
  description:
    "Turn corporate social responsibility into visible, high-trust community impact. Partnership tiers and skilled volunteering programs with tekFoundation.",
};

const WHY = [
  {
    icon: "laptop",
    title: "Proven model for digital uplift",
    body: "tekFoundation has proudly worked with 55+ charities around Australia, matching them with skilled volunteers to deliver digital capability. A partnership aligns your brand with a trusted, growing national movement supporting charities nationwide.",
  },
  {
    icon: "cap",
    title: "Practical staff training (L&D)",
    body: "Use your partnership as a dynamic, real-world learning and capability sandbox. By matching your people with new organisational challenges, your staff sharpen cross-functional communication, systems thinking, and leadership.",
  },
  {
    icon: "heart",
    title: "Skilled volunteering made easy",
    body: "Give your entire workforce a simple, rewarding way to give back using their professional skills — from web and app development and automation to finance, social media, and data analysis. We remove the administrative friction and manage coordination from start to finish.",
  },
  {
    icon: "eye",
    title: "Impact worth sharing",
    body: "Get clear, honest data on the good your business is doing. Not only hours and value delivered, but stories you can proudly share — backed by branding across the tekFoundation ecosystem as an impact partner.",
  },
];

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-split">
        <div className="container hero-split__grid">
          <div>
            <p className="eyebrow">tekFoundation for enterprise</p>
            <h1 className="display">Your ESG story, delivered through a trusted community network.</h1>
            <p className="lede" style={{ marginTop: "1.5rem", marginBottom: "2.25rem" }}>
              Most grassroots charities can&rsquo;t afford the digital capability they need. Your
              partnership removes that barrier — and gives them access to tekFoundation&rsquo;s
              year-round support network.
            </p>
            <a href="#tiers" className="btn btn--primary btn--lg">
              View partnership tiers <Icon name="arrow" size={20} />
            </a>
          </div>
          <div className="hero-split__media">
            <img
              src="/images/photos/event-networking.jpg"
              alt="Corporate partners and charity leaders connecting at a tekFoundation event"
            />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Why partner with tekFoundation</p>
            <h2 className="h2">
              Corporate social responsibility, turned into visible, high-trust impact.
            </h2>
            <p className="lede">
              We connect your people, brand, and purpose to real charity outcomes — and make them
              worth talking about.
            </p>
          </div>
          <div className="card-grid card-grid--2">
            {WHY.map((w) => (
              <div key={w.title} className="card card--pad">
                <span className="icon-disc">
                  <Icon name={w.icon} size={26} />
                </span>
                <h3 className="h3" style={{ marginBottom: "0.75rem" }}>
                  {w.title}
                </h3>
                <p className="muted" style={{ fontSize: "0.975rem" }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section section--brand" id="tiers">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Corporate partnership tiers</p>
            <h2 className="h2">Back digital capability in the social sector.</h2>
            <p className="lede">
              Designed for companies that want to engage employees in meaningful ways and align
              with a trusted, growing community.
            </p>
          </div>
          <div className="card-grid card-grid--2">
            {PARTNER_TIERS.map((tier) => (
              <div key={tier.name} className="tier">
                <div className="tier__name">{tier.name}</div>
                <div className="tier__price">{tier.price}</div>
                <p className="tier__blurb">
                  <strong>Best for:</strong> {tier.blurb}
                </p>
                <p
                  className="tier__blurb"
                  style={{ color: "var(--brand)", fontWeight: 700, marginTop: "0.5rem" }}
                >
                  {tier.unlocks}
                </p>
                <ul className="tier__list">
                  {tier.groups.map((g) => (
                    <li key={g.heading} style={{ display: "block" }}>
                      <span className="tier__group">{g.heading}</span>
                      <ul className="tier__list" style={{ margin: "0.6rem 0 0" }}>
                        {g.items.map((item) => (
                          <li key={item}>
                            <Icon name="check" size={16} strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${SITE.email}?subject=Partnership enquiry — ${tier.name}`}
                  className="btn btn--outline btn--sm"
                >
                  Reach out
                </a>
              </div>
            ))}
          </div>

          <div
            className="card card--pad"
            style={{ marginTop: "2.5rem", color: "var(--ink)" }}
          >
            <div className="split" style={{ gap: "2rem", alignItems: "start" }}>
              <p className="muted" style={{ fontSize: "0.95rem" }}>
                <strong style={{ color: "var(--ink)" }}>The mechanics:</strong> each charity
                membership costs $1,500 on average and provides a year of support, learning, and
                digital volunteering projects. Your partnership makes access possible for charities
                facing financial barriers, while funding the delivery systems needed to run a
                high-quality, sustainable service.
              </p>
              <p className="muted" style={{ fontSize: "0.95rem" }}>
                <strong style={{ color: "var(--ink)" }}>The flexibility:</strong> if you already
                support a specific charity, we can direct your funding there. If your pipeline is
                full, your support is allocated to the next available charity in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VaaS */}
      <section className="section" id="vaas">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Volunteering as a Service</p>
            <h2 className="h2">Skilled volunteering, made easy.</h2>
            <p className="lede">
              VaaS helps companies turn employee goodwill and skills into practical support for
              charities. We manage the matching, coordination, and charity fit for a smooth,
              well-supported experience.
            </p>
          </div>
          <div className="vaas-stack">
            {VAAS_FORMATS.map((v) => (
              <div key={v.name} className={`vaas-item${v.featured ? " vaas-item--featured" : ""}`}>
                <div>
                  {v.featured && <span className="vaas-item__label">Most flexible</span>}
                  <h3 className="h3" style={{ marginBottom: "0.625rem" }}>{v.name}</h3>
                  <p className="tier__blurb" style={{ marginTop: 0 }}>
                    <strong>Best for:</strong> {v.bestFor}
                  </p>
                </div>
                <p className="muted" style={{ fontSize: "0.975rem" }}>{v.body}</p>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: "2.5rem", maxWidth: "44rem" }}>
            Our VaaS delivery menu is activated at the <strong>Impact Builder $15k tier and
            above</strong>. Partnerships can be tailored to your team size, goals, and budget, with
            options to mix and match program types across the year.
          </p>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="section section--tint">
        <div className="container cta-banner">
          <p className="eyebrow">Need something tailored?</p>
          <h2 className="h2">Let&rsquo;s shape a partnership around your goals.</h2>
          <p className="lede">
            If the four tiers don&rsquo;t quite fit, we&rsquo;d love to discuss a bespoke option
            shaped around your priorities, audience, and budget — custom recognition, deeper
            collaboration, tailored volunteering formats, and multi-year support.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Bespoke partnership enquiry`}
            className="btn btn--primary btn--lg"
          >
            Speak with the founders <Icon name="arrow" size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
