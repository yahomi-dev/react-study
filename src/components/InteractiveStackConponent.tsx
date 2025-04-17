// ref: https://zenn.dev/gemcook/articles/006fc89ebf0873

const InteractiveStackComponent = () => {
	return (
		<div className="w-[200px] grid gap-[10px] bg-blue-200">
			{/* 背景 */}
			<button
				type="button"
				className="grid row-start-1 col-start-1 border border-black"
				onClick={() => {
					console.log("clicked 背景");
				}}
			/>

			<div className="border border-black grid row-start-1 col-start-1 gap-[30px] p-[10px] pointer-events-none">
				{/* Green */}
				<button
					type="button"
					className="pointer-events-auto w-full h-[100px] border border-black bg-[rgba(0,255,64,0.495)]"
					onClick={() => {
						console.log("green clicked");
					}}
				>
					green
				</button>

				{/* Blue */}
				<a
					className="pointer-events-auto w-full h-[30px] border border-black bg-[rgba(0,106,255,0.495)]"
					onClick={() => {
						console.log("blue clicked");
					}}
				>
					blue
				</a>
			</div>
		</div>
	);
};

export { InteractiveStackComponent };
