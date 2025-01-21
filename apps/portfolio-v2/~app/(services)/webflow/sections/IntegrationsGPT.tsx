'use client'

import {
  HiCodeBracketSquare,
  HiEye,
  HiMiniCalendar,
  HiOutlineArrowPath,
} from 'react-icons/hi2'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import 'reactflow/dist/style.css'

import ScheduleMeetBtn from '../ScheduleMeetBtn'

export default function IntegrationsGPT() {
  return (
    <section className="py-[50px]">
      <div className="mx-auto grid h-[60vh] w-[70vw] grid-cols-[60%_40%] gap-12 child:h-full child:bg-neutral-900">
        <Input />
        <Output />
      </div>
    </section>
  )
}

function Input() {
  const proOptions = { hideAttribution: true }
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ]
  return (
    <ReactFlow
      className="rounded-3xl p-6"
      proOptions={proOptions}
      nodes={initialNodes}
      edges={initialEdges}
    >
      <Controls />
      <Background
        size={1}
        gap={25}
        color="#262626"
        variant={BackgroundVariant.Lines}
      />
    </ReactFlow>
  )
}

// TODO - Try FrostEffect
function Output() {
  const response = null
  return (
    <div className="relative rounded-xl p-10">
      <div className="absolute left-0 top-0 flex w-full flex-row justify-between border-b border-neutral-800 px-4 py-3">
        <div className="pt-0.5 font-medium text-neutral-100">
          <HiCodeBracketSquare className="ml-2 mr-1 inline align-[-5px] text-2xl text-neutral-300" />
          IntegrationsGPT
        </div>
        <div className="rounded border border-neutral-700 px-2 py-1 text-sm font-medium text-neutral-500">
          <HiEye className="inline align-[-2px]" /> 105 visitors
        </div>
        <div className="hidden w-[300px] border border-neutral-800 bg-neutral-950 p-2 text-sm">
          This number is updated everytime someone clicks on "Integrations" or
          "Regenerates Ideas".
        </div>
      </div>

      {response ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-lg font-medium text-neutral-500">
            Select Blocks and see the magic ✨
          </span>
        </div>
      ) : (
        <>
          <div className="mt-10 leading-relaxed text-neutral-200 child:mb-4">
            <p>
              If you have a Content Creation Business, you can integrate hubspot
              to manage your content and webflow to create an amazing website.
            </p>
            <p>
              Hubspot has the best-in-class SEO game nad some more advantages
              that you can not imagine.
            </p>
            <p>
              Webflow is well known no-code tool to get your website up and
              running at the earliest.
            </p>
            <p>
              Loved the idea? Have a similar problem for a project? Let's talk
              on Loved the idea? Have a similar problem for a project? Let's
              talk on email (adityab.com) or schedule a call
            </p>
          </div>

          <div className="mt-6 flex flex-row justify-between">
            <button className="w-fit rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300 transition-all hover:scale-[0.98] active:scale-90">
              <HiOutlineArrowPath className="mr-1 inline align-[-2px]" />
              Regenerate Idea
            </button>
            <ScheduleMeetBtn className="w-fit rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300 transition-all hover:scale-[0.98] active:scale-90">
              <HiMiniCalendar className="mr-1 inline align-[-2px]" /> Schedule a
              Call
            </ScheduleMeetBtn>
          </div>
        </>
      )}
    </div>
  )
}
