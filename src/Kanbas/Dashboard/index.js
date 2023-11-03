import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css'
import { useState } from "react";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  const source = "../../images/react.png"
  return (
    <tr>
      <td width="100%" height="100%">
        <h1 className="px-3">Dashboard</h1>
          <hr width="100%"/>
          <h2 className="px-3">Published Courses ({courses.length})</h2>
          <hr width="100%"/>
          <div className="form-control d-flex px-3">
            <input value={course.name} className="form-control edit-input"
            onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <input value={course.number} className="form-control edit-input"
            onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
            <input value={course.startDate} className="form-control edit-input" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control edit-input" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
            <button type="button" className="btn btn-success add-button" onClick={addNewCourse}>Add</button>
            <button type="button" className="btn btn-primary" onClick={updateCourse} >
              Update
            </button>
          </div>
          <div className="col- d-flex flex-wrap flex-row">
              {courses.map((course) => (
                <div className="px-3 py-3">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`} className="list-group-item">
                  <div className="card card-size">
                      <img className="card-img-top" src={source}></img>
                      <div className='card-body'>
                        <h6 className="card-title">{course.number} {course.name} {course.startDate} {course.endDate}</h6>
                        <p className="card-text">Fall 2023 Semester Fall Term</p>
                      </div>
                  </div>
                  <div className="py-1">
                    <button type="button" className="btn btn-warning add-button"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger add-button"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </td>
    </tr>
  );
}
export default Dashboard;