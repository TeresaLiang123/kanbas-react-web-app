import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css'
function Dashboard() {
  const courses = db.courses;
  const source = "../../images/react.png"
  return (
    <tr>
      <td width="100%" height="100%">
        <h1 className="px-3">Dashboard</h1>
        <hr width="100%"/>
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
                  </Link>
                </div>

              ))}
        </div>
      </td>
    </tr>
  );
}
export default Dashboard;