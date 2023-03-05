import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import SideBar from "../../components/sideBar/SideBar";


export default function Layout() {
  return (
    <div className="max-w-[100%] md:grid-cols-[350px_2fr] lg:max-w-[85%] xl:max-w-[75%] m-auto grid grid-cols-1">
      <SideBar />
      <Outlet />
    </div>
  )
}
