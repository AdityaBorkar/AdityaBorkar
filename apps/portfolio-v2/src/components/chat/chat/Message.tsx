import type { MotionValue } from 'motion/react'
import { motion } from 'motion/react'

import { useState } from 'react'
import { divideLines } from '../utils'
import { TextMessage } from './NativeComponents'

type ContentType =
  | { text: string }
  | { media: string }
  | { music: string }
  | { audio: string }
  | { sticker: string }
  | { custom: string }

export default function Message({
  content,
  wrapperClass,
  gap,
}: {
  content: ContentType[]
  wrapperClass: string
  gap: MotionValue<string>
}) {
  const [messages, setMessages] = useState<(JSX.Element | undefined)[]>(
    content.flatMap(item => (
      <TextMessage
        key={item.text | 'unk'}
        wrapperClass={wrapperClass}
        text={(item.text || '').toString()}
      />
    )),
  )

  // const [messages, setMessages] = useState<(JSX.Element | undefined)[]>([])

  // useEffect(() => {
  //   // TODO: On change of viewport.
  //   const width = document.getElementById('chat-window')?.clientWidth
  //   const maxWidth = Math.round((width || 0) * 0.55)

  //   const messages = content
  //     .flatMap(item => {
  //       if ('text' in item) {
  //         const lines = divideLines({ text: item.text, maxWidth })
  //         return (
  //           <TextMessage
  //             key={item.text}
  //             wrapperClass={wrapperClass}
  //             text={lines.map((line, index) => {
  //               return <div key={index}>{line}</div>
  //             })}
  //           />
  //         )
  //       }
  //       return
  //       // if ("sticker" in item) return item.sticker
  //       // if ("media" in item) return item.media // IMAGE VIDEO GIF
  //       // if ("audio" in item) return item.audio
  //       // if ("music" in item) return item.music
  //       // if ("custom" in item) return item.custom
  //     })
  //     .filter(component => component !== undefined)
  //   console.log(messages)
  //   setMessages(messages)
  // }, [content, wrapperClass])

  // const { scrollY } = useScroll({ container: scrollRef })
  // const v = useMotionValueEvent(scrollY, 'change', latest => {
  //   const velocity = Math.abs(Math.round(scrollY.getVelocity()) / 100)
  //   console.log('Page scroll: ', velocity)
  //   return velocity
  // })

  // // const gap = useSpring(useTransform(scrollY, [0, 100], [24, 8]));
  // console.log('Velocity: ', gap)

  return (
    <motion.div
      className='flex flex-col z-10 mt-4'
      // style={{ gap }}
      // layout={true}
      // whileTap={{ scale: 1.2 }}
      // transition={{ delay: 0.5 }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ root: scrollRef, margin: '64px 0px 64px 0px' }}
    >
      {messages}
    </motion.div>
  )
}
