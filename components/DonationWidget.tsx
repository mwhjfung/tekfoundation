"use client";

import { useMemo, useState } from "react";
import { DONATION } from "@/data/site";

/**
 * Native donation widget. Amounts, frequencies, the 3% cover-the-fee option
 * and the disclaimer replicate the live donation block's configuration 1:1.
 *
 * Payment processing stays exactly where it is today: "Donate Today" hands
 * off to the live checkout (DONATION.checkoutUrl). Squarespace's donation
 * checkout can't run off-platform, so we don't pretend otherwise — when the
 * payment provider changes, update DONATION.checkoutUrl in data/site.ts and
 * nothing else.
 */
export default function DonationWidget() {
  const [amount, setAmount] = useState<number>(DONATION.suggestedAmounts[0]);
  const [custom, setCustom] = useState<string>("");
  const [usingCustom, setUsingCustom] = useState(false);
  const [frequency, setFrequency] = useState(DONATION.defaultFrequency);
  const [coverFee, setCoverFee] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const effectiveAmount = usingCustom ? parseFloat(custom) || 0 : amount;
  const fee = useMemo(
    () => (coverFee ? effectiveAmount * (DONATION.coverTheFee.feePercent / 100) : 0),
    [coverFee, effectiveAmount]
  );
  const total = effectiveAmount + fee;

  const fmt = (n: number) =>
    `${DONATION.currencySymbol}${n.toLocaleString("en-AU", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const donate = () => {
    if (!effectiveAmount || effectiveAmount <= 0) {
      setError("Please choose or enter a donation amount.");
      return;
    }
    setError(null);
    const params = new URLSearchParams({
      amount: String(effectiveAmount),
      frequency,
      coverFee: String(coverFee),
    });
    window.open(`${DONATION.checkoutUrl}?${params.toString()}`, "_blank", "noopener");
  };

  return (
    <div className="donation-card" id="donation-widget">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <div className="donation-amounts" role="group" aria-label="Donation amount">
            {DONATION.suggestedAmounts.map((a) => (
              <button
                key={a}
                type="button"
                className="chip"
                aria-pressed={!usingCustom && amount === a}
                onClick={() => {
                  setAmount(a);
                  setUsingCustom(false);
                  setError(null);
                }}
              >
                {DONATION.currencySymbol}
                {a.toLocaleString("en-AU")}
              </button>
            ))}
          </div>
          {DONATION.customAmountEnabled && (
            <div className="field" style={{ marginTop: "0.75rem" }}>
              <label htmlFor="custom-amount" className="sr-only" style={{ position: "absolute", clip: "rect(0 0 0 0)" }}>
                Custom amount
              </label>
              <input
                id="custom-amount"
                className="input"
                type="number"
                min="1"
                step="1"
                inputMode="decimal"
                placeholder="Custom amount (AUD)"
                value={custom}
                onFocus={() => setUsingCustom(true)}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setUsingCustom(true);
                  setError(null);
                }}
              />
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="donation-frequency">Frequency</label>
          <div className="select-wrap">
            <select
              id="donation-frequency"
              className="select"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              {DONATION.frequencies.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {DONATION.coverTheFee.enabled && (
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={coverFee}
              onChange={(e) => setCoverFee(e.target.checked)}
            />
            <span>{DONATION.coverTheFee.description}</span>
          </label>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", borderTop: "1px solid var(--paper-deep)", paddingTop: "1.1rem" }}>
          {coverFee && (
            <div className="donation-row muted">
              <span>{DONATION.coverTheFee.lineLabel}</span>
              <span>{fmt(fee)}</span>
            </div>
          )}
          <div className="donation-row donation-row--total">
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
        </div>

        {error && (
          <p role="alert" style={{ color: "#b3261e", fontSize: "0.9rem", fontWeight: 600 }}>
            {error}
          </p>
        )}

        <button type="button" className="btn btn--primary btn--lg" onClick={donate}>
          {DONATION.buttonText}
        </button>

        <p className="donation-disclaimer" style={{ textAlign: "center", marginTop: "-0.25rem" }}>
          You&rsquo;ll complete your donation on our secure checkout.
        </p>

        <p className="donation-disclaimer">{DONATION.disclaimer}</p>
      </div>
    </div>
  );
}
