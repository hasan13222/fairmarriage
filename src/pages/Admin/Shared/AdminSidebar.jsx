import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AdminSidebar = () => {
  const { handleSignOut} = useContext(AuthContext);
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={'/admin'}>Admin Dashboard</Link>
          </li>
          <li>
            <Link to={'/admin/users'}>Manage Users</Link>
          </li>
          <li>
            <Link to={'/admin/apprPrem'}>Approved Premium</Link>
          </li>
          <li>
            <Link to={'/admin/contReq'}>Approved Contact Requests</Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="btn btn-light">Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
