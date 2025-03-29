'use client';

// import Lottie from 'lottie-react'

import H2 from '../triage/H2';

export default function Benefits() {
	return (
		<section>
			<H2>My Tools & Caffeine</H2>

			<div className="mx-auto my-24 flex w-[50vw] flex-row justify-between">
				<div>Vite</div>
				<div>NextJS</div>
				<div>React</div>
				<div>Tailwind</div>
				<div>tRPC</div>
				<div>GraphQL</div>
				<div>Jest</div>
				<div>Vitest</div>
				<div>AWS</div>
				<div>Docker</div>
				<div>+ countless more</div>
			</div>

			<div className="mx-auto grid w-[900px] grid-cols-4 gap-x-8 gap-y-6 text-center text-lg">
				<div>
					{/* <Lottie
            animationData={CupAnimation}
            loop={true}
            className="mx-auto h-20 w-20"
          /> */}
					Developer Experience
				</div>
				<div>Deep Integration</div>
				<div>Interactions</div>
				<div>User Experience</div>
				<div>Hybrid Apps</div>
				<div>Performance</div>
				<div>Accessibility</div>
				<div>Authentication</div>
			</div>
		</section>
	);
}

// SO WHAT? Trick
