
const skillsList = [
  {name:'Python'},
  {name:'SQL'},
  {name:'Machine Learning'},
  {name:'Deep Learning'},
]


export default function Skills() {
  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Skills</h3>
        <div className="flex flex-wrap gap-3">
          {
            skillsList.map(skill => (
              <p key={skill.name} className="flex justify-center items-center text-xs text-center text-blue-600 bg-blue-100 p-2 h-5 rounded-full">{skill.name}</p>
            ))
          }
        </div>
    </section>
  )
}
