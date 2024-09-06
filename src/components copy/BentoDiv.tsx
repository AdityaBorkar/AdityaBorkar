import { cn } from '@/lib/utils'

export default function BentoDiv(props: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'cursor-pointer rounded-3xl border border-bg-secondary bg-zinc-100 p-6 hover:shadow-xl hover:shadow-zinc-300/50 dark:bg-zinc-950',
        props.className,
      )}
    >
      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {props.label}
      </div>
      {props.children}
    </div>
  )
}
