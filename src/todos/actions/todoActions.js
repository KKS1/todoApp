import {TodoApi} from '../../api/todoApi';

//Create
export const CREATE_TODO = '[Todo] CREATE_TODO' 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR' 

//Read
export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 

//Update
export const START_EDITING ='[Todo] START_EDITING'
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING'

export const UPDATE_TODO = '[Todo] UPDATE_TODO' 
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS' 
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR' 

export const COMPLETE_TODO = 'COMPLETE_TODO'

//Delete
export const DELETE_TODO = '[Todo] DELETE_TODO' 
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS' 
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR' 

// Create

export function CreateTodo(todo){
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then((resp)=>{
            dispatch(CreateTodoSuccess(resp.data.data));
        })
    }
}

export function CreateTodoSuccess(todo){
    return {
        type: CREATE_TODO_SUCCESS,
        todo
    }
}

// Read

export function GetTodos(){
    return (dispatch, getState) => {
        return TodoApi.getTodo().then((resp) => {
            return dispatch(GetTodosSuccess(resp));
        })
    }
}

export function GetTodosSuccess(todos){
    return {
        type: GET_TODOS_SUCCESS,
        todos
    }
}

//Update

export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function UpdateTodo(todo){
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_TODO,
            todo
        })
        TodoApi.updateTodo(todo).then(resp => {
            return dispatch(UpdateTodoSuccess(resp.data.data));
        })
    }
}

export function UpdateTodoSuccess(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}

//Delete
export function DeleteTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TODO,
            todo
        })
        TodoApi.removeTodo(todo).then(res => {
            if (res.status === 204) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}
export function DeleteTodoSuccess(todo) {
    return {
        type: DELETE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}