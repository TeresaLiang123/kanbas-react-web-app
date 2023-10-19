import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import db from "../Database"
import { faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <td valign="top" width="100%" className="px-4">
        <div className="d-flex justify-content-end align-items-center">
            <div className="published mx-3">
                <FontAwesomeIcon color="green" icon={faCircleCheck} className="mx-3"></FontAwesomeIcon>
                Published
            </div>
            <button type="button" className="btn btn-light">
                <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
            </button>
        </div>
        <hr/>
        <label>{assignment.title}</label>
        <input className="form-control mb-4" defaultValue={assignment.assignments[0]} />
        <textarea className="form-control w-100 mb-4">Description of assignment</textarea>
        <div className="float-end">
            <button onClick={handleSave} className="btn btn-success">
                Save
            </button>
            <Link className="btn btn-warning" to={`/Kanbas/Courses/${courseId}/Assignments`}>
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button className="btn btn-danger">Delete</button>
            </Link>
        </div>
    </td>
  );
}

export default AssignmentEditor;