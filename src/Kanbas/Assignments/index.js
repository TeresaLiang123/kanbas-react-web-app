import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment._id === courseId);
  return (
      <div>
          <div className="top-buttons" alignItems="center">
            <div className="d-flex justify-content-between align-items-center">
                <input className="form-control w-25" placeholder="Search for Assignments"/>
                <div className="float-end">
                    <button type="button" className="btn btn-light px-2">Group</button>
                    <button type="button" className="btn btn-danger px-2">Assignment</button>
                    <button type="button" className="btn btn-light px-2">
                    <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <hr/>
          </div>
          <ul className="list-group">
              {courseAssignments.map((assignment, index) => (
                <li className="margin-bottom">
                      <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" key={index}>
                          <h5>{assignment.title}</h5>
                      </li>
                      <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.assignments.map((assignmentName, index) => (
                          <li className="list-group-item list-group-item-secondary list-group-item-description d-flex justify-content-between align-items-center">{assignmentName}</li>
                        ))}
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
  );
}
export default Assignments;