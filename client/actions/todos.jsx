
import { createAction } from 'redux-actions'

export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo')
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')

export const fetchTodos = {
    type: 'TODO_FETCH_REQUESTED'
}

export const fetchTodo = {
    type: 'TODO_SINGLE_FETCH_REQUESTED'
}

export const todoFetchSucceeded = {
    type: 'TODO_FETCH_SUCCEEDED'
}

export const todoFetchFailed = {
    type: 'TODO_FETCH_FAILED'
}