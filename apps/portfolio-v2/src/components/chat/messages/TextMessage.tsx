import { cn } from '@/lib/utils';
import { divideLines } from '../utils';

const lineWidth =
	(window.innerWidth || 100) * (window.innerWidth > 768 ? 0.3 : 0.6);

export function TextMessage({
	text,
	role,
}: {
	text: string;
	role: 'user' | 'assistant';
}) {
	const lines = divideLines({ text, maxWidth: lineWidth });
	// TODO: Make it responsive
	return (
		<div
			className={cn(
				'w-fit text-balance rounded-2xl px-3 py-1.5 text-text-secondary empty:hidden',
				role === 'user'
					? 'ml-auto bg-blue-600/80 text-white'
					: 'mr-auto bg-bg-secondary/80 ',
			)}
		>
			{lines.map((line) => (
				<div key={line}>{line}</div>
			))}
		</div>
	);
}
