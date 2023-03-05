import React from 'react'
import Exp from './Exp'

const experienceList = [
    {
        startDate:"June 2021",
        endDate:"Jule 2022",
        carge:"Data Analyst",
        company:"BawabtAlsharq",
        description:"Develop reports from Google Analytics using GTM & Excel. Create Dashboards on Data Studio. Support media buyers & marketing team to evaluate marketing strategies and help avoid wasting money based on data-driven decisions. Used SQL & Python to collect & analyze data from old website versions & local databases.",
        technologies:["SQL" , "Python" , "Excel" , "Google Analytics" , "Google Studio" , "GTM"]
    },
]

export default function Experience() {
  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Experience</h3>
        <Exp experience={experienceList}/>
    </section>
  )
}
