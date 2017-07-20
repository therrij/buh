import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as TodoActions from './todos'
import Api from '../api'

// worker Saga: will be fired on TODO_FETCH_REQUESTED actions
function* fetchTodos(action) {
   try {
      const todos = yield call(Api.fetchTodos);
      yield put({...TodoActions.todoFetchSucceeded, todos});
   } catch (e) {
      yield put({...TodoActions.todoFetchFailed, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `TODO_FETCH_REQUESTED` action.
  Allows concurrent fetches.
*/
// function* mySaga() {
//   yield takeEvery("TODO_FETCH_REQUESTED", fetchTodos);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches. If "TODO_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(TodoActions.fetchTodos.type, fetchTodos);
}

export default mySaga;