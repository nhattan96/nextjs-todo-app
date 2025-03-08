"use client";
import React, { useEffect, useState } from "react";

const initTodoData = [
  {
    id: 1,
    title: "Buy groceries Buy groceries  ",
    description: "Milk, bread, eggs, and vegetables",
    completed: false,
    dueDate: "2025-03-10",
    isDone: true,
  },
  {
    id: 2,
    title: "Finish project",
    description: "Complete the landing page for the client",
    completed: false,
    dueDate: "2025-03-12",
    isDone: true,
  },
  {
    id: 3,
    title: "Workout",
    description: "Go for a 30-minute run in the evening",
    completed: true,
    dueDate: "2025-03-08",
    isDone: false,
  },
  {
    id: 4,
    title: "Read a book",
    description: "Read 20 pages of a self-improvement book",
    completed: false,
    dueDate: "2025-03-09",
    isDone: false,
  },
];

const initCategoriesData = [
  {
    id: 1,
    title: "Work",
    totalTasks: 10,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Personal",
    totalTasks: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Shopping",
    totalTasks: 7,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Fitness",
    totalTasks: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Learning",
    totalTasks: 8,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  const [todo, setTodo] = useState("");
  const [listTodos, setListTodos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setListTodos(initTodoData);

    setCategories(initCategoriesData);

    return () => {};
  }, []);

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
    <div>
      <div className="bg-plus"></div>
      <section className="flex justify-between  m-5">
        <div>
          <h1 className="font-bold">Hello User</h1>
          <p>
            Today you have <b>10</b> tasks
          </p>
        </div>
        <div>
          <img
            className="border-0 rounded-full"
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
          ></img>
        </div>
      </section>
      <section className="flex flex-col justify-center">
        {categories.length > 0
          ? categories.map((category) => (
              <div
                key={category.key}
                className="flex items-center ml-5 mr-5 mt-5 mb-3 border-0 rounded-xl bg-white p-5 shadow-2xl"
              >
                <div>{category.icon}</div>
                <div className="flex flex-col ml-5">
                  <h2 className="font-bold">{category.title}</h2>
                  <p>{category.totalTasks} tasks</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-auto mb-auto shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </div>
            ))
          : null}
      </section>
      {/* Add todo */}
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
            className="size-6"
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
}
