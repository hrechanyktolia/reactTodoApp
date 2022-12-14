import {addTodo} from "../redux/todoReducer";
import {useDispatch} from "react-redux";
import {useState} from "react";

const Todos = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    const add = () => {
        if (!todo) {
            alert('Input is empty!')
        } else {
            dispatch(addTodo({
                id: Math.floor(Math.random() * 1000),
                title: todo,
                completed: false
            }))
            setTodo('')
        }
    }

    const handlePress = (e) => {
        if (e.key === 'Enter') {
            add()
        }
    }
    return (
        <div className="add-todo">
            <input type="text"
                   value={todo}
                   onChange={e => setTodo(e.target.value)}
                   onKeyDown={handlePress}
                   className="add-input"/>
            <button className="add-btn" onClick={add}>Add</button>
        </div>
    );
};

export default Todos;