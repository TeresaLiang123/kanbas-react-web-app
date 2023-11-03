import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import db from "../Database"
import { faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "../Courses/Modules/modulesReducer";
function AssignmentEditor() {
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const { assignmentId, courseId } = useParams();
    const assignment = db.assignments.find((a) => a._id === assignmentId);
    const navigate = useNavigate();
    const handleSave = () => {
        dispatch(addModule({ ...module, course: courseId }))
        dispatch(updateModule(module))
        // dispatch(setModule({ ...module, name: e.target.value }))
        // dispatch(setModule({ ...module, description: e.target.value }))
        dispatch(setModule(module))
        dispatch(deleteModule(module._id))
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

        <div class="container mb-4">
            <div class="row mb-3">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="col- px-3">
                        Points
                    </div>
                    <div class="col- w-50">
                        <input class="form-control" id="points" max="100" min="50" step="5" type="number" value="100"/>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="d-flex justify-content-center align-items-top">
                    <div class="col- ">
                        <label>Assign</label>
                    </div>
                    <div class="col- w-25 px-3">
                        <div class="form-control">
                            <div class="py-3">
                                <h6>Assign to</h6>
                            </div>
                            <input class="form-control" value="Everyone"/>

                            <div class="py-3">
                                <h6>Due</h6>
                                <input type="date" value="2023-09-21" min="2023-09-07" max="2023-09-28"/>
                            </div>
                            <div class="row py-3">
                                <div class="d-flex justify-content-start">
                                    <div>
                                        <h6>Available from</h6>
                                        <input type="date" value="2023-09-21" min="2023-09-07" max="2023-09-28"/>
                                    </div>
                                    <div class="px-4">
                                        <h6>Until</h6>
                                        <input type="date" value="2023-09-21" min="2023-09-07" max="2023-09-28"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="float-end">
            <button onClick={handleSave} className="btn btn-success mx-1">
                Save
            </button>
            <Link className="btn btn-warning mx-1" to={`/Kanbas/Courses/${courseId}/Assignments`}>
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button className="btn btn-danger mx-1">Delete</button>
            </Link>
        </div>


    </td>
  );
}

export default AssignmentEditor;