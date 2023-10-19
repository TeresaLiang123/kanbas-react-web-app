import db from "../../Kanbas/Database";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
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
import { faXmark, faGauge, faBook, faCalendarDays, faInbox, faClock, faVideo, faArrowRightFromBracket, faCircleQuestion, faAngleDown,
  faHouse, faGroupArrowsRotate, faPlug, faPenToSquare, faRocket, faBookBookmark, faUsers, faMessage, faBullhorn, faFile, faFolder, faClipboard,
  faBox, faCircle, faGear
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import Grades from "../Grades";
function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const dropDownItems = [{faGauge},{faBook},{faCalendarDays},{faInbox},{faClock},{faVideo},{faArrowRightFromBracket},{faCircleQuestion}]
  const dropDownItemNames = ["Dashboard", "Account", "Courses", "Calendar", "Inbox", "Studio", "Commons", "Help"]
  const courseDropdownIcons = [{faHouse},{faGroupArrowsRotate},{faPlug},{faPenToSquare},{faRocket},{faBookBookmark},{faUsers},{faPlug},{faMessage},{faBullhorn},{faFile},
    {faFolder},{faClipboard},{faBox},{faBox},{faCircle},{faBook},{faGear}]
  const courseDropdownNames = ["Home","Modules","Piazza","Zoom Meetings","Assignments","Quizzes","Grades","People","Panopto Video","Discussions",
  "Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Settings"]
  const courseHref = ['/Home', '/Modules', '#', '#', '/Assignments', '/Grades', '#', '#', '#', '#','#', '#','#', '#',]
  const currentPath = useLocation().pathname.toString().replace(`/Kanbas/Courses/${courseId}/`, '')
  
  return (
    <>
          <tr>
            <td className="page-title d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" colspan="3" width="100%">
              <Breadcrumb separator={<ChevronRightIcon></ChevronRightIcon>}>
                <BreadcrumbLink>
                  <FontAwesomeIcon icon={faBars} color="#ee3a3a"> </FontAwesomeIcon>
                </BreadcrumbLink>
              <BreadcrumbItem>
                <BreadcrumbLink className="breadcrumb-link" href={`/Kanbas/Courses/${courseId}/Home`}>{course.number}.{course._id}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage href="#">
                  <BreadcrumbLink href="#">{currentPath}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            <hr/>
            </td>
            <td className="md-dropdown d-md-table-cell d-xl-none d-lg-none">
                <div className="d-flex justify-content-between align-items-center">
                    <Dropdown className="mx-2" icon="none">
                      <Dropdown.Toggle className="dropdown-black-background" variant="light" id="dropdown-basic">
                        <FontAwesomeIcon icon={faBars} color="white"></FontAwesomeIcon>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          <Dropdown.Item className="text-end" href="#"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></Dropdown.Item>
                          {dropDownItems.map((item, index) => (
                            <Dropdown.Item href="#"><FontAwesomeIcon icon={item}></FontAwesomeIcon>{dropDownItemNames[index]}</Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="text-center list-group-item">
                      CS4550.12631.202410 <br/>
                      Home
                    </div>
                    <Dropdown className="mx-2">
                      <Dropdown.Toggle className="dropdown-black-background" variant="light" id="dropdown-basic">
                        <FontAwesomeIcon icon={faAngleDown} color="white"></FontAwesomeIcon>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="w-100">
                          <Dropdown.Item className="text-end" href="#"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></Dropdown.Item>
                          {courseDropdownNames.map((courseTitle, index) => (
                            <Dropdown.Item href={courseHref[{index}]}><FontAwesomeIcon icon={courseDropdownIcons[{index}]}></FontAwesomeIcon>{courseTitle}</Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>
                </div>
            </td>
          </tr>
          <tr>
            <td width="83px" className="d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top">
              <CourseNavigation />
            </td>
              <Routes>
                <Route path="Home" element={<Home/>}></Route>
                <Route path="Modules" element={<Modules/>}></Route>
                <Route path="Assignments" element={<Assignments/>}></Route>
                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}></Route>
                <Route path="Grades" element={<Grades />} />
              </Routes>
          </tr>
      
    </>
  );
}
export default Courses;