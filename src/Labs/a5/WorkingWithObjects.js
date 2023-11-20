import React, { useState } from "react";
function WorkingWithObjects() {
    // const URL = "http://localhost:4000/a5/assignment"
    const API_BASE = "https://kanbas-node-server-app-kpi2.onrender.com";
    const URL =`${API_BASE}/a5/assignment`;
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
        });
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />

        {/* extra credit */}
        <a 
            href={`${URL}/score/${assignment.score}`}
            className="btn btn-primary me-2 float-end">
            Update Score
        </a>

        <input
        onChange={(e) => setAssignment({...assignment,
        score:e.target.value})}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"/>
        
        <label>
            <input
                onChange={(e) => setAssignment({...assignment, 
                completed:!assignment.completed})} // make completed the opposite whenever checkbox is checked/unchecked
                value={assignment.completed}
                type="checkbox"
            />
            completed
        </label>
        <a
            href={`${URL}/completed/${assignment.completed}`}
            className="btn btn-primary me-2 float-end"
            >
            Update Completed
        </a>

      <h4>Retrieving Objects</h4>
      <a href={`${URL}`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${URL}/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;