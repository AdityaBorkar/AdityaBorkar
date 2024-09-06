"use client";

// import { getCalApi } from '@calcom/embed-react'
import { useEffect } from "react";

export default function ScheduleMeetBtn(props: {
  children: React.ReactNode;
  className?: string;
}) {
  // TODO: cal.com does not support React 19
  // useEffect(() => {
  //   ;(async () => {
  //     const cal = await getCalApi()
  //     cal('ui', {
  //       styles: { branding: { brandColor: '#000000' } },
  //       hideEventTypeDetails: false,
  //       layout: 'month_view',
  //     })
  //   })()
  // }, [])
  return (
    <button
      type="submit"
      className={props.className}
      data-cal-namespace=""
      data-cal-link="aditya-borkar/tech"
      data-cal-config='{"layout":"month_view"}'
    >
      {props.children}
    </button>
  );
}
