import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from '@/data'

function Client() {
  return (
    <div className="py-20">
      <h1 className="heading">
       kind words from {" "}
        <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
            <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
            />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mx-lg:mt-10">
            {companies.map(({id,img,name,nameImg})=>(
                <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
                    <img src={img} alt={name} className='md:w-10 w-5'/>
                    <img src={nameImg} alt={name} className='md:w-24 w-20'/>

                </div>
            ))}
        </div>    
        </div>
      </div>
    </div>    
  )
}

export default Client
