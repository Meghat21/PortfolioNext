import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id='contact'>
        {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src="/footer-grid.svg" alt="" className='w-full h-full opacity-50'/>
        </div> */}

        <div className="flex flex-col items-center">
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>Your</span> digital presence to next level
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today</p>
            <a href="mailto:meghasahu29june2001@gmail.com" className="">
                <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position='right'/>
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright 2023 @ Megha</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile)=>(
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 backdrop-filter" key={profile.id}>
                        <img src={profile.img} alt='profile' width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>

    </footer>
  )
}

export default Footer
