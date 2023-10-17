import db from "../Database";
function ModuleList() {
    const modules = db.modules;
    return (
        <div>
            <h1>Modules</h1>
            <ul className="list-group">
                {modules.map((module, index) => {
                    <li key={index} className="list-group=item"> 
                        {module.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ModuleList;