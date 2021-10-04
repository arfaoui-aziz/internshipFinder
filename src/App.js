import JobBoard from "./components/JobBoard";
import data from "./db/data";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [internships, setInternships] = useState([]);

  useEffect(() => setInternships(data), []);

  return (
    <>
      <Header />
      <div className="py-20 bg-blue-100 ">
        {internships.length ? (
          internships.map((internship) => (
            <JobBoard internship={internship} key={internship.id} />
          ))
        ) : (
          <h2>No Internships Found</h2>
        )}
      </div>
    </>
  );
}

export default App;
