// import logo from "./logo.svg";
// import "./App.css";

import Box from "./components/Box";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

	return <div>
    {count}
    <button onClick={() => setCount(count+1)}>+</button>
    <Box />
  </div>;

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
