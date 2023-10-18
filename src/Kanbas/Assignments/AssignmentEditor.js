import { useParams } from "react-router";
import db from "../Database"
function AssignmentEditor() {
    const {assignmentID} = useParams();
    const assignment = db.assignments.find((a) => a._id === assignmentID)
    return (
        <div>
            <h1>Assignment Editor {assignmentID.title}</h1>
            <input className="form-control" defaultValue={assignment.title}></input>
            <button className="btn btn-success"></button>
        </div>
        
    )
}
export default AssignmentEditor;