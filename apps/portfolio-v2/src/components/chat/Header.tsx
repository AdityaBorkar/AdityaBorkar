import XClose from '@/assets/icons/XClose';
import AdityaBorkar from '@/assets/profile-ghibli.jpg';
import { cn } from '@/lib/utils';

export default function Header({
	setIsOpen,
}: {
	setIsOpen: (isOpen: boolean) => void;
}) {
	return (
		<header
			className={cn(
				'fixed top-0 left-0 z-30 flex w-full flex-row justify-between border-bg-tertiary/50 border-b bg-background/70 px-4 py-4 backdrop-blur-md',
				'md:rounded-t-4xl',
			)}
		>
			<div className="ml-4 flex flex-row items-center gap-2">
				<img
					src={AdityaBorkar.src}
					alt="Aditya Borkar"
					className="-scale-x-100 size-10 rounded-full border border-border/20"
				/>
				<div className="mt-1 flex flex-col justify-center">
					<div className="font-semibold text-sm leading-tight md:text-base">
						Aditya Borkar's
					</div>
					<div className="text-text-secondary text-xs leading-tight md:text-sm">
						AI Assistant
					</div>
				</div>
			</div>
			<div className="flex flex-row items-center gap-2 text-text-tertiary">
				{/* Reset Chat */}
				{/* Edit Name */}
				<button
					type="button"
					className="size-10 rounded-full bg-bg-secondary/60 transition-all duration-300 hover:scale-125 active:scale-80"
				>
					{/* Vibrate */}
					<XClose className="mx-auto size-6" />
				</button>
				<button
					type="button"
					className="size-10 rounded-full bg-bg-secondary/60 transition-all duration-300 hover:scale-125 active:scale-80"
					onClick={() => {
						setIsOpen(false);
						// @ts-expect-error
						document.getElementById('chat-dialog')?.close();
					}}
				>
					<XClose className="mx-auto size-6" />
				</button>
			</div>
		</header>
	);
}
