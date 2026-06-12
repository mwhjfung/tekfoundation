import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import DonationWidget from "@/components/DonationWidget";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your donation keeps tekFoundation's matching services highly subsidised for charities across Australia — so they can focus on their missions, not recruitment.",
};

const WHY_GIVE = [
  {
    icon: "spark",
    title: "Unleash hidden potential",
    body: "Your donation allows us to tap into the wealth of tech talent across Australia and connect it to the causes that need their skills and experience.",
  },
  {
    icon: "coins",
    title: "Fund a new giving economy",
    body: "Your support helps us revolutionise the giving economy, where volunteers, employers and charities can prove the value of skilled volunteering.",
  },
  {
    icon: "chart",
    title: "Exponential impact",
    body: "tekFoundation is an enabler and force multiplier; your donation allows us to help even more charities amplify their impact.",
  },
];

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section section--brand" style={{ paddingTop: "10rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="display" style={{ margin: "0 auto 1.5rem", maxWidth: "11em" }}>
            Make an impact{" "}
            <span className="circle-accent">
              today
              <svg viewBox="0 0 120 56" fill="none" aria-hidden="true">
                <ellipse
                  cx="60"
                  cy="28"
                  rx="56"
                  ry="24"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform="rotate(-3 60 28)"
                />
              </svg>
            </span>
          </h1>
          <p className="lede" style={{ margin: "0 auto", maxWidth: "38em" }}>
            Your generous donation keeps our matching services highly subsidised for charities
            across Australia — so they can focus on their missions, not recruitment.
          </p>
        </div>
      </section>

      {/* Why give + widget */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Why give?</p>
              <h2 className="h2">Every dollar builds capability.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }}>
                {WHY_GIVE.map((w) => (
                  <div key={w.title} style={{ display: "flex", gap: "1.25rem" }}>
                    <span className="icon-disc" style={{ marginBottom: 0 }}>
                      <Icon name={w.icon} size={24} />
                    </span>
                    <div>
                      <h3 className="h3" style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>
                        {w.title}
                      </h3>
                      <p className="muted" style={{ fontSize: "0.975rem" }}>
                        {w.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <img
                className="rounded-photo"
                src="/images/photos/donate-team.jpg"
                alt="tekFoundation team members out meeting charity partners"
                style={{ marginTop: "3rem", aspectRatio: "16 / 10" }}
              />
            </div>

            <div style={{ position: "sticky", top: "6.5rem" }}>
              <DonationWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor callout */}
      <section className="section section--paper">
        <div className="container cta-banner">
          <p className="eyebrow">Companies</p>
          <h2 className="h2">Interested in sponsoring our work?</h2>
          <p className="lede">
            If your company wants to back the mission at a larger scale, a corporate partnership
            delivers visible impact, employee engagement, and a story worth sharing. We&rsquo;d
            love to discuss a collaboration.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/partners" className="btn btn--primary btn--lg">
              Explore partnerships <Icon name="arrow" size={20} />
            </Link>
            <a
              href={`mailto:${SITE.email}?subject=2025 Impact Report request`}
              className="btn btn--outline btn--lg"
            >
              Request our 2025 Impact Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
