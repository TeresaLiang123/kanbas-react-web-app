import db from "../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    // const module = modules.filter((module) => module.course === courseId);

    return (
        <div >
            <div className="top-buttons" alignItems="center">
            <button type="button" className="btn btn-light">Collapse All</button>
            <button type="button" className="btn btn-light">View Progress</button>

            <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Publish All
            </a>
            
            <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Publish All</a></li>
                <li><a className="dropdown-item" href="#">Publish All Modules and Items</a></li>
                <li><a className="dropdown-item" href="#">Publish All Modules Only</a></li>
                <li><a className="dropdown-item" href="#">Unpublish All</a></li>
            </ul>
            <button type="button" className="btn btn-danger">Module</button>
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
        </div>
    )
}

export default ModuleList;
