import { cva } from "class-variance-authority";
import { HiArrowUpRight } from "react-icons/hi2";

import { cn } from "@/lib/utils";

const variants = cva("group mx-auto block w-fit rounded-full font-semibold", {
  variants: {
    type: {
      primary:
        "rounded-2xl border border-black bg-neutral-800 px-8 py-4 text-lg text-neutral-200 shadow-lg",
      secondary:
        "bg-bg-secondary px-3 px-6 text-text-secondary hover:text-foreground",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export default function LinkButton(props: {
  type?: "primary" | "secondary";
  href: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={props.href}
      target={props.openInNewTab ? "_blank" : "_self"}
      className={cn(variants({ type: props.type }), props.className)}
    >
      {props.children}
      <HiArrowUpRight className="-mt-1 ml-2 inline w-0 stroke-1 text-neutral-700 group-hover:w-fit" />
    </a>
  );
}
