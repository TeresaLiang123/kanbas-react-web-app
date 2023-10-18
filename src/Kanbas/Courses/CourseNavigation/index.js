import { Link, useParams, useLocation } from "react-router-dom";
import '../../index.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
        <div className="list-group px-4" style={{ width: 150 }}>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`second-group-item item-text ${pathname.includes(link) && "courseNavigationActive"}`}>
                {link}
            </Link>
        ))}
        </div>
  );
}


export default CourseNavigation;