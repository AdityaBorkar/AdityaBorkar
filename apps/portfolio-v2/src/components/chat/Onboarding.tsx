import { Image } from 'astro:assets';
import { useRef } from 'react';

export default function Onboarding({
	setFirstName,
}: {
	setFirstName: (firstName: string) => void;
}) {
	const firstNameRef = useRef<HTMLInputElement>(null);

	const time = new Date().getHours();
	const greeting =
		time < 12 ? 'Good Morning' : time < 18 ? 'Good Afternoon' : 'Good Evening';

	return (
		<main className="h-fit grow px-10">
			<div className="mx-auto mt-16 mb-24 max-w-96">
				<h4 className="font-semibold text-2xl text-text-primary">
					{/* <Image src={Greeting.src} alt="Good Evening" width={24} height={24} /> */}
					{greeting},
				</h4>
				<p className="mt-4 text-text-tertiary">
					This chatbot is designed and developed by Aditya Borkar to provide
					conversational assistance and address your queries. It has limited
					access to Aditya's personal and work information.
				</p>
				<p className="mt-4 text-text-tertiary text-xs">
					By continuing, you agree to our
					<a
						href="/policy"
						target="_blank"
						rel="noreferrer"
						className="ml-1 font-medium underline underline-offset-4 hover:text-text-secondary"
					>
						Terms and Privacy Policy.
					</a>
				</p>
				<div className="mt-8 flex flex-row items-center justify-center gap-2">
					<input
						ref={firstNameRef}
						className="grow rounded-full bg-bg-primary px-5 py-3"
						placeholder="Enter your First Name"
					/>
					<button
						type="button"
						className="rounded-full bg-emerald-700 px-4 py-3 font-semibold text-white hover:bg-green-800"
						onClick={() => {
							const firstName = firstNameRef.current?.value;
							if (firstName) setFirstName(firstName);
						}}
					>
						Chat
					</button>
				</div>
			</div>
		</main>
	);
}
