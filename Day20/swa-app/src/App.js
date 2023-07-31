// import logo from "./logo.svg";
// import "./App.css";
// import Box from "./components/Box";
// import { useState, useCallback } from "react";
// import Checkbox from "./components/Checkbox";
import Box from "./components/Box";
import Checkbox from "./components/Checkbox";
import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";
import useToggle from "./hooks/useToggle";

function App() {
	const [on, toggle] = useToggle();
	const [ref, isHover] = useHover();
	const keyPressed = useKeyPress("a");

	return (<div>
		<Checkbox checked={on} onChange={toggle} />
		{isHover ? "hover" : "mouseout"}
		<Box ref={ref} />

		{keyPressed && "Pressed"}
	</div>);

	// useCallback
	// const [foodOn, setFoodOn] = useState(false);
	// const [clothesOn, setClothesOn] = useState(false);
	// const [shelterOn, setShelterOn] = useState(false);

	// const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
	// const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
	// const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

	// return <div>
	// 	<Checkbox label="Food" on={foodOn} onChange={foodChange}/>
	// 	<Checkbox label="Clothes" on={clothesOn} onChange={clothesChange}/>
	// 	<Checkbox label="Shelter" on={shelterOn} onChange={shelterChange}/>
	// </div>;

	// React.memo
//   const [count, setCount] = useState(0);

// 	return <div>
//     {count}
//     <button onClick={() => setCount(count+1)}>+</button>
//     <Box />
//   </div>;

	// return (
	//   <div className="App">
	//     <header className="App-header">
	//       <img src={logo} className="App-logo" alt="logo" />
	//       <p>
	//         Edit <code>src/App.js</code> and save to reload.
	//       </p>
	//       <a
	//         className="App-link"
	//         href="https://reactjs.org"
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         Learn React
	//       </a>
	//     </header>
	//   </div>
	// );
}

export default App;
