'use client';

import { motion, useDomEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { SpringTransition } from '@/lib/transitions';
import { cn } from '@/lib/utils';

interface Props {
	src: string;
	alt?: string;
	caption: string;
}

export default function BentoImageReact({ alt, src, caption }: Props) {
	const [isOpen, setOpen] = useState(false);

	const { scrollY } = useScroll();
	useDomEvent(useRef(window), 'scroll', () => {
		if (!isOpen) return;
		const change = scrollY.get() - (scrollY.getPrevious() || 0);
		if (change > 3 || change < -3) setOpen(false);
	});

	return (
		<figure
			className={cn(
				// TODO: SET H SUCH THAT IT IS EQUAL TO IMAGE
				'group relative mx-0 h-full w-full cursor-ne-resize select-none',
				isOpen ? 'cursor-default' : '',
			)}
		>
			<motion.div
				animate={{ opacity: isOpen ? 1 : 0 }}
				transition={SpringTransition}
				onClick={() => setOpen(false)}
				className={cn(
					'pointer-events-none fixed inset-0 z-40 opacity-0 backdrop-blur-2xl',
					isOpen && 'pointer-events-auto opacity-100',
				)}
			/>
			<motion.img
				layout
				draggable="false"
				transition={{
					default: SpringTransition,
					zIndex: { delay: isOpen ? 0 : 0.7 },
					// TODO: Solve the delay issue caused by opening another image instantly
				}}
				animate={{ zIndex: isOpen ? 40 : 0 }}
				// onClick={() => setOpen(!isOpen)}
				className={cn(
					'absolute inset-0 h-full w-full rounded-xl object-cover',
					isOpen && 'fixed m-auto h-auto max-h-[60vh] w-auto rounded-3xl',
				)}
				src={src}
				alt={alt}
			/>
			<motion.figcaption
				whileHover={{ opacity: 1 }}
				onClick={() => setOpen(!isOpen)}
				className="absolute top-0 left-0 flex h-full w-full items-end rounded-xl bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500"
			>
				<span className="magic-fade-up hidden text-pretty px-4 py-2 text-sm text-white duration-500 group-hover:block">
					{caption}
				</span>
			</motion.figcaption>
		</figure>
	);
}
