import './App.css';
// import Logo from './components/Logo';
// import Paragraph from './components/Paragraph';
import {useState} from "react";
import Board from './components/Board';

function App() {

	// 분기와 반복
	const [visible, setVisible] = useState(false);

	const articles = [
		{
			id: 1,
			title: "안녕하세요",
			author: "김짱구"
		},
		{
			id: 2,
			title: "헬로우월드",
			author: "이철수"
		}
	]
	return <div>
		<button onClick={() => setVisible(!visible)}>Toggle</button>
		{visible && <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1> }
		
		{visible ? (
			<Board articles={articles}/>
		) : ( 
			<p>게시판을 보려면 Toggle 버튼 클릭하기</p>
		)}
	</div>;

	// 컴포넌트 실습
//   return (
		// 아래 같은 것을 JSX라고 부른다.
		// class가 이미 javascript에서 예약어기 때문에 className으로

		// div로 묶거나 fragment로 처리
		// tag가 없으면 fragment
		// React.Fragment로도 가능
		// <div className="App">
		// 	<header className="App-header">
        // <Logo size={300}/>
        // <Logo/>
        // <Logo/>

		// 		<Paragraph>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</Paragraph>
        // <Paragraph size={14} color="blue">
        //   I'm Blue
        // </Paragraph>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
//   );
}

export default App;
