import { Link } from "react-router-dom"

export default function Project({projects , icon}) {
    return (
    <>
        {
            projects.map( (project) => (
                <Link to={`/project/${project.id}`} key={project.id}>
                    <article className="flex flex-col gap-2 h-fit cursor-pointer">
                        <img 
                            src={project.img}
                            alt={project.title}
                            className="w-full min-h-fit rounded-xl"
                        />
                        <h1 className="font-semibold">{project.title}</h1>
                        <div className="flex flex-wrap gap-3">
                            {
                                project.technologies.map((technology) => (
                                    <p className=" whitespace-nowrap flex justify-center items-center text-xs text-center text-blue-600 bg-blue-100 p-2 h-5 rounded-full" key={technology}>{technology}</p>
                                ))
                            }
                        </div>
                        <p className="text-[#4b5563] text-sm text-justify">
                            {project.description}
                        </p>
                        <p className="flex items-center gap-2 text-blue-600">
                            Read more {icon}
                        </p>
                    </article>
                </Link>
            ))
        }
    </>
  )
}
