import { useState } from 'react';
import AdityaBorkar from '@/assets/profile-bg.png';
import { cn } from '@/lib/utils';
import Chat from './Chat';
import Onboarding from './Onboarding';

export default function ChatDialog() {
	const [firstName, setFirstName] = useState('Aditya');

	return (
		<dialog
			open
			className="fixed top-0 left-0 h-screen w-screen bg-black/50 backdrop-blur-3xl"
		>
			<div
				id="chat-window"
				className={cn(
					'relative mx-auto flex flex-col bg-background/80 text-sm shadow-lg backdrop-blur-3xl',
					'h-full w-full max-w-[48rem] md:h-3/4 md:translate-y-1/5 md:rounded-4xl',
				)}
			>
				{/* <!-- TODO: Progressive Blur Effect --> */}
				<header
					className={cn(
						'fixed top-0 left-0 z-30 flex w-full flex-row justify-between border-bg-tertiary/50 border-b px-4 py-4 backdrop-blur-sm',
						'md:rounded-t-4xl',
					)}
				>
					<div className="ml-4 flex flex-row items-center gap-2">
						<img
							src={AdityaBorkar.src}
							alt="Aditya Borkar"
							className="size-10 rounded-full border border-border/20"
						/>
						<div className="mt-1 flex flex-col justify-center">
							<div className="font-semibold text-base leading-tight">
								Aditya Borkar's
							</div>
							<div className="text-sm text-text-secondary leading-tight">
								AI Assistant
							</div>
						</div>
					</div>
					<button
						type="button"
						className="size-10 rounded-full bg-bg-primary text-text-secondary transition-all duration-300 hover:scale-125 active:scale-80"
					>
						Close
					</button>
				</header>

				{firstName ? (
					<Chat firstName={firstName} />
				) : (
					<Onboarding setFirstName={setFirstName} />
				)}
			</div>
		</dialog>
	);
}
