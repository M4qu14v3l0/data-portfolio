import { useEffect , useState } from 'react'
import { useParams , Link } from "react-router-dom"

import data from '../../db/projects.json'

import {
    AiOutlineArrowLeft
} from 'react-icons/ai'

import {
    BsGithub,
  } from 'react-icons/bs'

  export default function Project() {
    
    const { id } = useParams()  
    const project = data.find(project => project.id === Number(id))

  return (
    <article className='flex flex-col p-5 gap-5'>
        <Link to={"/"} className="flex gap-2 items-center h-10 bg-[#f3f4f6] w-fit rounded-full p-3 text-xs">
            <AiOutlineArrowLeft /> back
        </Link>
        
        <h1 className='text-3xl font-semibold'>{project.title}</h1>
        <img
            src={project.img}    
            alt={project.title}
            className="w-full min-h-fit rounded-xl"
        />
        <div className='flex flex-col gap-3'>
            <h3 className='text-xs'>About this project</h3>
            <p>{project.description}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h3 className='text-xs'>Skills</h3>
            <div className="flex flex-wrap gap-3">
                {
                    project.technologies.map((technology) => (
                        <p className=" whitespace-nowrap flex justify-center items-center text-xs text-center text-blue-600 bg-blue-100 p-2 h-5 rounded-full" key={technology}>{technology}</p>
                    ))
                }
            </div>
        </div>
        
        <div className='flex flex-col gap-3'>
            <h3 className='text-xs'>Project links</h3> 
            <div className='text-xl text-gray-700 flex gap-2 items-center'>
                <BsGithub /> <p className='text-sm'>GitHub</p>
            </div>
        </div>
    </article>
  )
}
