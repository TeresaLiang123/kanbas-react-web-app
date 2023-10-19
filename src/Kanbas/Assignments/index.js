import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { faEllipsisV, faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  
  return (
      <td valign="top" width="100%">
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
          <ul className="list-group" >
              {courseAssignments.map((assignment, index) => (
                <li className="margin-bottom">
                      <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" key={index}>
                        <div>
                          <h2>{assignment.title}</h2>
                        </div>
                        <div>
                          <button className="btn percentage">40% of Total</button>
                          <button className="btn mx-2"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                          <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                        </div>
                      </li>
                      <Link style={{ textDecoration: 'none' }} key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} _hover={{ textDecoration: "none" }}>
                        {assignment.assignments.map((assignmentName) => (
                          <li key={assignment._id} className="list-group-item list-group-item-secondary list-group-item-description justify-content-between d-flex align-items-center with-check">
                            <div>
                              <h5>{assignmentName}</h5>
                              {assignment.dueDate}
                              {assignment.points}
                            </div>
                            <FontAwesomeIcon color="green" icon={faCircleCheck}></FontAwesomeIcon>
                          </li>
                        ))}
                      </Link>
                  </li>
              ))}
          </ul>
      </td>
  );
}
export default Assignments;