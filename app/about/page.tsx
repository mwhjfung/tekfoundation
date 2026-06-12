import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import ParallaxImage from "@/components/ParallaxImage";
import { BOARD, COMMITTEE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "tekFoundation helps Australian charities amplify their impact by harnessing the best minds and methods in digital innovation.",
};

const VALUES = [
  {
    icon: "heart",
    name: "Connection",
    body: "The connections we facilitate aren't just about matching skills; they're about creating meaningful relationships that drive impactful change, and bring joy and fulfilment to both the charities and volunteers involved.",
  },
  {
    icon: "people",
    name: "Collaborative spirit",
    body: "By working together, tekFoundation, its charity partners and volunteers develop a deeper understanding of each other's challenges and strengths. This empathetic approach helps create solutions that are tailored to the specific needs of each charity, leading to more effective and sustainable outcomes.",
  },
  {
    icon: "cap",
    name: "Mutual learning",
    body: "We're committed to fostering a community that values knowledge sharing and personal development for everyone involved.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-split">
        <div className="container hero-split__grid">
          <div>
            <p className="eyebrow">About tekFoundation</p>
            <h1 className="display">
              We help charities amplify their impact.
            </h1>
            <p className="lede" style={{ marginTop: "1.5rem", marginBottom: "2.25rem" }}>
              We harness the best minds and methods in digital innovation — connecting
              Australian charities with the skilled people and practical support they need
              to do more of what matters.
            </p>
            <Link href="/#paths" className="btn btn--primary btn--lg">
              Get involved <Icon name="arrow" size={20} />
            </Link>
          </div>
          <ParallaxImage
            src="/images/photos/community-event.jpg"
            alt="tekFoundation volunteers and charity partners at a community event"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--paper">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Our mission</p>
              <h2 className="h3" style={{ marginBottom: "1rem" }}>
                Empowering Australian charities.
              </h2>
              <p className="muted measure">
                To empower Australian charities by creating strategic connections in the
                tech community, so charities can focus on their missions, upskill their
                teams, and deliver good in the world.
              </p>
            </div>
            <div>
              <p className="eyebrow">Our vision</p>
              <h2 className="h3" style={{ marginBottom: "1rem" }}>
                A level playing field.
              </h2>
              <p className="muted measure">
                A world where charities have equal opportunity to succeed, supported by
                skilled volunteers who are eager to help — and the infrastructure to make
                that support count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">What drives us</p>
            <h2 className="h2">Our values.</h2>
          </div>
          <div className="card-grid">
            {VALUES.map((v) => (
              <div key={v.name} className="card card--pad">
                <span className="icon-disc">
                  <Icon name={v.icon} size={26} />
                </span>
                <h3 className="h3" style={{ marginBottom: "0.75rem" }}>
                  {v.name}
                </h3>
                <p className="muted" style={{ fontSize: "0.975rem" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Leadership</p>
            <h2 className="h2">Meet the board.</h2>
          </div>
          <div className="team-grid">
            {BOARD.map((p) => (
              <div key={p.name} className="team-card">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="team-card__photo"
                  style={p.photoPosition ? { objectPosition: p.photoPosition } : undefined}
                />
                <div className="team-card__name">{p.name}</div>
                <div className="team-card__role">{p.role}</div>
                <div className="team-card__org">{p.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Advisory</p>
            <h2 className="h2">Our committee.</h2>
          </div>
          <div className="team-grid">
            {COMMITTEE.map((p) => (
              <div key={p.name} className="team-card">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="team-card__photo"
                  style={p.photoPosition ? { objectPosition: p.photoPosition } : undefined}
                />
                <div className="team-card__name">{p.name}</div>
                <div className="team-card__role">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--brand">
        <div className="container cta-banner">
          <p className="eyebrow">Get involved</p>
          <h2 className="h2">Join the movement.</h2>
          <p className="lede">
            Whether you&rsquo;re a charity, a skilled volunteer, or a company with
            purpose — there&rsquo;s a place for you in the tekFoundation community.
          </p>
          <Link href="/#paths" className="btn btn--inverse btn--lg">
            Find your path <Icon name="arrow" size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
