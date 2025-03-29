import { useRef } from 'react';

export default function Onboarding({
	setFirstName,
}: {
	setFirstName: (firstName: string) => void;
}) {
	const firstNameRef = useRef<HTMLInputElement>(null);
	//   TODO: detect ip geolocation and use it for greeting only
	return (
		<main className="grow px-10">
			<div className="flex h-full w-full items-center justify-center">
				<div className="-mt-24 max-w-96">
					<h4 className="font-semibold text-2xl text-text-primary">
						[Emoji] Hola, Good Evening!
					</h4>
					<div className="mt-4">
						This chatbot is designed and developed by Aditya Borkar as a side
						project. It is aimed to be conversational and help you with your
						queries. It has access to limited information about me. The project
						is still experimental.
					</div>
					<div className="mt-4 text-text-tertiary text-xs">
						By continuing, you agree to our
						<a
							href="/policy"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline-offset-4 hover:underline"
						>
							Terms and Privacy Policy.
						</a>
					</div>
					<div className="mt-8 flex flex-row items-center justify-center gap-2">
						<input
							ref={firstNameRef}
							className="grow rounded-full bg-bg-primary px-5 py-3"
							placeholder="Enter your First Name"
						/>
						<button
							type="button"
							className="rounded-full bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
							onClick={() => {
								const firstName = firstNameRef.current?.value;
								if (firstName) setFirstName(firstName);
							}}
						>
							Chat
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
