import { useState } from 'react';
import { cn } from '@/lib/utils';
import Chat from './Chat';
import Header from './Header';
import Onboarding from './Onboarding';

export default function ChatDialog() {
	const [isOpen, setIsOpen] = useState(false);

	const [firstName, setFirstName] = useState(
		window.localStorage.getItem('chat-firstName') || '',
	);

	return (
		<dialog
			// open={isOpen}
			id="chat-dialog"
			className="fixed top-0 left-0 z-50 flex not-open:hidden h-screen w-screen flex-col items-center justify-center bg-background/70 text-text-secondary"
		>
			<div
				className={cn(
					'relative mx-auto flex flex-col border border-border/10 bg-background/80 text-sm shadow-lg backdrop-blur-3xl',
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
		</dialog>
	);
}
