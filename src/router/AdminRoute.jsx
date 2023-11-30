import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import {AuthContext} from '../Providers/AuthProvider'

const AdminRoute = ({ children }) => {
  const { user, userRole, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return (
      <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </>
    );
  }
  if (user && userRole === 'admin') {
    console.log("from here");
    return <>{children}</>;
  } else {
    return <Navigate state={location.pathname} to={"/"}></Navigate>;
  }
};

export default AdminRoute;
