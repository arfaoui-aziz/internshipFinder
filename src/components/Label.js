import React, { useState } from "react";

export default function Label({ tag }) {
  const [filter, setFilter] = useState([]);
  return (
    <span
      className="text-sm font-medium inline-block py-1.5 px-2  rounded text-indigo-600 bg-indigo-100  last:mr-0 mr-2 cursor-pointer"
      onClick={() => {
        setFilter([...filter, tag]);
      }}
    >
      {tag}
    </span>
  );
}
