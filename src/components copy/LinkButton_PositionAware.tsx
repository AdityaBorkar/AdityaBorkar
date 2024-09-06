"use client";

import type { ComponentProps } from "react";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function LinkButton_PositionAware({
  children,
  className,
  ...props
}) {
  const ButtonRef = useRef<HTMLAnchorElement>(null);
  const ShadowRef = useRef<HTMLDivElement>(null);
  // TODO: Link: https://codepen.io/kkick/pen/oWZMov?css-preprocessor=stylus
  return (
    <a
      {...props}
      className={twMerge(
        "-mt-2 h-fit relative text-neutral-300 border border-neutral-500 py-2 text-sm px-4 rounded-lg group font-medium hover:text-black transition-colors",
        className
      )}
      ref={ButtonRef}
      onMouseEnter={(e) => {
        // $(function() {
        //     $('.btn-6')
        //       .on('mouseenter', function(e) {
        //               var parentOffset = $(this).offset(),
        //                 relX = e.pageX - parentOffset.left,
        //                 relY = e.pageY - parentOffset.top;
        //               $(this).find('span').css({top:relY, left:relX})
        //       })
        //       .on('mouseout', function(e) {
        //               var parentOffset = $(this).offset(),
        //                 relX = e.pageX - parentOffset.left,
        //                 relY = e.pageY - parentOffset.top;
        //           $(this).find('span').css({top:relY, left:relX})
        //       });
        //   });
        if (!ShadowRef.current || !ButtonRef.current) return;
        const parentOffset = ButtonRef.current.getBoundingClientRect();
        const shadowOffset = ShadowRef.current.getBoundingClientRect();
        console.log({ e });
        const relY = e.pageY - parentOffset.y - shadowOffset.height / 2;
        const relX = e.pageX - parentOffset.x - shadowOffset.width / 2;
        ShadowRef.current.style.top = `${relY}px`;
        ShadowRef.current.style.left = `${relX}px`;
      }}
      //   onMouseLeave={e => {
      //     if (!ShadowRef.current) return
      //     const parentOffset = ShadowRef.current.getBoundingClientRect()
      //     const relX = e.pageX - parentOffset.left
      //     const relY = e.pageY - parentOffset.top
      //     ShadowRef.current.style.top = `${relY}px`
      //     ShadowRef.current.style.left = `${relX}px`
      //   }}
    >
      {children}
      <div
        ref={ShadowRef}
        className="absolute -z-10 pointer-events-none bg-neutral-200 group-hover:size-64 size-10 top-0 left-0 rounded-full duration-400"
      />
    </a>
  );
}
