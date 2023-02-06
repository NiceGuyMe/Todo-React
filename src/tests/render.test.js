import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { TodoList } from "../component/TodoList";
import { DoneList } from "../component/DoneList";
import { TodoInput } from "../component/TodoInput";
import { render, fireEvent, screen } from "@testing-library/react";

test("Show the Done header", function () {
  render(<DoneList doneList={[]} />);
  expect(screen.getByText("DONE")).toBeInTheDocument();
});

test("Show the TODO header", () => {
  render(<TodoList todoList={[]} onCheckboxChange={() => {}} />);
  expect(screen.getByText("TODO")).toBeInTheDocument();
});

test("Show Todo lists", () => {
  const todoList = ["Item 1", "Item 2", "Item 3"];
  render(<TodoList todoList={todoList} onCheckboxChange={() => {}} />);
  todoList.forEach((todo) => {
    expect(screen.getByText(todo)).toBeInTheDocument();
  });
});

test("Show Done lists", function () {
  const todoList = ["Item 1", "Item 2", "Item 3"];
  render(<DoneList doneList={todoList} />);
  todoList.forEach((done) => {
    expect(screen.getByText(done)).toBeInTheDocument();
  });
});

test("Show input placeholder", function () {
  render(<TodoInput />);
  expect(screen.getByPlaceholderText("Enter todo")).toBeInTheDocument();
});

test("Clear input when press Enter", () => {
  const onAddTodo = jest.fn();
  render(<TodoInput onAddTodo={onAddTodo} />);
  const input = screen.getByPlaceholderText("Enter todo");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input.value).toBe("");
});

test("calls onCheckboxChange when checkbox is clicked", () => {
  const onCheckboxChange = jest.fn();
  const todoList = ["Item 1", "Item 2", "Item 3"];
  render(<TodoList todoList={todoList} onCheckboxChange={onCheckboxChange} />);
  fireEvent.click(screen.getAllByRole("checkbox")[1]);
  expect(onCheckboxChange).toHaveBeenCalledWith(1);
});

test("calls onAddTodo when the enter key is pressed", () => {
  const onAddTodo = jest.fn();
  render(<TodoInput onAddTodo={onAddTodo} />);
  const input = screen.getByPlaceholderText("Enter todo");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(onAddTodo).toHaveBeenCalledWith("Test Todo");
});
