import About from "./About";
import Profile from "./Profile";
import Skills from "./Skills"
export default function SideBar() {
  return (
    <nav className="flex flex-col gap-7 max-h-fit bg-gray-100 p-5">
        <Profile />
        <About />
        <Skills />
    </nav>
  )
}
