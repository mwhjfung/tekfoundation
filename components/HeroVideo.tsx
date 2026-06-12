'use client';
import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 0.7;
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      poster="/images/photos/hero-community.jpg"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src="/videos/hero.mov" type="video/mp4" />
    </video>
  );
}
