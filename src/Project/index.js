import Signin from "../Kanbas/users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "../Kanbas/users/account";
import Nav from "../Nav";
import ProjNav from "../ProjNav";
import UserTable from "../Kanbas/users/table";
import Signup from "../Kanbas/users/signup";
function Project() {
  return (
    <>
        <Nav />
        <div className="row">
        <div className="col-1">
            <ProjNav/>
        </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/Project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />
                </Routes>
            </div>
        </div>    
    </>
  );
}
export default Project;