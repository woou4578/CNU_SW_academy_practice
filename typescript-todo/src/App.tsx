import TaskProvider from './contexts/TaskProvider';
import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <TaskProvider>
      <div>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{marginTop: 16}}/>

      </div>
    </TaskProvider>
  );
}

export default App;
