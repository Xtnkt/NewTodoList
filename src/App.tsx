import React from 'react';
import './App.css';
import TodoList from "src/Components/TodoList";

export type TaskType = {
    id: number,
    isDone: boolean,
    title: string
}

function App() {

    const todoListTitle_1: string = "What to buy"
    const todoListTitle_2: string = "What to learn"
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "TS"},
        {id: 3, isDone: false, title: "React"},
        {id: 4, isDone: true, title: "JS"},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 5, isDone: true, title: "Bread"},
        {id: 6, isDone: true, title: "Tea"},
        {id: 7, isDone: false, title: "Coffee"},
        {id: 8, isDone: true, title: "Milk"},
    ]
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2} />
        </div>
    );
}

export default App;

