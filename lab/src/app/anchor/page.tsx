'use client'

import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Accordion } from './Accordion'

export default function AnchorPage() {
  const [showOverlays, setShowOverlays] = useState(false)

  // TODO - Auto width adjustment like webflow for better UX for resizing
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  // 	setWidth(window.innerWidth);
  // }, []);

  return (
    <div className='mx-auto min-h-screen w-screen max-w-[96rem] px-16 bg-neutral-200 font-medium text-center'>
      <Polyfill />

      <header className='py-16'>
        <input
          id='show-overlays'
          type='checkbox'
          defaultChecked={showOverlays}
          onChange={() => setShowOverlays(!showOverlays)}
        />
        <label htmlFor='show-overlays'>Show Overlays</label>

        <div>
          Tip: You can use GAP or margins in between the grid according to your
          use-case
        </div>
      </header>

      {/* TABS */}
      <div className='grid grid-cols-[1fr_1fr_0.7fr] gap-48'>
        <div className='flex flex-col gap-12'>
          <Accordion
            open
            name='faqs-accordion'
            heading='Code vs No-Code?'
            anchorName='--anchor-faqs-accordion-1'
            className='bg-purple-200 border-purple-500'
          >
            <div className='min-h-36'>
              No-code is the best excuse to not learn code.
            </div>
          </Accordion>
          <Accordion
            name='faqs-accordion'
            heading='Do you love free software (FOSS)?'
            anchorName='--anchor-faqs-accordion-2'
            className='bg-red-200 border-red-500'
          >
            <div className='min-h-24'>
              Of course, I am broke and I want everyone to be like me.
            </div>
          </Accordion>
          <Accordion
            name='faqs-accordion'
            heading='What is your favorite color?'
            anchorName='--anchor-faqs-accordion-3'
            className='bg-pink-200 border-pink-500'
          >
            <div className='min-h-12'>Rebecca Purple 💜</div>
          </Accordion>
        </div>

        <div className='flex justify-center gap-16 items-center'>
          <div
            className={cn(
              'border rounded-4xl min-h-48 w-full',
              'bg-yellow-100 border-yellow-500',
              'flex justify-center items-center',
            )}
            style={{
              // @ts-expect-error - New Property
              anchorName: '--anchor-faqs-point',
              positionTryOptions: 'flip-block',
            }}
          >
            POINT
            <br />
            <br />
            BOX
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div
            style={{
              // @ts-expect-error - New Property
              anchorName: '--anchor-faqs-aside',
            }}
            className={cn(
              'w-full mx-auto bg-green-100 border-green-500 border rounded-2xl min-h-96',
              'flex justify-center items-center',
            )}
          >
            ASIDE BOX
          </div>
        </div>
      </div>

      {/* CONNECTION LINES */}
      {/* TODO - BOX TOP-BOTTOM AUTO FIGURE OUT */}
      <div>
        <div
          className='absolute z-20 bg-green-500 min-h-2 -mt-1'
          style={{
            top: 'min(anchor(--anchor-faqs-point center), anchor(--anchor-faqs-aside center))',
            right: 'anchor(--anchor-faqs-aside left)',
            bottom: 'anchor(--anchor-faqs-aside center)',
            left: 'anchor(--anchor-faqs-point left)',
          }}
        />
        <div
          className={cn('absolute z-20', showOverlays && 'bg-purple-500/20')}
          style={{
            top: 'anchor(--anchor-faqs-accordion-1 center)',
            right: 'anchor(--anchor-faqs-point left)',
            bottom: 'anchor(--anchor-faqs-point center)',
            left: 'anchor(--anchor-faqs-accordion-1 right)',
          }}
        >
          <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            className='w-full h-full mt-0.5'
          >
            <title>Line</title>
            <path
              d='M 0,2 L 40,2 L 80,98 L 100,98'
              className='stroke-purple-500'
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='4'
              fill='none'
            />
          </svg>
        </div>
        <div
          className={cn(
            'absolute min-h-4 z-30',
            showOverlays && 'bg-red-500/20',
          )}
          style={{
            // top: 'min(anchor(--anchor-faqs-point center), anchor(--anchor-faqs-accordion-2 center))',
            top: 'anchor(--anchor-faqs-point center)',
            right: 'anchor(--anchor-faqs-point left)',
            bottom: 'anchor(--anchor-faqs-accordion-2 center)',
            // bottom:
            // 	'max(anchor(--anchor-faqs-point center), anchor(--anchor-faqs-accordion-2 center))',
            left: 'anchor(--anchor-faqs-accordion-2 right)',
          }}
        >
          <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            className='w-full h-full -mt-0.5'
          >
            <title>Line</title>
            <path
              d='M 0,98 L 40,98 L 80,2 L 100,2'
              className='stroke-red-500'
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='4'
              fill='none'
            />
          </svg>
        </div>
        <div
          className={cn('absolute z-20', showOverlays && 'bg-pink-500/20')}
          style={{
            top: 'anchor(--anchor-faqs-point center)',
            right: 'anchor(--anchor-faqs-point left)',
            bottom: 'anchor(--anchor-faqs-accordion-3 center)',
            left: 'anchor(--anchor-faqs-accordion-3 right)',
          }}
        >
          <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            className='w-full h-full -mt-0.5'
          >
            <title>Line</title>
            <path
              d='M 0,98 L 40,98 L 80,2 L 100,2'
              className='stroke-pink-500'
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='4'
              fill='none'
            />
          </svg>
        </div>
      </div>

      <Footer
        leftText='Zero-JS solution with anchor positioning. (Polyfill NOT TESTED)'
        rightText='Last updated 2025-01-03'
      />
    </div>
  )
}

function Polyfill() {
  return (
    <script
      type='module'
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: `if (!("anchorName" in document.documentElement.style)) import("https://unpkg.com/@oddbird/css-anchor-positioning")`,
      }}
    />
  )
}
