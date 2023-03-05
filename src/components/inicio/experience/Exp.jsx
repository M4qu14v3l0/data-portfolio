
export default function Exp({experience}) {
  return (
    <>    
        {
            experience.map(exp => (
                <article className="flex flex-col gap-2" key={exp.carge}>
                    <p className="text-xs">{exp.startDate} - {exp.endDate}</p>
                    <h2 className="text-sm font-semibold">{exp.carge} @ {exp.company}</h2>
                    <p className="text-sm text-[#4b5563]">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                        {
                            exp.technologies.map((technology) => (
                                <p className="whitespace-nowrap text-xs text-center bg-[#f3f4f6] p-2 h-fit w-auto rounded-full" key={technology}>{technology}</p>
                            ))
                        }
                    </div>
                </article>  
            ))
        }
    </>
  )
}
