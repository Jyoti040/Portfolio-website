import React ,{useState} from 'react'
import { MenuIcon , XIcon } from 'lucide-react'

const isActiveClass = 'text-peacockGreen '
const Navbar = () => {
 const [isOpen , setIsOpen] = useState(false)
  const [isActive , setIsActive] = useState('About')

 const toggleNavBar = ()=>{
    setIsOpen(!isOpen)
 }


  return (
 <nav className='navbar sticky top-0'>
       <div>
        <div className='hidden md:flex space-x-8 items-center justify-center mt-6 mx-96  py-4 border border-peacockGreen rounded-full cursor-pointer'>
            <div className={`${isActive==='About' ? isActiveClass : ''}`} onClick={()=>{
                if(isActive !== 'About') setIsActive('About')
            }}>
                <a href='/#about'>About</a>
            </div>
            <div className={`${isActive==='Skills' ? isActiveClass : ''}`} onClick={()=>{
                if(isActive !== 'Skills') setIsActive('Skills')
            }}>
                <a href='/#skills'>Skills</a>
            </div>
            <div className={`${isActive==='Projects' ? isActiveClass : ''}`} onClick={()=>{
                if(isActive !== 'Projects') setIsActive('Projects')
            }}>
                <a href='#projects'>Projects</a>
            </div>
            <div className={`${isActive==='Experience' ? isActiveClass : ''}`} onClick={()=>{
                if(isActive !== 'Experience') setIsActive('Experience')
            }}>
                <a>Experience</a>
            </div>
            <div className={`${isActive==='Contact' ? isActiveClass : ''}`} onClick={()=>{
                if(isActive !== 'Contact') setIsActive('Contact')
            }}>
                <a>Contact</a>
            </div>
        </div>
        <div className='md:hidden flex items-center justify-between mt-4 mx-4'>
            <div className='text-lg '>Jyoti</div>
            <div>
                <div className='relative inline-block text-left'>
                    <div> 
                        <button className='inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2' id='menu-button' aria-expanded='true' aria-haspopup='true'>
                            <MenuIcon aria-hidden='true' data-slot="icon"/>
                        </button>
                    </div>
                </div>
                <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ' role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1}>
                   <div className='py-1' role='none'>
                   <a className='block px-4  py-2 text-sm text-gray ' role='menuitem' tabIndex={-1} id='menu-item-0'>About</a>
                     <a className='block px-4  py-2 text-sm text-gray ' role='menuitem' tabIndex={-1} id='menu-item-1'>Skills</a>
                     <a className='block px-4  py-2 text-sm text-gray ' role='menuitem' tabIndex={-1} id='menu-item-2'>Projects</a>
                     <a className='block px-4  py-2 text-sm text-gray ' role='menuitem' tabIndex={-1} id='menu-item-3'>Experience</a>
                     <a className='block px-4  py-2 text-sm text-gray ' role='menuitem' tabIndex={-1} id='menu-item-4'>Experience</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
 </nav>
  )
}

export default Navbar