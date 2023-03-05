import Education from "../../components/inicio/education/Education";
import Experience from "../../components/inicio/experience/Experience";
import Projects from "../../components/inicio/projects/Projects";

export default function Inicio() {
  return (
    <main className="flex flex-col gap-10 p-5">
      <Projects />
      <Experience />
      <Education />
    </main>
  )
}
