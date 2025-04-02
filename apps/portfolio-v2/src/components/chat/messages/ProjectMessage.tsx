export function ProjectMessage({
	name,
	preview_img,
}: {
	name: string;
	preview_img: string;
}) {
	return (
		<div className="mr-auto w-fit text-balance rounded-2xl bg-bg-secondary/80 px-3 py-1.5 text-text-secondary">
			<div>{name}</div>
			<div>{preview_img}</div>
			<div>impact list</div>
		</div>
	);
}
