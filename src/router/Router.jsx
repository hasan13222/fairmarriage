import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "../pages/Root/Root"
import Home from "../pages/Home/Home"
import BioDetails from "../pages/BioDetails/BioDetails"
import Biodatas from "../pages/Biodatas/Biodatas"
import Signup from './../pages/Signup/Signup';
import Login from './../pages/Login/Login';
import Checkout from "../pages/Checkout/Checkout"
import Dashboard from './../pages/Dashboard/Dashboard';
import EditBio from "../pages/Dashboard/EditBio/EditBio"
import ViewBio from "../pages/Dashboard/ViewBio/ViewBio"
import ContReq from "../pages/Dashboard/ContReq/ContReq"
import FavBio from "../pages/Dashboard/FavBio/FavBio"
import AdminDashboard from "../pages/Admin/Admin"
import AdminHome from "../pages/Admin/Admin/AdminHome"
import Users from "../pages/Admin/Users/Users"
import PrivateRoute from "./PrivateRoute"
import PremReq from './../pages/Admin/ApprPremRq/PremReq';
import ApprContReq from './../pages/Admin/ApprContReq/ApprContReq';
import AdminRoute from "./AdminRoute"

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Root/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/biodatas" element={<Biodatas/>} />
            <Route path="/biodatas/:bioId" element={<PrivateRoute><BioDetails/></PrivateRoute>} />
            <Route path="/register" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/checkout/:biodataId" element={<Checkout/>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
              <Route path="/dashboard" element={<EditBio/>} />
              <Route path="/dashboard/view" element={<ViewBio/>} />
              <Route path="/dashboard/requests" element={<ContReq/>} />
              <Route path="/dashboard/favourites" element={<FavBio/>} />
            </Route>
            <Route path="/admin" element={<AdminRoute><AdminDashboard/></AdminRoute>}>
              <Route path="/admin" element={<AdminHome/>} />
              <Route path="/admin/users" element={<Users/>} />
              <Route path="/admin/apprPrem" element={<PremReq/>} />
              <Route path="/admin/contReq" element={<ApprContReq/>} />
            </Route>
        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router