import { useEffect , useState } from "react"

import Project from "./Project"
import data from '../../../db/projects.json'

import {
    AiOutlineArrowRight
} from 'react-icons/ai'


export default function Projects() {

    const [projectList , setProjectList] = useState([])
    
    useEffect(() => {
        setProjectList(data)

    } , [])
    
  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Projects</h3>
        <div className="gap-10 md:gap-5 md:grid lg:grid-cols-2">
            <Project projects={projectList} icon={<AiOutlineArrowRight/>}/>
        </div>
    </section>
  )
}
