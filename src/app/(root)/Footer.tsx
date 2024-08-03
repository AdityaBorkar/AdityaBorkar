import Link from 'next/link'
import {
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuTwitter,
} from 'react-icons/lu'

export default function Footer() {
  // TODO: Privacy Policy for the analytical data that is collected
  return (
    <footer className="pb-8 pt-12 text-base">
      <div className="section mt-6 max-w-[100%] text-center">
        <div className="flex flex-row justify-center gap-12 *:hover:text-foreground">
          <Link href="mailto:hi@adityab.tech" target="_blank">
            <LuMail className="-mt-0.5 mr-2 inline-block size-5" />
            hi@adityab.tech
          </Link>
          <Link href="https://x.com/adityab_tech" target="_blank">
            <LuTwitter className="-mt-0.5 mr-2 inline-block size-5" />
            Twitter (X)
          </Link>
          <Link href="https://x.com/adityab_tech" target="_blank">
            <LuLinkedin className="-mt-0.5 mr-2 inline-block size-5" />
            LinkedIn
          </Link>
          <Link href="https://x.com/adityaborkar" target="_blank">
            <LuGithub className="-mt-0.5 mr-2 inline-block size-5" />
            GitHub
          </Link>
          <Link href="https://x.com/adityab_tech" target="_blank">
            <LuInstagram className="-mt-0.5 mr-2 inline-block size-5" />
            Instagram
          </Link>
        </div>

        <div className="mt-24">
          Designed with ❤️ and built with ✨ by Aditya Borkar 😉
        </div>
      </div>
    </footer>
  )
}
