import type { Metadata } from "next";
import Icon from "@/components/Icon";
import SignupForm from "@/components/SignupForm";
import { MEMBERSHIP_TIERS, CHARITY_TESTIMONIALS, FAQS, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "For Charities — membership",
  description:
    "tekFoundation membership helps your organisation build lasting digital capability through the right mix of resourcing, community, and practical help.",
};

export default function CharitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-split">
        <div className="container hero-split__grid">
          <div>
            <p className="eyebrow">For charities</p>
            <h1 className="display">More than a volunteer match.</h1>
            <p className="lede" style={{ marginTop: "1.5rem", marginBottom: "2.25rem" }}>
              Membership is designed to help your organisation build lasting digital capability —
              the right mix of resourcing, community, and practical help. We see you, we&rsquo;ve
              got you, and we&rsquo;ll keep showing up.
            </p>
            <a href="#tiers" className="btn btn--primary btn--lg">
              See membership tiers <Icon name="arrow" size={20} />
            </a>
          </div>
          <div className="hero-split__media">
            <img
              src="/images/photos/team-meeting.jpg"
              alt="Charity staff and tekFoundation volunteers working together in a meeting room"
            />
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section section--paper" id="tiers">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Membership</p>
            <h2 className="h2">Tiers for every scale.</h2>
            <p className="lede">
              One annual fee. A year of trusted support, strategic matching, and a community that
              has your back.
            </p>
          </div>
          <div className="card-grid">
            {MEMBERSHIP_TIERS.map((tier) => (
              <div key={tier.name} className={`tier${tier.featured ? " tier--featured" : ""}`}>
                {tier.featured && <span className="tier__flag">{tier.flag}</span>}
                <div className="tier__name">{tier.name}</div>
                <div className="tier__price">
                  {tier.price} <small>{tier.cadence}</small>
                </div>
                <p className="tier__blurb">{tier.blurb}</p>
                <ul className="tier__list">
                  {tier.items.map((item) =>
                    item.endsWith(":") ? (
                      <li key={item}>
                        <span className="tier__group">{item.slice(0, -1)}</span>
                      </li>
                    ) : (
                      <li key={item}>
                        <Icon name="check" size={16} strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
                <a
                  href="#apply"
                  className={`btn ${tier.featured ? "btn--primary" : "btn--outline"}`}
                >
                  Submit interest
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why paid model */}
      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow">Straight talk</p>
          <h2 className="h2">Why we&rsquo;re moving to a paid model.</h2>
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            For three years, tekFoundation has run on pure passion. To reliably support the
            Australian non-profit sector well into the future, we practise what we preach:
            operational sustainability.
          </p>
          <p className="muted" style={{ marginTop: "1.25rem" }}>
            A transparent annual fee lets us provide higher-touch program management and nurture
            the kind of ecosystem that supports charities in ways no single project can. We are
            building something that lasts.
          </p>

          <div className="card card--pad" style={{ marginTop: "3rem", borderLeft: "4px solid var(--brand)" }}>
            <h3 className="h3" style={{ marginBottom: "0.75rem" }}>
              Our commitment to accessibility
            </h3>
            <p className="muted">
              Financial limitations should never stand in the way of systemic social impact. If
              your organisation can&rsquo;t afford a tier right now, don&rsquo;t walk away.
              We&rsquo;re actively partnering with corporate sponsors to fully fund memberships for
              eligible grassroots groups, alongside working hard to roll out a dedicated financial
              aid fund.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Financial aid enquiry`}
              className="btn btn--outline"
              style={{ marginTop: "1.5rem" }}
            >
              Ask about financial aid
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--brand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">From our members</p>
            <h2 className="h2">Charities back us up on this.</h2>
          </div>
          <div className="card-grid card-grid--2">
            {CHARITY_TESTIMONIALS.map((t) => (
              <figure key={t.name} className="quote-card">
                <span className="quote-card__mark">
                  <Icon name="quote" size={32} />
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container--narrow">
          <div className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2 className="h2">Frequently asked questions.</h2>
          </div>
          {FAQS.map((f) => (
            <div key={f.q} className="faq-block">
              <h3 className="faq-block__q">{f.q}</h3>
              <div className="faq__body">
                <p>{f.a.intro}</p>
                <ul>
                  {f.a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {"intro2" in f.a && f.a.intro2 && (
                  <>
                    <p>{f.a.intro2}</p>
                    <ul>
                      {f.a.bullets2?.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p>{f.a.outro}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="section section--paper" id="apply">
        <div className="container">
          <div className="split split--wide-left" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Submit interest</p>
              <h2 className="h2">Tell us where you&rsquo;re at.</h2>
              <p className="lede" style={{ marginTop: "1.25rem" }}>
                Share a little about your organisation and the digital support you need.
                We&rsquo;ll come back to you about membership, matching, and what&rsquo;s possible.
              </p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
