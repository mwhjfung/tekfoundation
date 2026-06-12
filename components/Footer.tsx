import Link from "next/link";
import Icon from "./Icon";
import { SITE, ACKNOWLEDGEMENT } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <img
                src="/images/logos/brand/tekfoundation-logo-icon.png"
                alt=""
                aria-hidden="true"
                style={{ height: "2.375rem", width: "auto" }}
              />
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "var(--white)",
                }}
              >
                tekFoundation<span style={{ color: "var(--brand-bright)" }}>.</span>
              </span>
            </div>
            <p>
              A trusted ecosystem connecting charities, tech talent, and corporate partners — turning
              community goodwill into real capability.
            </p>
            <div className="social-row">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="tekFoundation on LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="tekFoundation on Instagram">
                <Icon name="instagram" size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Get involved</h4>
            <ul>
              <li><Link href="/charities">For charities</Link></li>
              <li><Link href="/volunteers">For volunteers</Link></li>
              <li><Link href="/partners">For corporate partners</Link></li>
              <li><Link href="/donate">Donate</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>
                <a href={SITE.liveSite} target="_blank" rel="noopener noreferrer">
                  tekfoundation.org.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__meta">
          <img src="/images/logos/acnc/acnc-registered-charity-logo.png" alt="ACNC Registered Charity" />
          <div className="footer__legal">
            © tekFoundation 2026 &nbsp;·&nbsp; ABN {SITE.abn}
          </div>
        </div>

        <p className="footer__ack">
          {ACKNOWLEDGEMENT.body} <em>{ACKNOWLEDGEMENT.credit}</em>
        </p>
      </div>
    </footer>
  );
}
