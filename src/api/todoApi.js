import {HttpClient} from './httpClient';


// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3000/api'

//Setting the todos URI

const TODO_API = `${API}/todos`

// The CRUD Operations of the Todo Resource.

// Read
const getTodo = () => {
    return HttpClient.get(TODO_API);
}

// Create
const createTodo = (todo) => {
    return HttpClient.post(TODO_API, todo);
}

// Update
const updateTodo = (todo) => {
    return HttpClient.put(TODO_API, todo);
}

// Delete
const removeTodo = (todo) => {
    return HttpClient.delete(`${TODO_API}/${todo.id}`);
}

const TodoApi = {
    getTodo,
    createTodo,
    updateTodo,
    removeTodo
}

export {TodoApi}
