import { useState } from 'react';
import XClose from '@/assets/icons/XClose.svg';
import AdityaBorkar from '@/assets/profile-bg.png';
import { cn } from '@/lib/utils';
import Chat from './Chat';
import Onboarding from './Onboarding';

export default function ChatDialog() {
	const [firstName, setFirstName] = useState(''); // Aditya

	console.log();

	return (
		<div
			// dialog
			// open
			className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/70 px-4 backdrop-blur-3xl"
		>
			<div
				id="chat-window"
				className={cn(
					'relative mx-auto flex flex-col rounded-3xl border border-border/10 bg-background/80 text-sm shadow-lg backdrop-blur-3xl',
					'h-fit max-h-2/3 w-full max-w-[48rem] md:rounded-4xl',
				)}
			>
				{/* <!-- TODO: Progressive Blur Effect --> */}
				<header
					className={cn(
						'sticky top-0 left-0 z-30 flex w-full flex-row justify-between border-bg-tertiary/50 border-b px-4 py-4 backdrop-blur-sm',
						'md:rounded-t-4xl',
					)}
				>
					<div className="ml-4 flex flex-row items-center gap-2">
						<img
							// Image of ghibli version
							src={AdityaBorkar.src}
							alt="Aditya Borkar"
							className="size-10 rounded-full border border-border/20"
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
					<button
						type="button"
						className="size-10 rounded-full bg-bg-primary text-text-secondary transition-all duration-300 hover:scale-125 active:scale-80"
					>
						S{/* <XClose  /> */}
					</button>
				</header>

				{firstName ? (
					<Chat firstName={firstName} />
				) : (
					<Onboarding setFirstName={setFirstName} />
				)}
			</div>
		</div>
	);
}
