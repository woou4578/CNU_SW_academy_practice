// import { useEffect, useState } from "react";
// import './App.css';
// import Logo from './components/Logo';
// import Paragraph from './components/Paragraph';
// import Board from './components/Board';
// import Counter from './components/Counter';
import { useRef } from "react";
import Input from "./components/Input";
import AutoCounter from "./components/AutoCounter";

function App() {
	// useRef는
	// 1. DOM에 직접 접근할 때 사용한다.
	// 2. 지역 변수로 사용할 때 사용한다.
	// useState는 값이 변경될 때 다시 렌더링을 한다.
	// useRef는 값이 변경되더라도 다시 렌더링을 하지 않는다.
	const inputRef = useRef();

	return (
		<div>
			<Input ref={inputRef} />
			<button onClick={() => inputRef.current.focus()}>Focus</button>
			<AutoCounter />
		</div>
	);

	// useEffect는 무언가 변화가 있을 때
	// 감지하여 반응하는 Hook
	// const [count, setcount] = useState(0);

	// useEffect(() => {
	// 	console.log(`Clicked ${count} times.`);
	// }, [count]);

	// 배열에 아무것도 넣지 않으면, 컴포넌트가 처음으로 로드될 때 실행
	// useEffect(() => {
	// 	console.log("Component Loaded");
	// 	const handleScroll = () => {
	// 		console.log(window.scrollY);
	// 	};

	// 	document.addEventListener("scroll", handleScroll);
		// return으로 반환한 함수는 컴포넌트가 제거될때 실행
	// 	return () => document.removeEventListener("scroll", handleScroll);
	// }, []);

	// return (
	// 	<div>
	// 		<div>You Clicked {count} times.</div>
	// 		<button onClick={() => setcount(count + 1)}>+</button>
	// 		<div style={{height:2000}}></div>
	// 	</div>
	// );

	// 상태와 이벤트 바인딩
	// 1. 컴포넌트에서 지역 상태 관리하는 법
	// 2. 컴포넌트에 이벤트 바인딩하기
	// 3. 부모 컴포넌트에게 메시지 전달하기
	// const [totalCount, setTotalCount] = useState(0);
	// return (
	// 	<div>
	// 		TotalCount: {totalCount}
	// 		<Counter
	// 			onIncrease={() => { setTotalCount(totalCount+1)}}
	// 			onDecrease={() => { setTotalCount(totalCount-1)}}
	// 		/>
	// 		<Counter
	// 			onIncrease={() => { setTotalCount(totalCount+1)}}
	// 			onDecrease={() => { setTotalCount(totalCount-1)}}
	// 		/>
	// 		<Counter
	// 			onIncrease={() => { setTotalCount(totalCount+1)}}
	// 			onDecrease={() => { setTotalCount(totalCount-1)}}
	// 		/>
	// 	</div>
	// );

	// 분기와 반복
	// const [visible, setVisible] = useState(false);

	// const articles = [
	// 	{
	// 		id: 1,
	// 		title: "안녕하세요",
	// 		author: "김짱구"
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "헬로우월드",
	// 		author: "이철수"
	// 	}
	// ]
	// return <div>
	// 	<button onClick={() => setVisible(!visible)}>Toggle</button>
	// 	{visible && <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1> }

	// 	{visible ? (
	// 		<Board articles={articles}/>
	// 	) : (
	// 		<p>게시판을 보려면 Toggle 버튼 클릭하기</p>
	// 	)}
	// </div>;

	// 컴포넌트 실습
	// 아래 같은 것을 JSX라고 부른다.
	// class가 이미 javascript에서 예약어기 때문에 className으로

	// div로 묶거나 fragment로 처리
	// tag가 없으면 fragment
	// React.Fragment로도 가능
	//   return (
	// 		<div className="App">
	// 			<header className="App-header">
	//         <Logo size={300}/>
	//         <Logo/>
	//         <Logo/>

	// 				<Paragraph>
	// 					Edit <code>src/App.js</code> and save to reload.
	// 				</Paragraph>
	//         <Paragraph size={14} color="blue">
	//           I'm Blue
	//         </Paragraph>
	// 				<a
	// 					className="App-link"
	// 					href="https://reactjs.org"
	// 					target="_blank"
	// 					rel="noopener noreferrer"
	// 				>
	// 					Learn React
	// 				</a>
	// 			</header>
	// 		</div>
	//   );
}

export default App;
