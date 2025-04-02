import { motion } from 'motion/react';

export function TypingIndicator() {
	return (
		<div className="mt-4 mb-16 w-fit rounded-full bg-bg-primary px-3 py-1.5 text-text-primary opacity-80">
			<div className="inline-flex flex-row gap-1 py-1.5">
				<motion.div
					className="size-1.5 rounded-full bg-text-tertiary"
					animate={{ y: [-4, 2, -4], opacity: [1, 0.5, 1] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0 }}
				/>
				<motion.div
					className="size-1.5 rounded-full bg-text-tertiary"
					animate={{ y: [-4, 2, -4], opacity: [1, 0.5, 1] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0.15 }}
				/>
				<motion.div
					className="size-1.5 rounded-full bg-text-tertiary"
					animate={{ y: [-4, 2, -4], opacity: [1, 0.5, 1] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
				/>
			</div>
		</div>
	);
}
