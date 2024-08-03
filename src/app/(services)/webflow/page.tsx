// import CustomScroll from '../../components/CustomScroll'
import Benefits from './sections/Benefits'
import CTA from './sections/CTA'
import Faqs from './sections/Faqs'
import Headline from './sections/Headline'
import IntegrationsGPT from './sections/IntegrationsGPT'
import Process from './sections/Process'
import RecentWork from './sections/RecentWork'

export default function Home() {
  return (
    <main data-scroll className="relative cursor-default pt-12">
      {/* <CustomScroll /> */}

      <Headline />

      {/* <IntegrationsGPT /> */}

      <RecentWork />

      <Benefits />

      <Process />

      <Faqs />

      <CTA />
    </main>
  )
}
