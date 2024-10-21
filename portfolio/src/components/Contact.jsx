import React from 'react'
import { LinkedinIcon, GithubIcon, XIcon, MailIcon, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <div>
            <div className='my-10 flex items-center justify-center' id='contact'>
                <div className='flex flex-wrap space-x-10 text-2xl'>
                    <div>
                        <a href='https://www.linkedin.com/in/jyoti-ahuja-331228248' target='_blank'><LinkedinIcon size={35} /></a>
                    </div>
                    <div>
                        <a href='https://github.com/Jyoti040' target='_blank'><GithubIcon size={35} /></a>
                    </div>
                    <div>
                        <a href='https://x.com/_jyoti_040' target='_blank'><XIcon size={35} /></a>
                    </div>
                    <div>
                        <a href='mailto:jyotiahuja822@gmail.com' target='_blank'><MailIcon size={35} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact