import { useState } from 'react'

import Chat from './Chat'
import Onboarding from './Onboarding'
import AdityaBorkar from '@/assets/profile-bg.png'
import { cn } from '@/lib/utils'

export default function ChatDialog() {
  const [firstName, setFirstName] = useState('Aditya')

  return (
    <dialog
      open
      className='fixed top-0 left-0 w-screen h-screen backdrop-blur-3xl bg-black/50'
    >
      <div
        id='chat-window'
        className={cn(
          'backdrop-blur-3xl text-sm bg-background/80  relative mx-auto shadow-lg  flex flex-col',
          'w-full h-full md:h-3/4 md:translate-y-1/5 md:rounded-4xl max-w-[48rem]',
        )}
      >
        {/* <!-- TODO: Progressive Blur Effect --> */}
        <header
          className={cn(
            'backdrop-blur-sm z-30 flex fixed top-0 left-0 w-full flex-row justify-between py-4 px-4 border-b border-bg-tertiary/50',
            'md:rounded-t-4xl',
          )}
        >
          <div className='flex flex-row gap-2 ml-4 items-center'>
            <img
              src={AdityaBorkar.src}
              alt='Aditya Borkar'
              className='size-10 border border-border/20 rounded-full'
            />
            <div className='flex flex-col justify-center mt-1'>
              <div className='text-base leading-tight font-semibold'>
                Aditya Borkar's
              </div>
              <div className='text-sm text-text-secondary leading-tight'>
                AI Assistant
              </div>
            </div>
          </div>
          <button
            type='button'
            className='text-text-secondary size-10 rounded-full bg-bg-primary hover:scale-125 active:scale-80 transition-all duration-300'
          >
            Close
          </button>
        </header>

        {firstName ? (
          <Chat firstName={firstName} />
        ) : (
          <Onboarding setFirstName={setFirstName} />
        )}
      </div>
    </dialog>
  )
}
