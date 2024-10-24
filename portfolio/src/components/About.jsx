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
           <h2 className='text-3xl lg:text-5xl text-lightBlue font-semibold flex justify-center'> Hey , I'm Jyoti</h2>
           <h3 className='pt-4 text-lg flex justify-center'>
              <Typewriter text={"I'm full stack developer"} speed={200}/>
           </h3>
           <h2 className='pt-4 px-2 text-center'>I'm Jyoti , a Btech student doing specialisation in computer science and engneering.
            I am a MERN stack <br/> web developer .  I am also an open source enthusiast.
           </h2>
           <div className='flex justify-center mt-6'>
             <motion.button whileTap={{ scale: 0.85 }} className='border border-lightBlue py-3 px-4 border-md text-md lg:text-lg' >
                <a href='/#contact'>Contact Me</a>
             </motion.button>
           </div>
        </div>
    </div>
  )
}

export default About