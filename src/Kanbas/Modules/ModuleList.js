import db from "../Database";
import { useParams } from "react-router";
import { Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "../Courses/Modules/modulesReducer";
import { fetchCourseById, createModule } from "../service";
import * as client from "./client";
function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const fetchModulesForCourse = async (courseId) => {
        const modules = await client.findModulesForCourse(courseId);
        dispatch(setModules(modules));
    }

    useEffect(() => {
        fetchModulesForCourse(courseId);
      }, [courseId]);

    const handleAddModule = async (module) => {
        try {
            const newModule = await client.createModule(courseId, module);
            dispatch(addModule(newModule))
            dispatch(setModule({name: "New Module", description: ""}))
        } catch(error) {
            console.log(error)
        }
    }

    // const handleAddModule = () => {
    //     createModule(courseId, module).then((module) => {
    //         dispatch(addModule(module));
    //     });
    // };

    const handleDeleteModule = async (moduleId) => {
        // client.deleteModule(moduleId).then((status) => {
        //   dispatch(deleteModule(moduleId));
        // });
        try {
            await client.deleteModule(moduleId);
            dispatch(deleteModule(moduleId));
        } catch(error) {
            console.log(error)
        }
    };
    
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    

    return (
        <td width="100%" valign="top" className="px-4">
            <div className="top-buttons d-flex justify-content-end align-items-center" valign="top" alignItems="center">
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
                    <li className="list-group-item align-items-center create-module">
                        <input className="module-name add-button" value={module.name}
                        onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}
                        />
                        <button type="button" className="btn btn-success add-button" 
                        onClick={() => {handleAddModule(module)}}>Add</button>
                        <button type="button" className="btn btn-primary" onClick={handleUpdateModule}>
                            Update
                        </button>
                        <br/>
                        <textarea className="module-text-area" value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </li>

                    {modules.filter((module) => module.course === courseId).map((module, index) => (
                        <li className="margin-bottom">
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" key={index}>
                                <h2>{module.name}</h2>
                            </li>
                            <li className="list-group-item list-group-item-secondary list-group-item-description d-flex justify-content-between align-items-center">
                                {module.description}
                                <div>
                                    <button type="button" className="btn btn-warning add-button"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button type="button" className="btn btn-danger"
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>

                        </li>
                    ))}
                </ul>
            </div>
        </td>
    )
}

export default ModuleList;
