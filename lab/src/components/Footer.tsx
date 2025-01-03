export default 
function Footer(props: {
    rightText?: string;
    leftText?: string;
}) {
	return (
            <div className="flex flex-row gap-16 justify-center text-sm text-white fixed bottom-0 py-2 bg-neutral-800 left-0 w-full">
                <div>{props.leftText}</div>
			<div>
				{'Made with ❤️ by '}
				<a href="https://github.com/AdityaBorkar">Aditya Borkar</a>
			</div>
			<div>{props.rightText}</div>
		</div>
	);
}
