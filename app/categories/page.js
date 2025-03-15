import Link from "next/link";
import { useState } from "react";
import { categoriesData } from "../data/categories";

const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <section className="flex flex-col flex-wrap md:flex-row justify-center md:justify-start">
      {categories.length > 0
        ? categories.map((category) => (
            <Link key={category.id} href={"/todos/" + category.id}>
              <div
                key={category.id}
                className="flex items-center ml-5 mr-5 mt-5 mb-3 border-0 rounded-xl bg-white p-5 shadow-[0_2px_10px_#18230F]"
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
            </Link>
          ))
        : null}

      <button className="fixed right-1 bottom-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </section>
  );
};

export default Categories;
