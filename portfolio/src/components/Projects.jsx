import React from 'react'
import weatherApp from '../assets/weather-app.png'
import blogsApp from '../assets/blogs-app.png'
import societyManagement from '../assets/society-management.png'
import EcoEngage from '../assets/EcoEngage.png'
import {GithubIcon , ArrowUpRightFromSquare} from 'lucide-react'

const projects = [
    {
        image : EcoEngage,
        name : 'EcoEngage',
        github : '',
        website : '',
        description : '',
        techStack : ['NodeJS','ExpressJS','MongoDb','ReactJs']
    },
    {
        image : societyManagement,
        name : 'Society Management Project',
        github : '',
        website : '',
        description : '',
        techStack : ['ReactJs','TailwindCSS','Typescipt','Axios','ChartJS']
    },
    {
        image : blogsApp,
        name : 'Blogs App',
        github : '',
        website : '',
        description : 'A full-stack blog application built with React and Redux for the front end, and Appwrite for the back end. This application allows users to create, read, update, and delete blog posts with a seamless user experience.',
        techStack : ['ReactJS','Boostrap','Appwrite','Redux']
    },
    {
        image : weatherApp,
        name : 'Weather App',
        github : '',
        website : '',
        description : 'A responsive and dynamic weather application that fetches and displays real-time weather data using oprn weather api ',
        techStack : ['HTML','CSS','Javascript','Open Weather API']
    },
]
const Projects = () => {
  return (
    <div className='mt-10 flex justify-center items-center' id='#projects'>
        <div>
            <h1 className='text-lightBlue text-4xl font-semibold flex justify-center'>Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-6 gap-10 lg:px-60 lg:gap-20 mt-10'>
                 {
                    projects.map((project,index)=>(
                         <div key={index} className='flex flex-col space-y-6'>
                            <div>
                                <img src={project.image} alt='project-home-img' className='w-full h-full rounded-xl'/>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='text-xl'>{project.name}</h1>
                                    <div className='flex space-x-4 text-xl'>
                                        <div>
                                            <a><GithubIcon/></a>
                                        </div>
                                        <div>
                                            <a><ArrowUpRightFromSquare/></a>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-sm md:text-md mt-4'>{project.description}</p>
                                <div>
                                   <div className='gap-3 md:gap-0 flex justify-between flex-wrap  mt-4 '>
                                    {
                                        project.techStack.map((techstack)=><div className='border border-peacockGreen px-1 lg:px-2 py-1 bg-gray text-darkBlue text-sm lg:text-lg rounded-lg'>{techstack}</div>)
                                    }
                                   </div>
                                </div>
                            </div>
                         </div>
                    ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Projects