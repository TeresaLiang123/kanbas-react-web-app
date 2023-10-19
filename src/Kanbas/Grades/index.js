import db from "../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faGear, faFilter, faFileImport
 } from '@fortawesome/free-solid-svg-icons'
 import { Dropdown } from "react-bootstrap";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <td width="100%" className="px-4" valign="top">
        <div className="d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-light"><FontAwesomeIcon icon={faFileImport}></FontAwesomeIcon>import</button>
            <Dropdown className="px-3">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FontAwesomeIcon icon={faFileExport}></FontAwesomeIcon>Export
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Export</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <button type="button" className="btn btn-light">
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
            </button>
        </div>

        <div className="row py-3">
            <div className="col">
                <h3>Student Names</h3>
                <input className="form-control" type="text" placeholder="Search Students" title="Type the username of students for filter"/>
            </div>
            <div className="col">
                <h3>Assignment Names</h3>
                <input className="form-control" type="text" placeholder="Search Assignments"/>
            </div>
        </div>

        <div className="row">
            <div className="col py-2">
                <button type="button" className="btn btn-light"><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>Apply Filters</button>
            </div>
            
        <h1>Grades</h1>
        <div classNameName="table-responsive">
            <table className="table table-striped" border="2">
            <thead>
                <th>Student Name</th>
                {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
            <tbody>
                {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                    <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                        const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                        return (<td>{grade?.grade || ""}</td>);})}
                    </tr>);
                })}
                </tbody>
            </table>
        </div>
    </div>
</td>);
}
export default Grades;