import React from "react";
import {FilterValuesType, TaskType} from "src/App";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number) => void,
    changeFilter: (newFilter: FilterValuesType) => void
}

const TodoList: React.FC<TodoListPropsType> = ({title, tasks, removeTask, changeFilter}) => {

    const listItems: Array<JSX.Element> = tasks.map((t) => {
        const onClickRemoveTaskHandler = () => removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <button onClick={onClickRemoveTaskHandler}>x</button>
                <span>{t.title}</span>
            </li>
        )
    })

    const tasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span>No tasks in your tasksList!</span>


    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('active')}>Active</button>
                <button onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}
export default TodoList