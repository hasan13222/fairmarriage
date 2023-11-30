import { Container } from "react-bootstrap"
import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "./Shared/Sidebar"
import './dashboard.css'
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"

const Dashboard = () => {
  const {user, userRole} = useContext(AuthContext);

  if(userRole === 'admin'){
    return <Navigate to={"/admin"}></Navigate>;
  }
  return (
    <>
        <div className="dashboard container-fluid">
            <Container>
              <h2 style={{textAlign: 'center'}}>{user?.displayName}&nbsp;Dashboard</h2>
                <div className="dashboard_wrapper">
                    <Sidebar/>
                    <Outlet/>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Dashboard