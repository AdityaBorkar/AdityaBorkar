"use client";

// import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from "react";

export default function CustomScroll() {
  useEffect(() => {
    const MainElement = document.querySelector("main");
    if (!MainElement) return;
    // const scroll = new LocomotiveScroll({
    //   el: MainElement,
    //   smooth: true,
    //   lerp: 0.08,
    // })
  }, []);

  return null;
}
