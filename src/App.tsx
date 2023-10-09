import React, {useState} from 'react';
import './App.css';
import TodoList from "src/Components/TodoList";

export type TaskType = {
    id: number,
    isDone: boolean,
    title: string
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const todoListTitle: string = "What to buy"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "TS"},
        {id: 3, isDone: false, title: "React"},
        {id: 4, isDone: true, title: "JS"},
    ])
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const tasksForTodolist: TaskType[] = getFilteredTasks(tasks, filter)

    function getFilteredTasks(tasks: TaskType[], filter: FilterValuesType) {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const removeTask = (taskId: number) => {
        let filteredTasks = tasks.filter(t => t.id !== taskId)
        setTasks(filteredTasks)
    }
    const changeFilter = (newFilter:FilterValuesType ) => {
        setFilter(newFilter)
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;

