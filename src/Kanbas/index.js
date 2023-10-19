import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Container } from "react-bootstrap";
import Courses from "./Courses";
function Kanbas() {
   return (
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
                                <Route path="Dashboard" element={<Dashboard />} />
                                <Route path="Courses/:courseId/*" element={<Courses />} />
                            </Routes>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>
   );
 }
 export default Kanbas;