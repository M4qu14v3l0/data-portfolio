import Project from "./Project"

import {
    AiOutlineArrowRight
} from 'react-icons/ai'

const projectsList = [
    {
        img:'https://www.datascienceportfol.io/static/profile_pics/pr0_D07E0FD124857414938F.png',
        title:'Automated testing for BawabtAlsharq website', 
        technologies: ['Python' , 'Selenium' , 'mysql'], 
        description: 'Define key clusters of taxi locations in Johannesburg, where we can build service stations for all taxis operating in that region.'
    },
    {
        img:'https://www.datascienceportfol.io/static/profile_pics/pr5_1DD48B972CB68427FC82.png',
        title:'Netflix Dashboard using Tableau', 
        technologies: ['Python' , 'Selenium' , 'mysql'], 
        description: 'Define key clusters of taxi locations in Johannesburg, where we can build service stations for all taxis operating in that region.'
    },
]


export default function Projects() {
  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Projects</h3>
        <div className="flex flex-col gap-10">
            <Project projects={projectsList} icon={<AiOutlineArrowRight/>}/>
        </div>
    </section>
  )
}
