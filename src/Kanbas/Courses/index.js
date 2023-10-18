import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Link } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td class="page-title d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" colspan="3">

              <Breadcrumb separator={<ChevronRightIcon></ChevronRightIcon>}>
                <BreadcrumbLink>
                  <FontAwesomeIcon icon={faBars} color="#ee3a3a"> </FontAwesomeIcon>
                </BreadcrumbLink>
              <BreadcrumbItem>
                <BreadcrumbLink class="breadcrumb-link" href="#">{course.number}.{course._id}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage href="#">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            <hr/>
            </td>
          </tr>
          <tr>
            <td width="83px" class="d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top">
              <CourseNavigation />
            </td>
            <td className="px-5" valign="top" width="100%">
              <Routes>
                <Route path="Home" element={<Home/>}></Route>
                <Route path="Modules" element={<Modules/>}></Route>
                <Route path="Assignments" element={<Assignments/>}></Route>
                <Route path="Assignments/assignmentID" element={<AssignmentEditor/>}></Route>
                <Route path="Grades" element={<h1>Grades</h1>}></Route>
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
export default Courses;