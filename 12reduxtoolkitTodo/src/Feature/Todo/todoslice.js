import { createSlice, nanoid} from '@reduxjs/toolkit';

const initalState = {
    todos:[
        {id: 1,
        text:"Sujal Dave"
        }
    ]
}




export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{ 
        addTodo:(state, action) => {
            const todo= {
            id: nanoid(),
            text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action ) => {
            state.todos= state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

