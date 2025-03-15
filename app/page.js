"use client";
import React from "react";
import Categories from "./categories/page";

export default function Home() {
  return (
    <div>
      <section className="flex justify-between  m-5">
        <div>
          <h1 className="font-bold text-4xl text-white">Hello User</h1>
          <p className="text-xl text-[#FBFFE4]">
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
      <Categories />
    </div>
  );
}
