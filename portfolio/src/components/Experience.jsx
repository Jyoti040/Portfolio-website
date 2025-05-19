import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const experiences = [
    {
        name: 'Bhagwan Parshuram Insitute Of Technology',
        image: '',
        date: 'June 2024 - July 2024',
        role: 'Frontend development Intern',
        place: 'New Delhi , India',
        description: 'Engineered highly responsive, user-centric interfaces using React.js, TypeScript, and TailwindCSS, optimizing performance and enhancing the overall user experience. Integrated RESTful API using Axios, streamlining data fetching and enhancing seamless communication between the frontend and backend. ',
    },
    {
        name: 'The nameSpace Community',
        image: '',
        date: 'August 2024 - present',
        role: 'Marketing and PR head',
        place: 'New Delhi , India',
        description: 'Headed the marketing team, collaborating with multiple technical communities to enhance events visibility , fostering engagement and growth. Core team member for HACKHAZARDS , GGSIPU’s largest offline hackathons with 2500+ participants . '
    },
   
]

const Experience = () => {
    return (
        <div className='mt-10 flex justify-center items-center ' id='experience'>
            <div className='lg:max-w-7xl'>
                <motion.div
                
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false , amount:0.5}}>
                    <h1 className='text-lightBlue text-4xl font-semibold flex justify-center mb-6'>Experience</h1>
                </motion.div>

               <motion.div
               >
                
               {
                    experiences.map((experience, index) => (
                        <motion.div 
                        variants={fadeIn(`${index===0?"left":"right"}`,0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false , amount:0.7}}
                        key={index} className='border border-peacockGreen mx-4 px-3 py-5 lg:mx-3 lg:px-2 lg:py-4 lg:p-4 mb-7 border-lg rounded-md'>
                            <div className='flex justify-between '>
                                <div>
                                    <h1 className='text-lg lg:text-xl font-bold'>{experience.name}</h1>
                                    <h2 className='text-md lg:text-lg '><i>{experience.role}</i></h2>
                                </div>
                                <div>
                                    <h1 className='text-sm lg:text-lg'>{experience.date}</h1>
                                    <h2 className='text-sm lg:text-lg mt-1'>{experience.place}</h2>
                                </div>
                            </div>
                            <p className='text-sm lg:text-lg mt-4'>{experience.description}</p>
                        </motion.div>
                    ))
                }
                </motion.div> 
            </div>
        </div>
    )
}

export default Experience