// import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

export function H2(props: { children: React.ReactNode }) {
  return (
    <h2 className='mb-12 pt-[15vh] text-left text-4xl font-bold'>
      {props.children}
    </h2>
  )
}

export function Accordian(props: { title: string; children: React.ReactNode }) {
  // TODO: Open Up Animation
  return (
    <details className='group cursor-default border-b-2 border-border/20 p-4 text-base'>
      <summary className='relative font-medium text-text-primary'>
        {props.title}
        <HiChevronDown className='absolute right-1 top-2 ml-2 group-open:hidden' />
        <HiChevronUp className='absolute right-1 top-2 ml-2 hidden group-open:block' />
      </summary>
      <div className='py-4 text-text-secondary'>{props.children}</div>
    </details>
  )
}
