import { cn } from '@/lib/utils'

export function Accordion({
  heading,
  children,
  anchorName,
  className,
  ...props
}: React.ComponentProps<'details'> & {
  name: string
  heading: string
  children: React.ReactNode
  anchorName: string
  className?: string
}) {
  return (
    <details
      {...props}
      className={cn('w-full border rounded-xl', className)}
      style={{
        // @ts-expect-error - New Property
        anchorName,
      }}
    >
      <summary className='py-8'>{heading}</summary>
      {children}
    </details>
  )
}
