import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

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
        name : 'TailwindCSS'
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
    {
        name : 'Redux'
    },
    {
        name : 'Socket.IO'
    },
    {
        name : 'Data Structures'
    },
    {
        name : 'Algorithms'
    },
]

const Skills = () => {
  return (
    <div 
   
    className='mt-10 flex justify-center items-center' id='skills'>
        <div
        >
        <motion.div
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false , amount:0.2}}>
             <h1 
        className='text-lightBlue text-4xl font-semibold flex justify-center'>Skills</h1>

        </motion.div>
       
        <br/>
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.2}}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
            {
                skills.map((skill)=>(
                    <div className='flex border border-peacockGreen py-2 px-3 text-center'>
                       {skill.name}
                    </div>
                ))
            }
        </motion.div>
        </div>
    </div>
  )
}

export default Skills