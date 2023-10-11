import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css'

function Dashboard() {
  const courses = db.courses;
  const source = "../../images/react.png"
  return (
    <>
      <h1 className="px-3">Dashboard</h1>
      <hr/>
        <div className="col- d-flex flex-wrap flex-row">
            {courses.map((course) => (
              <div className="px-3 py-3">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                  <div class="card card-size">
                      <img class="card-img-top" src={source}></img>
                      <div class='card-body'>
                        <h6 class="card-title">{course.number} {course.name} {course.startDate} {course.endDate}</h6>
                        <p class="card-text">Fall 2023 Semester Fall Term</p>
                      </div>
                  </div>
                </Link>
              </div>

            ))}
      </div>
    </>
  );
}
export default Dashboard;