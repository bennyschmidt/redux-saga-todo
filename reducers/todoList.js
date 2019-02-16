import { combineReducers } from 'redux';

const initialState = {
  isLoading: true,
  todoListItems: []
};

const todoListReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DID_RETRIEVE_TODO_LIST_ITEMS':
      return {
        ...state,
        todoListItems: action.todoListItems,
        isLoading: action.isLoading
      };
    case 'IS_AWAITING_REQUEST':
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  todoList: todoListReducer
});
