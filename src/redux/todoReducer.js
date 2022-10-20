import {createSlice} from "@reduxjs/toolkit";

const todo = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const addTodoReducer = createSlice({
    name: 'todoList',
    initialState: {
        todos : todo
    },
    reducers : {
        addTodo(state, action) {
            state.todos.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title : action.payload.title
                    };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        completeTodo(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

export const reducer = addTodoReducer.reducer
export const {addTodo, removeTodo, updateTodo, completeTodo} = addTodoReducer.actions
