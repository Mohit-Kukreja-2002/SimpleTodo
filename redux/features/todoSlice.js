import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((_, index) => index != action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateStatusOfTodo: (state, action) => {
            const index = action.payload
            state.todos = state.todos.map((todo, i) => {
                if(i!=index) return todo
                return { ...todo, completed: !todo.completed };
            })
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

export const { addTodo, removeTodo, updateStatusOfTodo} = todoSlice.actions

export default todoSlice.reducer