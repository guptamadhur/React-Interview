import React, { useState } from 'react';
import './styles.css';

const TodoList = () => {
    const [value, setValue] = React.useState("");
    const [lastAction, setAction] = useState([]);
    const [todos, setTodos] = useState([{ text: "This is a sampe todo", status: false }]);

    const addAction = (actionName, data) => {
        let _list = [...lastAction, { "action": actionName, "state": data }];
        setAction(_list);
    }

    const addTodo = (text) => {
        addAction("addTodo", todos);

        const newTodo = [...todos, { text, "status": false }];
        setTodos(newTodo);
    }

    const markTodo = (index) => {
        addAction("markTodo", todos);

        const newTodo = [...todos];
        console.log("markTodo", index, newTodo);
        newTodo[index].status = !newTodo[index].status;
        setTodos(newTodo);
    }

    const removeTodo = (index) => {
        addAction("removeTodo", todos);

        const newTodo = [...todos];
        newTodo.splice(index, 1);
        setTodos(newTodo);
    }

    const handleSubmit = e => {
        if (!value) return;
        addAction("submit", todos);
        addTodo(value);
        setValue("");
    };

    const undo = (e) => {
        if (lastAction && lastAction.length) {
            const stateData = lastAction.pop();
            console.log("Last Action", stateData);
            setTodos(stateData.state);
        }
    }


    return (
        <>
            <div className="todo-container">
                <h2>Todo List</h2>
                <div className=''>
                    <h2>Add Todo</h2>
                    <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                    <span onClick={(e) => handleSubmit(e)}>Submit</span>
                    <span onClick={(e) => undo(e)}>Undo Last Action</span>
                </div>
                <div>
                    {todos.map((item, index) => (
                        <>
                            <div className='flex-center' key={index}>
                                <p style={{ textDecoration: item.status ? "line-through" : "" }}>{item.text}</p>
                                <span onClick={() => markTodo(index)}>✓</span>{' '}
                                <span onClick={() => removeTodo(index)}>✕</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>);
}

export default TodoList;
