export const addTodoListItem = (todo) => {
  return {
    type: 'ADD_TODO_LIST_ITEM',
    todo
  };
};

export const removeTodoListItem = (id) => {
  return {
    type: 'REMOVE_TODO_LIST_ITEM',
    id
  };
};

export const retrieveTodoListItems = () => {
  return {
    type: 'RETRIEVE_TODO_LIST_ITEMS'
  };
};

export const toggleTodoListItem = (todo) => {
  return {
    type: 'TOGGLE_TODO_LIST_ITEM',
    todo: {
      completed: !todo.completed,
      id: todo.id,
      text: todo.text
    }
  };
};

export const isLoading = () => {
  return {
    type: 'IS_AWAITING_REQUEST'
  };
};
