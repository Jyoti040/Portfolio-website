import React from 'react'
import weatherApp from '../assets/weather-app.png'
import blogsApp from '../assets/blogs-app.png'
import societyManagement from '../assets/society-management.png'
import EcoEngage from '../assets/EcoEngage.png'
import ChatApp from '../assets/chat-app.png'
import { GithubIcon, ArrowUpRightFromSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, borderAnimation } from '../variants'

const projects = [
    {
        image: ChatApp,
        name: 'ChatApp',
        github: 'https://github.com/Jyoti040/chat-app',
        website: 'https://github.com/Jyoti040/chat-app',
        description: 'A real-time chat application with one-on-one and group messaging, state management using redux, supporting multimedia sharing. Integrated Socket.IO for real time communication and implemented infinite scrolling for optimized chat loading. Configured Nginx as a reverse proxy to enhance performance and scalability of the application. ',
        techStack: ['NodeJS', 'ExpressJS', 'MongoDb', 'ReactJs','Redux','Socket.IO']
    },
    {
        image: EcoEngage,
        name: 'EcoEngage',
        github: 'https://github.com/Jyoti040/Eco-Engage',
        website: 'https://eco-engage-front-end.vercel.app/',
        description: 'A MERN stack application that connects organisations and individuals for environmental initatives . It allows users to participate and track their activities and organisations to post eco friendly events.key features are user authentication and profile management , seperate organisation dashboard and responsive design. ',
        techStack: ['NodeJS', 'ExpressJS', 'MongoDb', 'ReactJs']
    },
    {
        image: societyManagement,
        name: 'Society Management Project',
        github: 'https://github.com/Jyoti040/SocietyManagementFrontend/tree/master',
        website: 'https://societymanagementfrontend-h3v3.onrender.com/',
        description: 'It is a unified platform for managing Societies built using ReactJS , Typescript in frontend and Go , MySql in backend .It is designed to develop module for our college. The website serves as a platform to showcase various details about societies in the college .',
        techStack: ['ReactJs', 'TailwindCSS', 'Typescipt', 'Axios', 'ChartJS', 'Go', 'MySql']
    },
    {
        image: blogsApp,
        name: 'Blogs App',
        github: 'https://github.com/Jyoti040/blogs_app_appwrite',
        website: 'https://blogs-app-appwrite-tau.vercel.app/',
        description: 'A full-stack blog application built with React and Redux for the front end, and Appwrite for the back end. This application allows users to create, read, update, and delete blog posts with a seamless user experience.',
        techStack: ['ReactJS', 'Boostrap', 'Appwrite', 'Redux']
    },
    {
        image: weatherApp,
        name: 'Weather App',
        github: 'https://github.com/Jyoti040/Weather-app-jyoti',
        website: 'https://replit.com/@jyotiahuja822/Weather-app',
        description: 'A responsive and dynamic weather application that fetches and displays real-time weather data using oprn weather api ',
        techStack: ['HTML', 'CSS', 'Javascript', 'Open Weather API']
    },
]

const Projects = () => {
    return (
        <motion.div
            className='mt-10 flex justify-center items-center' id='projects'>
            <div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}>

                    <h1 className='text-lightBlue text-4xl font-semibold flex justify-center'>Projects</h1>
                </motion.div>
                <motion.div
                    // variants={fadeIn("right", 0.4)}
                    // initial="hidden"
                    // whileInView={"show"}
                    // viewport={{ once: false, amount: 0.5 }}
                    className='grid grid-cols-1 lg:grid-cols-2 px-6 gap-10 lg:px-60 lg:gap-20 mt-10'>
                    {
                        projects.map((project, index) => (
                            <motion.div key={index}
                            // whileHover={{scale: 1.05}}
                            variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                                className='flex flex-col space-y-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border border-peacockGreen border-2 hover:border hover:border-lightBlue hover:border-4 rounded-lg max-w-lg lg:max-w-xl'>
                                <div className='p-3 h-full w-full bg-black'>
                                    <div>
                                        <img src={project.image} alt='project-home-img' className='lg:w-full h-full rounded-xl' />
                                    </div>
                                    <div className='pt-3'>
                                        <div className='flex justify-between'>
                                            <h1 className='text-xl font-bold'>{project.name}</h1>
                                            <div className='flex space-x-4 text-xl'>
                                                <div>
                                                    <a href={`${project.github}`} target='_blank'><GithubIcon /></a>
                                                </div>
                                                <div>
                                                    <a href={`${project.website}`} target='_blank'><ArrowUpRightFromSquare /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-sm md:text-md mt-4'>{project.description}</p>
                                        <div>
                                            <div className='gap-3 md:gap-0 flex justify-between flex-wrap  mt-4 '>
                                                {
                                                    project.techStack.map((techstack) => <div className='border border-peacockGreen px-1 lg:px-2 py-1 bg-gray text-darkBlue text-sm lg:text-lg rounded-lg'>{techstack}</div>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Projects