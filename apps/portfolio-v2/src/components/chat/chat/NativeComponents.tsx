export function TextMessage({
  text,
  wrapperClass,
}: {
  text: React.ReactNode[]
  wrapperClass: string
}) {
  // Use Apple Emojis (Inline Images)
  return (
    <div
      className={`rounded-2xl empty:hidden text-balance py-1.5 px-3 ${wrapperClass}`}
    >
      {text}
    </div>
  )
}

export function ImageMessage() {
  return (
    <div className='text-text-primary rounded-full w-fit py-1.5 px-3 bg-bg-primary'>
      Image
    </div>
  )
  // Enlarge image son click
}

export function StickerMessage() {
  return (
    <div className='text-text-primary rounded-full w-fit py-1.5 px-3 bg-bg-primary'>
      Sticker
    </div>
  )
}

export function AudioMessage() {
  return (
    <div className='text-text-primary rounded-full w-fit py-1.5 px-3 bg-bg-primary'>
      Audio
    </div>
  )
}
