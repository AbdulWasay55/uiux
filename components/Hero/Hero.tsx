import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
const Hero = () => {
  return (
    <div>
        <div className='w-[1100px] h-[850px] mx-[150px] bg-[#F0F2F3] rounded-b-[48px] flex gap-[70px] 2xl:w-[1321px] 2xl:mx-[300px] 2xl:gap-[150px]'>
            <div className='w-[557px] h-[337px] mt-[229px] ml-[70px] flex flex-col text-[#272343]'>
                <p className='text-[14px] leading-[14px] tracking-[12%]'>Welcome to chairy</p> 
                <h1 className='text-[60px] leading-[66px] font-bold mt-5'>Best Furniture Collection for your interior.</h1>
                <button className='w-[171px] h-[52px] rounded-lg bg-[#029FAE] flex gap-5 py-[14px] px-6 mt-10 text-white items-center'>
                    <p className='text-[16px] leading-[17.6px] '>Shop Now</p>
                    <FaArrowRightLong className='w-6 h-6'/>

                </button>
                </div>
               <Image src="./Product Image.svg" alt='chair Image' width={434} height={584} className='mt-[115px]'/>
        </div>
        {/* logos section  */}
        <div className='w-[1100px] h-[139px] mx-[150px]   flex justify-between mt-[54px]  2xl:w-[1321px] 2xl:mx-[300px]'>
            <Image src="./Logo.svg" alt='zapier logo' width={85} height={87} />
            <Image src="./Logo1.svg" alt='pipedrive logo' width={107} height={109} />
            <Image src="./Logo2.svg" alt='cib bank logo' width={139} height={135} />
            <Image src="./Logo3.svg" alt='z logo' width={63} height={65}/>
            <Image src="./Logo4.svg" alt='burn toste logo' width={98} height={101} />
            <Image src="./Logo6.svg" alt='panda doc logo' width={113} height={115}/>
            <Image src="./Logo5.svg" alt='moz logo' width={85} height={87} />
        </div>
    </div>
  )
}

export default Hero