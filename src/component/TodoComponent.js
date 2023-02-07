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
    } else {
      throw new Error("todo is empty");
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
      <div className="todoinput">
        <TodoInput onAddTodo={addToTodoList} />
      </div>
      <div className="todoContainer">
        <div className="TodoList">
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
