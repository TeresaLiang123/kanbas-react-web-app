import db from "../Database";
import { useParams } from "react-router";
import { Dropdown } from "react-bootstrap";

function ModuleList() {
    const { courseId } = useParams();
    const dbmodules = db.modules;
    const modules = dbmodules.filter((module) => module.course === courseId);

    return (
        <td width="100%" valign="top" className="px-4">
            <div className="top-buttons d-flex justify-content-end align-items-center" alignItems="center">
                <button type="button" className="btn btn-light mx-2">Collapse All</button>
                <button type="button" className="btn btn-light mx-2">View Progress</button>
                <Dropdown className="mx-2">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Publish All
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Publish All</Dropdown.Item>
                        <Dropdown.Item href="#">Publish All Modules and Items</Dropdown.Item>
                        <Dropdown.Item href="#">Publish All Modules Only</Dropdown.Item>
                        <Dropdown.Item href="#">Unpublish All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button type="button" className="btn btn-danger mx-2">Module</button>
                <hr/>
            </div>
            <div>
                <ul className="list-group">
                    {modules.map((module, index) => (
                        <li className="margin-bottom">
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" key={index}>
                                <h2>{module.name}</h2>
                            </li>
                            <li className="list-group-item list-group-item-secondary list-group-item-description d-flex justify-content-between align-items-center">
                                {module.description}
                            </li>
                        </li>
                    ))}
                </ul>
            </div>
        </td>
    )
}

export default ModuleList;
