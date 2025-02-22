const CHAR_WIDTH = 8

export function divideLines({
  text,
  maxWidth,
}: {
  text: string
  maxWidth: number
}) {
  const message = []

  const maxChars = Math.floor(maxWidth / CHAR_WIDTH)
  let lineChars = maxChars
  let line = []

  for (const word of text.split(' ')) {
    if (lineChars - word.length < 0) {
      message.push(line.join(' '))
      lineChars = maxChars
      line = []
    }
    lineChars -= word.length
    line.push(word)
  }
  message.push(line.join(' '))

  return message
}
