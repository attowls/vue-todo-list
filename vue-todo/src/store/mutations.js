const addOneItem = (state, todoItem) => {
  const newObj = {completed: false, item: todoItem}
  localStorage.setItem(todoItem, JSON.stringify(newObj));
  state.todoItems.push(newObj);
}

const toggleOneItem = (state,todoItemSet) => {
  // console.log(todoItemSet.todoItem.completed);
  state.todoItems[todoItemSet.index].completed = !state.todoItems[todoItemSet.index].completed;
  //로컬 스토리지의 데이터 갱신
  localStorage.removeItem(todoItemSet.todoItem.item);
  localStorage.setItem(todoItemSet.todoItem.item, JSON.stringify(todoItemSet.todoItem));
}

const removeOneItem = (state, todoItemSet) => {
  localStorage.removeItem(todoItemSet.todoItem.item);
  state.todoItems.splice(todoItemSet.index, 1);
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, toggleOneItem, removeOneItem, clearAllItems }