import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Container } from "react-bootstrap";
import Courses from "./Courses";
// import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import axios from "axios";
function Kanbas() {
    const [courses, setCourses] = useState([])
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15"
    })

    // const URL = "http://localhost:4000/api/courses";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL =`${API_BASE}/courses`;
    
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };

    useEffect(() => {
      findAllCourses();
    }, []);
    
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);

        setCourses([response.data,
            ...courses])
        setCourse({name:""})
        }
        // {...course,
        //     _id: new Date().getTime()}
    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
          );
      
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
        courses.map((c) => {
            if (c._id === course._id) {
            return course;
            } else {
            return c;
            }
        })
        );
    };

   return (
    <Provider store={store}>
        <div style={{ height: '100vh' }}>
            <Nav />
            <table width="100%" height="100%">
                <tbody>
                    <tr>
                        <td className="wd-side-bar d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top">
                            <Container className="kanbas-container">
                                <KanbasNavigation />
                            </Container>
                        </td>
                        <td valign="top">
                            <table width="100%">
                                <tbody>
                                    <Routes>
                                        <Route path="/" element={<Navigate to="Dashboard" />} />
                                        <Route path="Account" element={<h1>Account</h1>} />
                                        <Route path="Dashboard" 
                                        element={<Dashboard
                                            courses={courses}
                                            course={course}
                                            setCourse={setCourse}
                                            addNewCourse={addNewCourse}
                                            deleteCourse={deleteCourse}
                                            updateCourse={updateCourse}/>} 
                                        />
                                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                                    </Routes>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Provider>
   );
 }
 export default Kanbas;