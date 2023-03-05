import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import SideBar from "../../components/sideBar/SideBar";


export default function Layout() {
  return (
    <div className="w-full grid grid-cols-1 ">
      <SideBar />
      <Outlet />
    </div>
  )
}
