import {useState} from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";


const DisplayTodos = () => {
    const [sort, setSort] = useState('active')
    const todos = useSelector(state => state.todoList.todos)

    return (
        <div className="display-todo">
            <div className="sort-btn">
                <button className="btn" onClick={() => setSort('active')}>Active</button>
                <button className="btn" onClick={() => setSort('completed')}>Completed</button>
                <button className="btn" onClick={() => setSort('all')}>All</button>
            </div>
            <ul className="todo-list">
                {todos.length > 0 && sort === 'active'
                    ? todos.map(todo =>
                        todo.completed === false &&
                        <TodoItem
                            key={todo.id}
                            todo={todo}/>
                    )
                    : null}

                {todos.length > 0 && sort === 'completed'
                    ? todos.map(todo =>
                        todo.completed === true &&
                        <TodoItem
                            key={todo.id}
                            todo={todo}/>
                    )
                    : null}

                {todos.length > 0 && sort === 'all'
                    ? todos.map(todo =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}/>
                    )
                    : null}
            </ul>
        </div>
    );
};

export default DisplayTodos;