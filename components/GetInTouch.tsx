import Script from 'next/script'
import { GET_IN_TOUCH } from '@/data/content'

export default function GetInTouch() {
  return (
    <section
      id={GET_IN_TOUCH.id}
      className="bg-gradient-to-br from-brand to-[#a820a5] py-20 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          {GET_IN_TOUCH.heading}
        </h2>
        <p className="text-white/80 text-lg mb-8">{GET_IN_TOUCH.body}</p>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/blu8pS2IoHrMNfA3KcVG"
            style={{ border: 'none', width: '100%' }}
            scrolling="no"
            id="blu8pS2IoHrMNfA3KcVG"
            title="Get in Touch"
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  )
}
