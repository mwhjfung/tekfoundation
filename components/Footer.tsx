import Link from 'next/link'
import Image from 'next/image'
import { FOOTER } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <Image
            src="/logo.png"
            alt="tekFoundation"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
          <div className="flex gap-6 text-sm">
            <Link
              href={FOOTER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={FOOTER.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 space-y-3 text-sm text-center sm:text-left">
          <p>{FOOTER.acknowledgement}</p>
          <p className="text-slate-500">
            {FOOTER.copyright} · {FOOTER.abn} · ACNC Registered Charity
          </p>
        </div>
      </div>
    </footer>
  )
}
