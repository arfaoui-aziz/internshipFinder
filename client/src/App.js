import JobBoard from "./components/JobBoard";
import data from "./db/data";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FilterBox from "./components/FilterBox";

function App() {
  const [internships, setInternships] = useState([]);

  useEffect(() => setInternships(data), []);

  return (
    <>
      <Header />
      <main className="py-20">
        <FilterBox />
        {internships.length ? (
          internships.map((internship) => (
            <JobBoard internship={internship} key={internship.id} />
          ))
        ) : (
          <h2>No Internships Found</h2>
        )}
      </main>
    </>
  );
}

export default App;
