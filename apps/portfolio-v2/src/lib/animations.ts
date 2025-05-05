import { animate, delay, cancelFrame, stagger } from 'motion';

// Constants:
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?';
const PRESERVE_WIDTH = true;
const ITERATIONS = 5;

// Function to get a random character from our character set
function getRandomChar(excludeChar: string) {
	let char: string;
	do {
		const index = Math.floor(Math.random() * CHARACTERS.length);
		char = CHARACTERS.charAt(index);
	} while (char === excludeChar && CHARACTERS.length > 1);
	return char;
}

export function createScrambleText(props: {
	text: string;
	element: HTMLElement;
}) {
	// Clear the element
	const originalText = props.text;
	props.element.innerHTML = '';

	// Create spans for each character
	const spans = originalText.split('').map((char, index) => {
		const span = document.createElement('span');
		span.textContent = char;
		span.style.setProperty('--index', index.toString());
		span.style.width = '0';
		span.style.opacity = '0';
		span.style.display = 'inline-block';

		if (PRESERVE_WIDTH) {
			if (char === ' ') span.style.width = '0.5em';
		}

		props.element.appendChild(span);
		return span;
	});

	return spans;
}

export function animateScramble(props: {
	text: string;
	spans: HTMLElement[];
	delay: number;
}) {
	const { text, spans, delay: _delay } = props;
	animate(
		spans,
		{
			opacity: [0, 1],
			width: 'auto',
		},
		{
			duration: 0.04,
			delay: stagger(0.01, { startDelay: _delay }),
		},
	);

	spans.forEach((span, index) => {
		// for (let i = 0; i < ITERATIONS; i++) {
		// 	delay(
		// 		() => {
		// 			const char = getRandomChar(originalChar);
		// 			span.textContent = char;
		// 		},
		// 		$delay + i * 0.02,
		// 	);
		// }
		// delay(
		// 	() => {
		// 		span.textContent = originalChar;
		// 		span.style.width = 'auto';
		// 	},
		// 	$delay + ITERATIONS * 0.02,
		// );
	});
}
