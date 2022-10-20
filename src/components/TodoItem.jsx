import React from 'react';
import {removeTodo, updateTodo, completeTodo} from "../redux/todoReducer";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {AiFillEdit} from "react-icons/ai";
import {IoMdDoneAll} from "react-icons/io";
import {CgRemove} from "react-icons/cg";


const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    const inputRef = useRef(true)

    const changeFocus = () => {
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const update = (id, value, e) => {
        if (e.key === 'Enter') {
            dispatch(updateTodo({id, title : value }));
            inputRef.current.disabled = true;
        }
    }
    return (
        <li className="card" key={todo.id}>
                        <textarea
                            className="card-textarea"
                            ref={inputRef}
                            disabled={inputRef}
                            defaultValue={todo.title}
                            onKeyDown={e => update(todo.id, inputRef.current.value, e)}/>
            <div className="card-btn">

                <button onClick={changeFocus}><AiFillEdit/></button>

                {todo.completed === false &&
                    <button
                        style={{color: "green"}}
                        onClick={() => dispatch(completeTodo(todo.id))}>
                        <IoMdDoneAll/>
                    </button>
                }
                <button
                    style={{color: "red"}}
                    onClick={() => dispatch(removeTodo(todo.id))}>
                    <CgRemove/>
                </button>
            </div>
            {todo.completed && <span className="completed">Done</span>}
        </li>

    );
};

export default TodoItem;