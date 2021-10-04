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
      className={`flex flex-col  md:flex-row  md:items-center w-11/12 md:max-w-screen-xl mx-auto  bg-white shadow-xl mb-14 md:mb-6 px-8 py-2 md:py-6 rounded-md 
      ${isNew && featured && "border-l-4 border-indigo-600"}  `}
    >
      <div className="-mb-8 transform -translate-y-12 md:translate-y-0 md:mr-4 md:mb-0">
        <img src={logo} alt={company} className="block " />
      </div>
      <div className="flex flex-col justify-between mr-auto gap-2 w-full md:w-max">
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
        <p className="text-gray-500 border-b-2 border-gray-400 pb-3 mb-5 md:border-0 md:p-0 md:m-0">
          {postedAt} . {contract} . {location}{" "}
        </p>
      </div>

      <div className="flex flex-wrap mb-4 gap-2 md:m-0">
        {languages.map((lang, index) => (
          <Label tag={lang} key={index} />
        ))}
        {tools.map((tool, index) => (
          <Label tag={tool} key={index} />
        ))}
      </div>
    </div>
  );
}
