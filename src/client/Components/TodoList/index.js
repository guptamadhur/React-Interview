import React, { useState } from 'react';
import './styles.css';

const TodoList = () => {
    const [value, setValue] = React.useState("");
    const [lastAction, setAction] = useState([]);
    const [todos, setTodos] = useState([{ text: "This is a sampe todo", status: false }]);

    const addAction = (actionName, data, funCallback) => {
        setAction([...lastAction, { "action": actionName, "state": data }]);
        console.log(actionName, "to Save state: ", data);
        funCallback && funCallback();
    }

    const addTodo = (text) => {
        let newTodo = [...todos, { text, "status": false }];
        setTodos(newTodo);
    }

    const markTodo = (index) => {
        addAction("markTodo", [...todos], () => {
            let newTodo = [...todos];
            newTodo[index].status = !newTodo[index].status;
            console.log("New markTodo", index, todos, newTodo);
            setTodos(newTodo);
        });
    }

    const removeTodo = (index) => {
        addAction("removeTodo", [...todos], () => {
            let newTodo = [...todos];
            newTodo.splice(index, 1);
            setTodos(newTodo);
        });
    }

    const handleSubmit = e => {
        if (!value) return;
        addAction("addTodo", [...todos], () => {
            addTodo(value);
            setValue("");
        });
    };

    const undo = (e) => {
        if (lastAction && lastAction.length) {
            let stateData = lastAction.pop();
            console.log("POP: Last Action", stateData.state);
            setTodos(stateData.state);
        }
    }


    return (
        <>
            <div className="color-container">
                <h2>Todo List</h2>
                <div className=''>
                    <h2>Add Todo</h2>
                    <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                    <span onClick={(e) => handleSubmit(e)}>Submit</span>
                    <span onClick={(e) => undo(e)}>Undo Last Action</span>
                </div>
                <div>
                    {todos.map((item, index) => (
                        <div className='flex-center' key={index}>
                            <p style={{ textDecoration: item.status ? "line-through" : "" }}>{item.text}</p>
                            <span onClick={() => markTodo(index)}>✓</span>{' '}
                            <span onClick={() => removeTodo(index)}>✕</span>
                        </div>
                    ))}
                </div>
            </div>
        </>);
}

export default TodoList;
