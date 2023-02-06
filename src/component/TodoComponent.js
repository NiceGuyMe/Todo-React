import { useState } from "react";

import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { DoneList } from "./DoneList";

export function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const [doneList, setdoneList] = useState([]);

  const addToTodoList = (todo) => {
    if (todo !== "") {
      setTodoList([...todoList, todo]);
    }
  };

  const handleCheckboxChange = (index) => {
    const checkedItem = todoList[index];
    setdoneList([...doneList, checkedItem]);
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  return (
    <>
      <div className="todoContainer">
        <div className="TodoList">
          <TodoInput onAddTodo={addToTodoList} />
          <TodoList
            todoList={todoList}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>

      <div className="DoneContainer">
        <DoneList doneList={doneList} />
      </div>
    </>
  );
}
