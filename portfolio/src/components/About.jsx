import React , {useState,useEffect} from 'react'
import {motion} from 'framer-motion'

const About = () => {
    
const Typewriter = ({text,speed})=>{
    const [displayText , setDisplayText ] = useState('')
    const [deleteText , setDeleteText ] = useState(false)
    const [index , setIndex ] = useState(0)

    useEffect(()=>{
        let timeout;

        if(!deleteText && index<text.length){
            timeout = setTimeout(()=>{
                setDisplayText(text.substring(0,index+1))
                setIndex((prev)=>prev+1)
            },100)
        }else if(deleteText && index>0){
            timeout = setTimeout(()=>{
                setDisplayText(text.substring(0,index-1))
                setIndex((prev)=>prev-1)
            },100)
        }else if(!deleteText && index===text.length){
            timeout=setTimeout(()=>{
                 setDeleteText(true)
            },2000)
        }else if(deleteText && index===0){
                setDeleteText(false)  
                setIndex(0) 
                setDisplayText('')  
        }
        return ()=>clearTimeout(timeout)
    },[index,text,deleteText,speed,displayText])

    return (
        <div>
            {displayText}
            <span className='blinking-cursor'>|</span>
        </div>
    )
}

  return (
    <div className='mt-10 flex justify-center items-center' id='about'>
        <div className=''>
           <h2 className='text-3xl lg:text-5xl text-lightBlue font-semibold flex justify-center'> <Typewriter text={"Hey , I'm Jyoti"} speed={200}/></h2>
           {/* <h3 className='pt-4 text-lg flex justify-center '>
              <Typewriter text={"I'm full stack developer"} speed={200}/>
           </h3> */}
           <h2 className='pt-4 px-2 text-center flex justify-center'>I'm a Btech student doing specialisation in computer science and engneering.
           I am an aspiring Software Developer with a strong foundation in full-stack development and data structures and algorithms and a passion for building dynamic and responsive web applications.
           Driven by a passion for continuous learning and innovation, aiming to create efficient, scalable, and impactful solutions solving the real world problems , I aspire to contribute to organizations through my technical expertise, problem-solving abilities, and a proactive approach in a dynamic and growth-driven environment.
           </h2>
           <div className='flex justify-center mt-6'>
             <motion.button whileTap={{ scale: 0.85 }} whileHover={{scale : 1.10}} className='border border-lightBlue py-3 px-4 border-md text-md lg:text-lg' >
                <a href='/#contact'>Contact Me</a>
             </motion.button>
           </div>
        </div>
    </div>
  )
}

export default About