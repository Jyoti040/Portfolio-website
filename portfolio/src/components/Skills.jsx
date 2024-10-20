import React from 'react'

const skills = [
    {
        name : 'C'
    },
    {
       name : 'C++'
    },
    {
        name : 'Python'
    },
    {
        name : 'Javascript'
    },
    {
        name : 'HTML'
    },
    {
       name : 'CSS'
    },
    {
        name : 'Tailwind'
    },
    {
        name : 'ReactJS'
    },
    {
        name : 'ExpressJS'
    },
    {
        name : 'NodeJS'
    },
    {
        name : 'MongoDb'
    },
    {
        name : 'MySQl'
    },
    {
        name : 'Git'
    },
    {
        name : 'GitHub'
    },
    {
        name : 'Postman'
    },
    {
        name : 'Boostrap'
    },
    {
        name : 'Typescript'
    },
]
const Skills = () => {
  return (
    <div className='mt-10 flex justify-center items-center' id='#skills'>
        <div>
        <h1 className='text-lightBlue text-4xl font-semibold flex justify-center'>Skills</h1>
        <br/>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 '>
            {
                skills.map((skill)=>(
                    <div className='flex border border-peacockGreen py-2 px-3 text-center'>
                       {skill.name}
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Skills