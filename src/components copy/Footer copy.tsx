export default function Footer() {
  return (
    <footer className="py-8 border-t text-neutral-400 text-base select-none border-neutral-800 bg-neutral-900/50">
      <div className="mt-6 max-w-[64rem] mx-auto flex flex-row">
        <div className="w-fit">
          <div className="mr-[5vw] text-white">
            <div className="py-1 px-3 w-fit border-2 border-neutral-100 uppercase text-center font-medium tracking-wide">
              Aditya Borkar
            </div>
            <div className="mt-6">hi@adityab.tech</div>
            <div className="mt-2">aditya.borkar.programs@gmail.com</div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-6">
          <div>
            <div className="text-neutral-200 font-medium mb-3">Me</div>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
          <div>
            <div className="text-neutral-200 font-medium mb-3">Work</div>
            <FooterLink href="">Projects</FooterLink>
            <FooterLink href="">Blog</FooterLink>
          </div>
          <div>
            <div className="text-neutral-200 font-medium mb-3 shrink-0">
              Services
            </div>
            <FooterLink href="/services/fullstack">
              Full Stack Web Developer (Product Engineer)
            </FooterLink>
            <FooterLink href="/services/ai">AI Engineer</FooterLink>
          </div>
          <div>
            <div className="text-neutral-200 font-medium mb-3">Socials</div>
            <FooterLink href="https://x.com/adityab_tech">
              Twitter (X)
            </FooterLink>
            <FooterLink href="https://x.com/adityab_tech">LinkedIn</FooterLink>
            <FooterLink href="https://x.com/adityaborkar">GitHub</FooterLink>
            <FooterLink href="https://x.com/adityab_tech">Instagram</FooterLink>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center text-neutral-200">
        Designed with ❤️ and built with ✨ by Aditya Borkar 😉
      </div>
    </footer>
  );
}

function FooterLink(props: { href: string; children: string }) {
  return (
    <a
      href={props.href}
      target={props.href.startsWith("/") ? undefined : "_blank"}
      className="block w-fit shrink-0 mt-2 hover:text-white"
    >
      {props.children}
    </a>
  );
}
