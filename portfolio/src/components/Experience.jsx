import React from 'react'

const experiences = [
    {
        name: 'Summer Training ',
        image: '',
        date: 'August 2024',
        role: 'Frontend developer',
        place: 'New Delhi , India',
        description: 'I have contributed to development to SOCIETY MANAGEMENT PROJECT , worked in the frontend team . I have designed and implemented user friendly interfaces and gained hands on experience in various frontend technologies as well as API integration.',
    },
    {
        name: 'The nameSpace Community',
        image: '',
        date: 'August 2024 - present',
        role: 'Marketing and PR head',
        place: 'New Delhi , India',
        description: 'As the head of team , I have collaborated with various technical communitites to organise our events . I was the part of core team of  HACKHAZARDS , GGSIPUs  one of the largest offline hackathon. '
    },
   
]
const Experience = () => {
    return (
        <div className='mt-10 flex justify-center items-center ' id='experience'>
            <div className='lg:max-w-7xl'>
                <h1 className='text-lightBlue text-4xl font-semibold flex justify-center mb-6'>Experience</h1>
                {
                    experiences.map((experience, index) => (
                        <div key={index} className='border border-peacockGreen mx-4 px-3 py-5 lg:mx-3 lg:px-2 lg:py-4 lg:p-4 mb-7 border-lg rounded-md'>
                            <div className='flex justify-between '>
                                <div>
                                    <h1 className='text-lg lg:text-xl font-semibold'>{experience.name}</h1>
                                    <h2 className='text-md lg:text-lg '><i>{experience.role}</i></h2>
                                </div>
                                <div>
                                    <h1 className='text-sm lg:text-lg'>{experience.date}</h1>
                                    <h2 className='text-sm lg:text-lg mt-1'>{experience.place}</h2>
                                </div>
                            </div>
                            <p className='text-sm lg:text-lg mt-4'>{experience.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience