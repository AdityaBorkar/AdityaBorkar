import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export default function LinkButton(props: {
  href: string
  children: string
}) {
  return (
    <Link
      href={props.href}
      className='border py-3 px-6 mt-16 block w-fit mx-auto border-neutral-700 hover:bg-neutral-200 hover:font-semibold hover:text-neutral-700 text-neutral-400 rounded-full group transition-all'
      style={{ transitionDuration: '400ms' }}
    >
      {props.children}
      <HiArrowRight className='ml-2 -mt-1 stroke-1 inline text-neutral-700 group-hover:w-fit w-0 transition-all' />
    </Link>
  )
}
