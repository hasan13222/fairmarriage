import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Sidebar = () => {
  const { handleSignOut} = useContext(AuthContext);
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={'/dashboard'}>Edit Biodata</Link>
          </li>
          <li>
            <Link to={'/dashboard/view'}>View Biodata</Link>
          </li>
          <li>
            <Link to={'/dashboard/requests'}>My Contact Requests</Link>
          </li>
          <li>
            <Link to={'/dashboard/favourites'}>Favourites Biodata</Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="btn btn-light">Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
