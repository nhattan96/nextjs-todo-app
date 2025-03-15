"use client";
import { todoData } from "@/app/data/todo";
import Link from "next/link";
import { useState } from "react";

const View = ({}) => {
  const [listTodos, setListTodos] = useState(todoData);
  const [todo, setTodo] = useState("");

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setListTodos((prev) => [
      {
        id: Math.random(10, 1000),
        title: todo,
        isDone: false,
      },
      ...prev,
    ]);
    setTodo("");
  };

  const handleCheckDoneTodo = ({ index, isDone }) => {
    setListTodos((prev) =>
      prev.map((todo, i) =>
        index === i
          ? {
              ...todo,
              isDone: !isDone,
            }
          : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    if (listTodos.length > 0) {
      setListTodos((prev) => listTodos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="bg-amber-50 m-5 p-5 rounded-2xl min-h-[90vh]">
      {/* Add todo  */}
      <Link href={"/"}>
        <button className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            P
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      </Link>
      <section className="flex justify-center m-5">
        <input
          className="p-2"
          type="text"
          placeholder="What do you do today?"
          value={todo}
          onChange={handleChangeTodo}
        />
        <button onClick={handleAddTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </section>
      {/* List todo */}
      <section className="text-center text-lg">
        <ul className="flex flex-col text-left m-5">
          {listTodos.length > 0
            ? listTodos.map((todo, index) => (
                <li
                  className={`flex ${todo.isDone ? "todo-done" : ""}`}
                  key={todo.id}
                >
                  <input
                    className="mr-5"
                    checked={todo.isDone}
                    type="checkbox"
                    onChange={() =>
                      handleCheckDoneTodo({
                        index: index,
                        isDone: todo.isDone,
                      })
                    }
                  />
                  <a>{todo.title}</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-auto shrink-0"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </li>
              ))
            : null}
        </ul>
      </section>
    </div>
  );
};

export default View;
