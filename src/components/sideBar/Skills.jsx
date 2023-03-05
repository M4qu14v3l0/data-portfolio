
const listSkills = [
  {name:'Python'},
  {name:'SQL'},
  {name:'Machine Learning'},
  {name:'Deep Learning'}
]


export default function Skills() {
  return (
    <section className="flex flex-col gap-3">
        <h3 className='text-xs'>Skills</h3>
        <div className="flex gap-3">
          {
            listSkills.map(skill => (
              <p key={skill.name} className="text-sm text-center text-blue-600 bg-blue-100 p-1 rounded-full">{skill.name}</p>
            ))
          }
        </div>
    </section>
  )
}
