"use client";

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useRef } from "react";

export default function Header() {
  const ShadowRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 mx-auto mr-[15%] w-full max-w-[70%] select-none border-b border-neutral-800 py-2 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[64rem] flex-row justify-between">
        <a href="/" className="my-2 font-bold text-neutral-100">
          <div className="inline-block border-2 border-white px-1 py-0 text-xl tracking-wider">
            AB
          </div>
          <div className="ml-3 inline-block align-bottom text-2xl tracking-tighter">
            Adi.
          </div>
        </a>

        <nav
          className="relative z-20 mt-2 flex h-fit flex-row gap-4"
          onMouseLeave={() => {
            if (!ShadowRef.current) return;
            ShadowRef.current.style.right = "-20rem";
            ShadowRef.current.style.display = "none";
          }}
        >
          <div
            ref={ShadowRef}
            className="absolute -right-20 top-0 z-10 hidden h-8 w-20 rounded-full bg-neutral-800 duration-300"
          />
          <NavCard label="Home" link="/" />
          <NavCard label="About" link="/about" />
          <NavCard label="Services" link="/services" />
          <NavCard label="Projects" link="/projects" />
          <NavCard label="Blog" link="/blog" />
          <NavCard label="Contact" link="/contact" />
        </nav>
      </div>

      {/* TODO: Use Preflight Hints */}
      {/* <div className="absolute right-12 top-7">
				<PiMoonFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200" />
				<PiSunFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-300 hover:bg-neutral-900" />
			</div> */}
    </header>
  );

  function NavCard(props: { link?: string; label: string }) {
    const path = ""; // usePathname()
    const TAG_NAME = props.link ? "a" : "div";
    return (
      <TAG_NAME
        {...(TAG_NAME !== "div" ? { href: props.link } : {})}
        className={`relative z-20 h-fit cursor-pointer rounded-full px-4 py-0.5 text-sm font-medium leading-loose ${
          path === props.link
            ? "bg-neutral-200 text-neutral-950"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
        onMouseOver={(e) => {
          if (!ShadowRef.current) return;
          ShadowRef.current.style.display = "block";
          ShadowRef.current.style.left = `${e.target.offsetLeft}px`;
          ShadowRef.current.style.width = `${e.target.offsetWidth}px`;
        }}
      >
        {props.label}
      </TAG_NAME>
    );
  }
}
