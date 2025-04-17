import { InteractiveStackComponent } from "./components/InteractiveStackConponent";
import { MyButton } from "./components/MyButton";

function App() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />

			<div className="bg-amber-100">
				<InteractiveStackComponent />
			</div>
		</div>
	);
}

export default App;
