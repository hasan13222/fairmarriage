import { Outlet } from "react-router-dom"
import NavbarComp from "../AllShared/Navbar"
import Footer from "../AllShared/Footer"

const Root = () => {
  return (
    <>
      <NavbarComp/>
      <Outlet/>   
      <Footer/>
    </>
  )
}

export default Root