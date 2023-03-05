import EducationItem from "./EducationItem"

const educationList = [
    {startDate: "2015", endDate:"2019" , title: "Computer Sciece. Bachelor --HTI"},
]


export default function Education() {

  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Education</h3>
        <EducationItem education = {educationList}/>
    </section>
  )
}
