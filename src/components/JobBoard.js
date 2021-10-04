import React from "react";

export default function JobBoard({ internship }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = internship;

  return (
    <div
      className="max-w-screen-xl mx-auto flex items-center bg-white shadow-lg mb-6 p-8 rounded-md
    border-l-4 border-indigo-600"
    >
      <div className="mr-4">
        <img src={logo} alt={company} className="block" />
      </div>
      <div className="mr-auto">
        <h3 className="text-grey-50">
          {company} <span>{isNew && "new"}</span>{" "}
          <span>{featured && "featured"}</span>
        </h3>
        <h2>{position}</h2>
        <p>
          {postedAt} . {contract} . {location}{" "}
        </p>
      </div>

      <div>
        {languages.map((lang) => (
          <span>{lang + " "}</span>
        ))}
        {tools.map((tool) => (
          <span>{tool + " "}</span>
        ))}
      </div>
    </div>
  );
}
