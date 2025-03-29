export function TextMessage({
	text,
	wrapperClass,
}: {
	text: React.ReactNode[];
	wrapperClass: string;
}) {
	// Use Apple Emojis (Inline Images)
	return (
		<div
			className={`text-balance rounded-2xl px-3 py-1.5 empty:hidden ${wrapperClass}`}
		>
			{text}
		</div>
	);
}

export function ImageMessage() {
	return (
		<div className="w-fit rounded-full bg-bg-primary px-3 py-1.5 text-text-primary">
			Image
		</div>
	);
	// Enlarge image son click
}

export function StickerMessage() {
	return (
		<div className="w-fit rounded-full bg-bg-primary px-3 py-1.5 text-text-primary">
			Sticker
		</div>
	);
}

export function AudioMessage() {
	return (
		<div className="w-fit rounded-full bg-bg-primary px-3 py-1.5 text-text-primary">
			Audio
		</div>
	);
}
