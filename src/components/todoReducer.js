import {createSlice} from "@reduxjs/toolkit";


const addTodoReducer = createSlice({
    name: 'todoList',
    initialState: {
        todos : []
    },
    reducers : {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)

        },
        updateTodo(state, action) {
            state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, item: action.payload
                    }
                }
                return todo
            })
        },
        completeTodo(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const reducer = addTodoReducer.reducer
export const {addTodo, removeTodo, updateTodo, completeTodo} = addTodoReducer.actions
