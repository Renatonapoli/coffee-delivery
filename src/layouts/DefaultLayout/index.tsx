import { Outlet } from "react-router-dom"

import { Navbar } from "../../components/Navbar" 
import { NavbarContainer } from "./styles";


export function DefaultLayout () {
  return (
    <NavbarContainer>
      <Navbar />
      <Outlet />
    </NavbarContainer>
  )
}