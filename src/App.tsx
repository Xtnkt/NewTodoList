import React from 'react';
import './App.css';
import TodoList from "src/Components/TodoList";

function App() {

    const todoListTitle1:string = "What to buy"
    const todoListTitle2:string = "What to learn"

    return (
        <div className="App">
            <TodoList title={todoListTitle1}/>
            <TodoList title={todoListTitle2}/>
        </div>
    );
}

export default App;

