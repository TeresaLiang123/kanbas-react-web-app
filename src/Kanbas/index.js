import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
   return (
      <div>
         <Nav/>
         <table width="100%" height="100%">
            <tbody>
               <tr>
                  <td valign="top" width="83px">
                     <KanbasNavigation />
                  </td>
                  <td valign="top">
                  <Routes>
                     <Route path="/" element={<Navigate to="Dashboard" />} />
                     <Route path="Account" element={<h1>Account</h1>} />
                     <Route path="Dashboard" element={<Dashboard />} />
                     <Route path="Courses/:courseId/*" element={<Courses />} />
                  </Routes>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
 }
 export default Kanbas;