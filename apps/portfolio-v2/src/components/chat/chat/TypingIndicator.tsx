import { motion } from 'motion/react'

export function TypingIndicator() {
  return (
    <div className='text-text-primary rounded-full w-fit py-1.5 px-3 mt-4 mb-8 bg-bg-primary opacity-80'>
      <div className='flex flex-row gap-1 py-1.5'>
        <motion.div
          className='size-1.5  rounded-full bg-text-tertiary'
          animate={{ y: [-3, 3, -3], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.div
          className='size-1.5 rounded-full bg-text-tertiary'
          animate={{ y: [-3, 3, -3], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0.15 }}
        />
        <motion.div
          className='size-1.5 rounded-full bg-text-tertiary'
          animate={{ y: [-3, 3, -3], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
        />
      </div>
    </div>
  )
}

// TODO: Add Thinking, Finding, Typing
