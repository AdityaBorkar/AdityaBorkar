import { useState } from 'react';
import { cn } from '@/lib/utils';
import Chat from './Chat';
import Header from './Header';
import Onboarding from './Onboarding';

export default function ChatDialog() {
	const [, setIsOpen] = useState(false);

	const [firstName, setFirstName] = useState(
		window.localStorage.getItem('chat-firstName') || '',
	);

	return (
		<div
			id="chat-dialog"
			className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/60 text-text-secondary"
		>
			<div
				className={cn(
					'relative mx-auto flex flex-col border border-border/20 text-sm shadow-lg backdrop-blur-md bg-background/80',
					'h-fit max-h-2/3 w-full max-w-[48rem] max-md:min-h-full md:rounded-4xl',
				)}
			>
				<Header setIsOpen={setIsOpen} />

				{firstName ? (
					<Chat firstName={firstName} />
				) : (
					<Onboarding setFirstName={setFirstName} />
				)}
			</div>
		</div>
	);
}
