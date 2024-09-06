import ScheduleMeetBtn from '@/components/ScheduleMeetBtn'

export default function Headline() {
  // TODO: Add Video Sales Letter
  return (
    <section id="headline">
      <NocodeBlocks />

      <div className="shine-effect relative mx-auto mb-8 mt-16 block w-fit rounded bg-webflow-dark px-3 py-1.5 text-sm font-medium text-white">
        Exclusive Service for Webflow Developers & Agencies
      </div>

      <div className="mx-auto w-[950px] text-center text-[82px] font-bold leading-tight">
        {'Building Integrations for <'}
        <span className="text-amber-400">no-code</span>
        {'> gen.'}
      </div>

      <div className="mx-auto my-12 w-fit text-2xl font-semibold text-neutral-600">
        Webflow <span className="text-neutral-300">App Developer.</span> Webflow{' '}
        <span className="text-neutral-300">Solutions Architect.</span>
      </div>

      <div
        className="mx-auto flex w-fit flex-row gap-6 rounded-2xl px-6 py-5 backdrop-blur-md"
        style={{
          backgroundImage: `url(data:image/png;base64,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)`,
        }}
      >
        <img
          src="aditya-borkar.png"
          className="h-32 w-32 rounded-xl border border-neutral-800 bg-[#8E2DE2] bg-gradient-to-tl from-[#614385] to-[#516395]"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div className="max-w-[500px] text-base leading-relaxed text-neutral-300">
          <p>I'm Aditya Borkar</p>
          <p className="pt-3">
            I use code to build apps and integrations to make your no-code
            experience wholesome. Supercharge your Webflow experience with
            custom apps, seamless integrations, and powerful stacks to solve
            your problems.
          </p>
        </div>
      </div>

      {/* TODO - ON HOVER - INVOOKE A EXCITING EFFECT */}
      <ScheduleMeetBtn className="mx-auto mt-12 block rounded-full border border-neutral-800 bg-neutral-900 px-8 py-3 text-lg text-neutral-200 transition-all hover:bg-neutral-950">
        Schedule Video Call
      </ScheduleMeetBtn>

      <div className="mt-48"></div>
    </section>
  )
}

function NocodeBlocks() {
  return (
    <div className="child:absolute child:h-20 child:w-20 child:rounded-lg child:bg-white absolute left-0 top-0 -z-10 !m-0 h-full w-full opacity-10">
      <img
        src="/img/zapier.svg"
        alt=""
        className="left-[150px] top-[220px] p-3"
      />
      <img
        src="/img/airtable.png"
        alt=""
        className="left-[200px] top-[450px] p-3"
      />
      <img
        src="/img/airtable.png"
        alt=""
        className="left-[400px] top-[400px] p-3"
      />
      <img src="/img/webflow.png" alt="" className="left-[300px] top-[750px]" />
      <img
        src="/img/coda.webp"
        alt=""
        className="left-[500px] top-[600px] p-3"
      />
      <img
        src="/img/contentful.png"
        alt=""
        className="right-[400px] top-[220px] p-3"
      />
      <img
        src="/img/framer.webp"
        alt=""
        className="right-[280px] top-[400px]"
      />
      <img
        src="/img/shopify.png"
        alt=""
        className="right-[500px] top-[500px] p-3"
      />
      <img
        src="/img/strapi.webp"
        alt=""
        className="right-[150px] top-[150px]"
      />
      <img
        src="/img/strapi.webp"
        alt=""
        className="right-[200px] top-[650px]"
      />
      <img
        src="/img/strapi.webp"
        alt=""
        className="right-[150px] top-[150px]"
      />
    </div>
  )
}
