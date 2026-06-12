'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const match = value.match(/^(\$?)([0-9,]+)(.*)$/);
    if (!match) { setDisplay(value); return; }

    const prefix = match[1];
    const num = parseInt(match[2].replace(/,/g, ''), 10);
    const suffix = match[3];
    const duration = 1600;
    const start = performance.now();

    function tick() {
      const elapsed = performance.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = Math.round(eased * num);
      const formatted = num >= 1000 ? current.toLocaleString('en-AU') : String(current);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
