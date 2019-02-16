import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { api } from '../fakeAsyncApi';

function* loading(isLoading) {
  yield put({
    type: 'IS_AWAITING_REQUEST',
    isLoading
  });
}

function* handle(response) {
  if (!response.error && response.data) {
    yield put({
      type: 'DID_RETRIEVE_TODO_LIST_ITEMS',
      isLoading: false,
      todoListItems: response.data
    });
  }
  else {
    console.log(response.error.message);
  }
}

function* deleteTodoListItem(action) {
  yield loading(true);

  try {
    const response = yield api.delete('/todos', action.id);

    yield handle(response);
  } catch(error) {
    console.log(error.message);
  }
}

function* getTodoListItems() {
  yield loading(true);

  try {
    const response = yield api.get('/todos');

    yield handle(response);
  } catch (error) {
    console.log(error.message);
  }
}

function* putTodoListItem(action) {
  yield loading(true);

  try {
    const response = yield api.put('/todos', action.todo);

    yield handle(response);
  } catch(error) {
    console.log(error.message);
  }
}

function* watchDeleteTodoListItem() {
  yield takeEvery('REMOVE_TODO_LIST_ITEM', deleteTodoListItem);
}

function* watchGetTodoListItems() {
  yield takeEvery('RETRIEVE_TODO_LIST_ITEMS', getTodoListItems);
}

function* watchPutTodoListItem() {
  yield all([
    takeEvery('ADD_TODO_LIST_ITEM', putTodoListItem),
    takeEvery('TOGGLE_TODO_LIST_ITEM', putTodoListItem)
  ]);
}

export function* rootSaga() {
  yield all([
    watchDeleteTodoListItem(),
    watchGetTodoListItems(),
    watchPutTodoListItem()
  ]);
}
