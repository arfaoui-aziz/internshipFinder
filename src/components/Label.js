import React from "react";

export default function Label({ tag }) {
  return (
    <span class="text-sm font-medium inline-block py-1.5 px-2  rounded text-indigo-600 bg-indigo-100  last:mr-0 mr-2 cursor-pointer">
      {tag}
    </span>
  );
}
