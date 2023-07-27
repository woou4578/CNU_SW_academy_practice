import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App() {
  return (
		// 아래 같은 것을 JSX라고 부른다.
		// class가 이미 javascript에서 예약어기 때문에 className으로

		// div로 묶거나 fragment로 처리
		// tag가 없으면 fragment
		// React.Fragment로도 가능
		<div className="App">
			<header className="App-header">
        <Logo size={300}/>
        <Logo/>
        <Logo/>

				<Paragraph>
					Edit <code>src/App.js</code> and save to reload.
				</Paragraph>
        <Paragraph size={14} color="blue">
          I'm Blue
        </Paragraph>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
  );
}

export default App;
