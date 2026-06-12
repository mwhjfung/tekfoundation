"use client";

import { useEffect } from "react";
import { SIGNUP_SURVEY } from "@/data/site";

/**
 * The live sign-up/interest survey, preserved exactly as embedded on
 * tekfoundation.org.au — same survey id, src, and resize script
 * (form_embed.js listens for postMessage events and auto-sizes the iframe).
 * Only the shell around it is ours; field styling lives in the
 * LeadConnector form builder.
 */
export default function SignupForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SIGNUP_SURVEY.script}"]`)) return;
    const s = document.createElement("script");
    s.src = SIGNUP_SURVEY.script;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="embed-shell">
      <div className="embed-shell__bar" aria-hidden="true" />
      <div className="embed-shell__body">
        <iframe
          src={SIGNUP_SURVEY.src}
          style={{ border: "none", width: "100%" }}
          scrolling="no"
          id={SIGNUP_SURVEY.id}
          title="survey"
        />
      </div>
    </div>
  );
}
