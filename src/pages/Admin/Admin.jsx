import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import './admin.css'
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import AdminSidebar from "./Shared/AdminSidebar"

const AdminDashboard = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
        <div className="dashboard container-fluid">
            <Container>
              <h2 style={{textAlign: 'center'}}>{user?.displayName} Dashboard(Admin)</h2>
                <div className="dashboard_wrapper">
                    <AdminSidebar/>
                    <Outlet/>
                </div>
            </Container>
        </div>
    </>
  )
}

export default AdminDashboard