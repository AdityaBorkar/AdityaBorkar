import {
  cancelFrame,
  frame,
  motion,
  useMotionValueEvent,
  useTransform,
  useVelocity,
} from 'motion/react'
import { useScroll } from 'motion/react'
import React, { useState, useRef, useEffect } from 'react'

import { TypingIndicator } from './chat/TypingIndicator'
import Message from './chat/Message'
import { cn } from '@/lib/utils'
import ReactLenis, { type LenisRef } from 'lenis/react'

type MessageType = {
  id: string
  role: 'user' | 'assistant'
  content: ContentType[]
}

type ContentType = { sticker: string } | { text: string } | { media: string }

export default function Chat({ firstName }: { firstName: string }) {
  // TODO: Store chat messages in localStorage for retrieval
  // TODO: Manually collect all conversations and analyze every weekend and improve the LLM model
  // TODO: Speaking bars with live text appearing in the text screen with the caret animation

  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 'cuid2',
      role: 'assistant',
      content: [
        { text: `Hola, Good Evening! ${firstName}` },
        { sticker: '👋' },
        {
          text: 'I am a chatbot designed and developed by Aditya Borkar as a side project. It is aimed to be conversational and help you with your queries. It has access to limited information about me. The project is still experimental.',
        },
      ],
      //   Add Sticker and coldplay music
    },
    {
      id: 'cuid5',
      role: 'user',
      content: [
        { text: 'What is your name?' },
        { sticker: '👋' },
        {
          text: 'I want to design a full stack application with lots of dynamic elements. Can you get the work done within one hour?',
        },
        {
          text: 'You are boring me now! Come up with something better. Entertain me man!',
        },
      ],
    },
    {
      id: 'cui2d5',
      role: 'assistant',
      content: [
        {
          text: 'You are boring me now!  full stack application with lots of dynamic elements. Can you get the  better. Entertain me man!',
        },
      ],
    },
    {
      id: 'cuidas5',
      role: 'user',
      content: [
        { text: 'What is your name?' },
        { sticker: '👋' },
        {
          text: 'I want to design a full stack application with lots of dynamic elements. Can you get the work done within one hour?',
        },
        {
          text: 'You are boring me now! Come up with something better. Entertain me man!',
        },
      ],
    },
    {
      id: 'csui2d5',
      role: 'assistant',
      content: [
        {
          text: 'You are boring me now!  full stack application with lots of dynamic elements. Can you get the  better. Entertain me man!',
        },
      ],
    },
    {
      id: 'cuiadas5',
      role: 'user',
      content: [
        { text: 'What is your name?' },
        { sticker: '👋' },
        {
          text: 'I want to design a full stack application with lots of dynamic elements. Can you get the work done within one hour?',
        },
        {
          text: 'You are boring me now! Come up with something better. Entertain me man!',
        },
      ],
    },
    {
      id: 'csufi2d5',
      role: 'assistant',
      content: [
        {
          text: 'You are boring me now!  full stack application with lots of dynamic elements. Can you get the  better. Entertain me man!',
        },
      ],
    },
    {
      id: 'cuasidas5',
      role: 'user',
      content: [
        { text: 'What is your name?' },
        { sticker: '👋' },
        {
          text: 'I want to design a full stack application with lots of dynamic elements. Can you get the work done within one hour?',
        },
        {
          text: 'You are boring me now! Come up with something better. Entertain me man!',
        },
      ],
    },
    {
      id: 'csaaui2d5',
      role: 'assistant',
      content: [
        {
          text: 'You are boring me now!  full stack application with lots of dynamic elements. Can you get the  better. Entertain me man!',
        },
      ],
    },
  ])

  const lenisRef = useRef<LenisRef>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const velocity = useVelocity(scrollYProgress)
  const absoluteVelocity = useTransform(() => Math.abs(velocity.get()))
  // const gap = useTransform(absoluteVelocity, [0, 10], ['4px', '64px'])
  // useEffect(() => {
  //   gap.on('change', latest => {
  //     console.log('gap: ', latest)
  //   })
  // }, [absoluteVelocity])

  useEffect(() => {
    //   function update(data: { timestamp: number }) {
    //     console.log('data: ', data)
    //     const time = data.timestamp
    // lenisRef.current?.lenis?.raf(time)
    lenisRef.current?.lenis?.on('scroll', () => {
      console.log('OKay')
    })
    absoluteVelocity.on('change', latest => {
      console.log('absoluteVelocity: ', latest)
    })
    //   }
    //   frame.update(update, true)
    //   return () => cancelFrame(update)
  }, [])

  return (
    <>
      <ReactLenis
        ref={lenisRef}
        options={{ autoRaf: true }}
        className='overflow-auto w-full h-full'
      >
        <main
          ref={scrollRef}
          className={cn(
            'grow px-4 pt-32 pb-24 overflow-auto bg-white',
            'md:px-8',
          )}
        >
          {messages.map(message => (
            <Message
              key={message.id}
              content={message.content}
              // gap={gap}
              wrapperClass={
                // ! TRY FLEXBOX
                message.role === 'user'
                  ? 'text-white bg-green-600 ml-auto'
                  : 'text-text-primary bg-bg-primary/80 mr-auto'
              }
            />
          ))}
          <TypingIndicator />
        </main>
      </ReactLenis>

      <footer
        className={cn(
          'pt-4 px-4 pb-16  bg-white/80 backdrop-blur-3xl bottom-0 fixed w-full ',
          'md:rounded-b-4xl md:pb-0',
        )}
      >
        <div className='flex items-center justify-center gap-2 flex-row'>
          {/* <button
              type='button'
              className='py-3 px-4 rounded-full bg-bg-primary text-text-tertiary'
            >
              Mic
            </button> */}
          {/* text-size-adjust */}
          {/* Do not allow send until response is entered */}
          <input
            type='search'
            autoComplete='false'
            autoCorrect='false'
            autoCapitalize='false'
            placeholder='Type your message here'
            className='py-3 grow rounded-full px-5 bg-bg-primary'
          />
          <button
            type='button'
            className='py-3 px-4 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold'
          >
            Send
          </button>
        </div>
        <div className='text-text-tertiary opacity-75 text-xs py-2 text-center'>
          Responses are AI generated and may not be true.
          <br className='md:hidden' />
          Verify with Aditya Borkar directly.
        </div>
      </footer>
    </>
  )
}
