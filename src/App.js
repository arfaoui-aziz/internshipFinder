import JobBoard from "./components/JobBoard";
import data from "./db/data";
import React, { useState, useEffect } from "react";

function App() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    setInternships(data);
  }, []);

  return (
    <div className="App">
      {internships.length ? (
        internships.map((internship) => (
          <JobBoard internship={internship} key={internship.id} />
        ))
      ) : (
        <h2>No Internships Found</h2>
      )}
      <JobBoard />
    </div>
  );
}

export default App;
