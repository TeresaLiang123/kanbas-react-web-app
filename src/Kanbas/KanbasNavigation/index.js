import { Link, useLocation } from "react-router-dom";
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN, faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faVideo, faArrowRightFromBracket, faCircleQuestion
 } from '@fortawesome/free-solid-svg-icons'

function KanbasNavigation() {
  const links = [" ","Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faN, faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faVideo, faArrowRightFromBracket, faCircleQuestion]
  const { pathname } = useLocation();
  return (
    <>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "isActive"}`}>
                <FontAwesomeIcon icon={icons[index]} color="#ee3a3a"/> <br/>
                {link}
            </Link>
        ))}
    </>
  );
}
export default KanbasNavigation;