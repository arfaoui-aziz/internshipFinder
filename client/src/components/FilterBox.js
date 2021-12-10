import React from "react";

export default function FilterBox() {
  return (
    <div className="relative shadow flex items-center w-11/12   md:max-w-lg mx-auto mb-8">
      <input
        className="w-full rounded p-4"
        type="text"
        placeholder="Search..."
      />
      <button
        type="reset"
        className="absolute right-1 bg-blue-500 w-auto flex justify-end items-center text-white py-1.5 px-3 hover:bg-blue-400 outline-none border-0 rounded"
      >
        Clear
      </button>
    </div>
  );
}
