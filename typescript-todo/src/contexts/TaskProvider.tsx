import { ReactChild, createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 } from "uuid";


interface Task {
    id: string;
    content: string;
    complete: boolean;
}

interface ITaskContext {
    tasks: Task[];
    addTask(content: string): void;
    updateTask(id: string, status: boolean): void;
    deleteTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);
export const useTasks = () => useContext(TaskContext);

interface Props {
    children: ReactChild;
    initialTasks?: Task[];
}

const TaskProvider = ({ children, initialTasks=[] }: Props) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', initialTasks)

    const addTask = (content: string) => {
        setTasks([...tasks, 
            {
                id: v4(),
                content,
                complete: false,
            }])
    }

    const updateTask = (id: string, status: boolean) => {
        setTasks(tasks.map((item) => item.id === id ? {...item, complete: status} : item))
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children} 
        </TaskContext.Provider>
    )
};

export default TaskProvider;