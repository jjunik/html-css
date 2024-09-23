import { useState } from "react";

const initialState = {todos:[],} = useState([]);

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADDTODO' :
            return{
                ...state,
                todos : [...state.todos, {id : action.id, text : action.text}],
            };
        case 'REMOVETODO' :
            return{
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id),
        };
        default :
        return state;
    }
}
export default todoReducer