import ReactLenis, { type LenisRef } from 'lenis/react';
import { motion } from 'motion/react';
import { type MouseEvent, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
// import { ProjectMessage } from './messages/ProjectMessage';
// import { SkillMessage } from './messages/SkillMessage';
// import { SocialMessage } from './messages/SocialMessage';
// import { StickerMessage } from './messages/StickerMessage';
// import { TestimonialMessage } from './messages/TestimonialMessage';
import { TextMessage } from './messages/TextMessage';
import { TypingIndicator } from './messages/TypingIndicator';

type MessageType = {
	id: string;
	role: 'user' | 'assistant';
	content: ContentType[];
};

type ContentType = { text: string };
// | { type: 'project', name: string, preview_img: string }
// | { type: 'sticker', sticker: string }
// | { type: 'social', custom: string };
// | { type: 'skill', audio: string }
// | { type: 'images', images: string[] }
// | { type: 'testimonial', quote: string, name: string, designation: string }

// const components = {
// 	text: TextMessage,
// 	// skill: SkillMessage,
// 	// social: SocialMessage,
// 	// images: ImagesMessage,
// 	// sticker: StickerMessage,
// 	// project: ProjectMessage,
// 	// testimonial: TestimonialMessage,
// };

export default function Chat({ firstName }: { firstName: string }) {
	// TODO: Store chat messages in localStorage for retrieval
	// TODO: Manually collect all conversations and analyze every weekend and improve the LLM model
	// TODO: Speaking bars with live text appearing in the text screen with the caret animation

	const [messages, setMessages] = useState<MessageType[]>([
		{
			id: 'cuid2',
			role: 'assistant',
			content: [
				{ text: `Hello, Good Evening! ${firstName}` },
				{
					text: "I am Aditya Borkar's AI assistant, I will help you with your queries and try my best to help you. (Note - I have limited access to Aditya's personal and work information.)",
				},
			],
			//   Add Sticker and coldplay music
		},
		{
			id: 'cuid5',
			role: 'user',
			content: [
				{ text: 'What is your name?' },
				{
					text: 'I want to design a full stack application with lots of dynamic elements. Can you get the work done within one hour?',
				},
				{
					text: 'You are boring me now! Come up with something better. Entertain me man!',
				},
			],
		},
		{
			id: 'cui2d5',
			role: 'assistant',
			content: [
				{
					text: 'You are boring me now!  full stack application with lots of dynamic elements. Can you get the  better. Entertain me man!',
				},
				// { type: 'project', name: 'Amy', preview_img: '' },
			],
		},
	]);

	const lenisRef = useRef<LenisRef>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const sendButtonRef = useRef<HTMLButtonElement>(null);

	function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();
		const input = inputRef.current;
		const sendButton = sendButtonRef.current;
		const container = lenisRef.current?.wrapper;
		if (!input || !container || !sendButton) return;

		const text = input.value;
		if (!text) return;
		input.value = '';

		setMessages((messages) => [
			...messages,
			{ id: Math.random().toString(), role: 'user', content: [{ text }] },
		]);
		// TODO: Stream and then scrollToBottom()

		scrollToBottom();
	}

	function scrollToBottom() {
		const container = lenisRef.current?.wrapper;
		if (!container) return;
		container.scrollTo({
			top: container.scrollHeight + 500,
			behavior: 'smooth',
		});
	}

	// TODO: Adjust the gap between the messages when scrolling

	return (
		<>
			<ReactLenis
				ref={lenisRef}
				options={{ autoRaf: true }}
				className={cn(
					'h-fit grow overflow-auto rounded-b-4xl px-4 pt-32 pb-12',
					'max-md:pb-32 md:px-8',
				)}
			>
				{messages.map((message) => (
					// Existing message animation
					// New Message Animation
					<motion.div
						key={message.id}
						className="z-10 mb-4 flex flex-col gap-1"
					>
						{message.content.map((item) => {
							if ('text' in item)
								return (
									<TextMessage
										key={item.text}
										role={message.role}
										text={(item.text || '').toString()}
									/>
								);
							// if ('type' in item && item.type === 'project')
							// 	return (
							// 		<ProjectMessage
							// 			key={item.type}
							// 			name={item.name}
							// 			preview_img={item.preview_img}
							// 		/>
							// 	);
						})}
					</motion.div>
				))}
				<TypingIndicator />
			</ReactLenis>

			{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<footer
				className={cn(
					'fixed bottom-0 w-full px-4 pt-4 backdrop-blur-xs dark:bg-background/70',
					'max-md:pb-16 md:rounded-b-4xl',
				)}
				onClick={() => inputRef.current?.focus()}
			>
				<div className="flex flex-row items-center justify-center gap-2">
					{/*
					<button
						type="button"
						className="py-3 px-4 rounded-full bg-bg-primary text-text-tertiary"
					>
						Mic
					</button>
					*/}
					{/* text-size-adjust */}
					<input
						ref={inputRef}
						type="search"
						autoComplete="false"
						autoCorrect="false"
						autoCapitalize="false"
						placeholder="Type your message here"
						className="grow rounded-full bg-bg-primary/70 px-5 py-3"
						onKeyUp={(e) => {
							const input = inputRef.current;
							const sendButton = sendButtonRef.current;
							if (!sendButton || !input) return;
							if (input.value.length > 0) {
								sendButton.disabled = false;
							} else {
								sendButton.disabled = true;
							}
							if (e.key === 'Enter') {
								e.preventDefault();
								sendButton.click();
							}
						}}
					/>
					<button
						ref={sendButtonRef}
						type="button"
						className="rounded-full bg-blue-600 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-600/40"
						onClick={handleSubmit}
					>
						Send
					</button>
				</div>
				<div className="py-2 text-center text-text-tertiary text-xs opacity-75">
					{'Everyone makes mistakes, including this AI.'}
					<br className="md:hidden" />
					{' Make sure to double-check important information.'}
				</div>
			</footer>
		</>
	);
}
