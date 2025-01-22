import { cn } from '@/lib/utils'

import { H2 } from '../../../pages/app/(root)/services/ui'

export default function WhatIWorkSection() {
  return (
    <section>
      <H2>What do I work on?</H2>
      {/* SHOW THEM WHAT PROBLEMS CAN YOU SOLVE FOR THEM! */}
      {/* First up, let’s dive into the type of agency that offers end-to-end development at scale. */}

      <div className='flex flex-row flex-wrap gap-4'>
        {/* <Card2 label="Micro-Frontends" img="" />
      <Card2 label="Backend" img="" />
      <Card2 label="Micro Services" img="" /> */}
        {/* <Card2 label="Real-time and Collaborative UI" img="" />
      <Card2 label="Collaboration mode for your users" img="" /> */}
        <SkillCard
          label='Scalable real-time updates'
          img='https://em-content.zobj.net/source/apple/391/vibration-mode_1f4f3.png'
        />
        <SkillCard
          label='Real-time IoT data processing'
          img='https://em-content.zobj.net/source/apple/391/alarm-clock_23f0.png'
        />
        <SkillCard
          label='Infrastructure'
          img='https://em-content.zobj.net/source/apple/391/building-construction_1f3d7-fe0f.png'
        />
        <SkillCard
          label='CI/CD setup'
          img='https://em-content.zobj.net/source/apple/391/locomotive_1f682.png'
        />
        <SkillCard
          label='Auto-scaling'
          img='https://em-content.zobj.net/source/apple/391/control-knobs_1f39b-fe0f.png'
        />
        <SkillCard
          label='Observability'
          img='https://em-content.zobj.net/source/apple/391/eye-in-speech-bubble_1f441-fe0f-200d-1f5e8-fe0f.png'
        />
        <SkillCard
          label='Cloud migration'
          img='https://em-content.zobj.net/source/apple/391/sun-behind-cloud_26c5.png'
        />
        <SkillCard
          label='Cloud cost optimization'
          img='https://em-content.zobj.net/source/apple/391/money-with-wings_1f4b8.png'
        />
        <SkillCard
          label='Frontend perfomance'
          img='https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png'
        />
        <SkillCard
          label='Complex upgrades'
          img='https://em-content.zobj.net/source/apple/391/comet_2604-fe0f.png'
        />
      </div>

      {/* Technologies that I work with */}

      <div className='my-16 text-center text-2xl font-medium text-text-primary'>
        and much more to create an amazing product!
      </div>
    </section>
  )
}

function SkillCard(props: { label: string; img: string }) {
  return (
    <div
      className={cn(
        'w-fit rounded-2xl border-2 border-border/20 bg-white px-8 py-4 text-lg font-semibold text-text-primary hover:text-xl dark:bg-black',
        'hover:bg-green-300 hover:[animation-iteration-count:infinite] dark:hover:bg-emerald-800',
      )}
      style={{
        animationName: 'apple-wobble',
        transformOrigin: '50% 10%',
        animationDuration: '300ms',
      }}
    >
      {/* TODO: ON HOVER IMAGE */}
      {props.img && (
        <img
          src={props.img}
          alt={props.label}
          className='mr-2 inline-block size-6 align-top'
        />
      )}
      {props.label}
    </div>
  )
}
