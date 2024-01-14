import { Outlet } from "react-router-dom"
import NavbarComp from "../AllShared/Navbar"
import Footer from "../AllShared/Footer"
import TopBar from "../AllShared/TopBar"

const Root = () => {
  return (
    <>
      <TopBar/>
      <NavbarComp/>
      <Outlet/>   
      <Footer/>
    </>
  )
}

export default Root