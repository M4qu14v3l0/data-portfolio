import React from 'react'

export default function EducationItem({education}) {
  return (
    <>
        {
            education.map(edu => (
                <article key={edu.title}>
                    <p className="text-xs">{edu.startDate} - {edu.endDate}</p>
                    <h2 className="text-sm font-semibold">{edu.title}</h2>
                </article>
            ))
        }
    </>
  )
}
