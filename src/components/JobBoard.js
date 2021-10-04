import React from "react";
import Label from "./Label";

export default function JobBoard({ internship }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = internship;

  return (
    <div
      className={
        isNew && featured
          ? `sm:flex-col sm:gap-3 sm:items-start md:flex-row max-w-screen-xl mx-auto flex items-center bg-white shadow-xl mb-6 px-8 py-6 rounded-md
    border-l-4 border-indigo-600 sm:w-11/12 `
          : "sm:flex-col sm:gap-3 sm:items-start md:flex-row max-w-screen-xl mx-auto flex items-center bg-white shadow-xl mb-6 px-8 py-6 rounded-md sm:w-11/12"
      }
    >
      <div className="mr-4">
        <img src={logo} alt={company} className="block " />
      </div>
      <div className="flex flex-col justify-between mr-auto gap-2">
        <h3 className="font-bold text-indigo-600">
          {company}{" "}
          {isNew && (
            <span class="ml-2 text-xs font-semibold uppercase inline-block py-1 px-2 rounded-full text-white bg-indigo-600  last:mr-0 mr-1">
              new!
            </span>
          )}{" "}
          {featured && (
            <span class="text-xs font-semibold uppercase inline-block py-1 px-2 rounded-full text-white bg-gray-800 last:mr-0 mr-1">
              featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-500">
          {postedAt} . {contract} . {location}{" "}
        </p>
      </div>

      <div>
        {languages.map((lang) => (
          <Label tag={lang} />
        ))}
        {tools.map((tool) => (
          <Label tag={tool} />
        ))}
      </div>
    </div>
  );
}
