'use client'

import { useState } from 'react'

const PRESET_AMOUNTS = [50, 100, 500, 1500]

export default function DonateWidget() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [selected, setSelected] = useState<number | null>(100)
  const [custom, setCustom] = useState('')
  const [coverFee, setCoverFee] = useState(false)

  const amount = custom ? parseFloat(custom) || 0 : selected ?? 0
  const fee = coverFee ? Math.round(amount * 0.03 * 100) / 100 : 0
  const total = (amount + fee).toFixed(2)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-lg mx-auto">

      {/* Frequency toggle */}
      <div className="flex rounded-full border border-slate-200 p-1 mb-6">
        {(['once', 'monthly'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${
              frequency === f
                ? 'bg-brand text-white'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {f === 'once' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      {/* Preset amounts */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            onClick={() => { setSelected(amt); setCustom('') }}
            className={`py-2.5 rounded-xl text-sm font-bold border transition-colors ${
              selected === amt && !custom
                ? 'bg-brand text-white border-brand'
                : 'border-slate-200 text-slate-700 hover:border-brand hover:text-brand'
            }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative mb-6">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
        <input
          type="number"
          placeholder="Custom amount"
          value={custom}
          onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
          className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
        />
      </div>

      {/* Cover fee */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={coverFee}
          onChange={(e) => setCoverFee(e.target.checked)}
          className="mt-0.5 accent-brand"
        />
        <span className="text-sm text-slate-500">
          Cover the 3% processing fee so tekFoundation receives the full ${amount > 0 ? amount.toFixed(2) : '0.00'}.
        </span>
      </label>

      {/* Total + CTA */}
      {amount > 0 && (
        <p className="text-center text-slate-400 text-xs mb-3">
          Total: <span className="font-bold text-slate-700">${total}</span>
          {frequency === 'monthly' && ' / month'}
        </p>
      )}

      <a
        href={`mailto:joni@tekfoundation.org.au?subject=Donation enquiry — $${total}${frequency === 'monthly' ? ' monthly' : ''}`}
        className="block w-full text-center bg-brand text-white py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Donate Today
      </a>
    </div>
  )
}
