import React, { useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';

export default function TodoList() {


    // state Array which hold all TODOs
    const [todos,setTodos] = useState([]);

    // Add todo to list
    const addTask = task =>{
        if (!task.text) {
            return
        }
        const newTodos = [task,...todos];
        setTodos(newTodos);
    }
    // Remove todo from list
const removeTask = id =>{
    let updatedTasks = [...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
}

    // Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {

            if (todo.id === id) {
                todo.iscomplete = true;
            
            }
            return todo;
        })
        setTodos(updatedTasks)
        
    }

    return <div>
    <Todoform addTask={addTask}></Todoform>
    <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} />
</div>;
}
