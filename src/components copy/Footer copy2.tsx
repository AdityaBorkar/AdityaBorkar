import { LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="dark select-none border-t border-border bg-background py-8 text-base text-foreground">
      <div className="section mt-6 flex flex-row justify-between">
        <div className="w-fit">
          <div className="mr-[5vw]">
            <div className="w-fit rounded-full border-2 border-neutral-100 px-3 py-1 text-center font-medium uppercase tracking-wide">
              Aditya / Borkar
            </div>
            <div className="mt-6 hover:text-foreground">
              <LuMail className="-mt-0.5 mr-2 inline-block size-5" />
              hi@adityab.tech
            </div>
            <div className="flex flex-row gap-4">
              <FooterLink href="https://x.com/adityab_tech">
                Twitter (X)
              </FooterLink>
              <FooterLink href="https://x.com/adityab_tech">
                LinkedIn
              </FooterLink>
              <FooterLink href="https://x.com/adityaborkar">GitHub</FooterLink>
              <FooterLink href="https://x.com/adityab_tech">
                Instagram
              </FooterLink>
            </div>
            {/* <div className="mt-2">aditya.borkar.programs@gmail.com</div> */}
          </div>
        </div>
        <div className="flex grow flex-row justify-end gap-36">
          <div>
            <div className="mb-3 font-medium text-neutral-200">Me</div>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="">Projects</FooterLink>
            <FooterLink href="">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
          <div>
            <div className="mb-3 shrink-0 font-medium text-neutral-200">
              Services
            </div>
            <FooterLink href="/services/ai">AI Engineer</FooterLink>
            <FooterLink href="/services/ai">AI Engineer</FooterLink>
            <FooterLink href="/services/ai">AI Engineer</FooterLink>
            <FooterLink href="/services/ai">AI Engineer</FooterLink>
            <FooterLink href="/services/fullstack">
              Full Stack Web Developer
              <br />
              (Product Engineer)
            </FooterLink>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center text-neutral-200">
        Designed with ❤️ and built with ✨ by Aditya Borkar 😉
      </div>
    </footer>
  );
}

function FooterLink(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={props.href}
      target={props.href.startsWith("/") ? undefined : "_blank"}
      className="mt-2 block hover:text-white"
    >
      {props.children}
    </a>
  );
}
