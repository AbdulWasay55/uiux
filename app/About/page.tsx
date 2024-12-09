import React from 'react'
import Image from 'next/image'
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";

const page = () => {
  return (
    <div>
        <div className='mx-[300px] flex gap-5 my-[300px]'>
            <div className='w-[672px] h-[478px] bg-[#007580] p-16 flex flex-col justify-between'> 
                <div className='w-[495px] h-[161px] flex flex-col gap-3 text-white'>
                   <h1 className='font-bold text-[32px] leading-[38.76px]'>About Us - Comforty</h1> 
                   <p className='h-[110px] text-[18px] leading-[21.78px]'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                </div> 
                <div className='w-[179px] h-[56px] bg-[#F9F9F926] text-white text-[16px] leading-6 flex justify-center items-center '>View collection</div>
            </div>
            <div className='w-[619px] h-[478px]'>
            <Image src="./Image Block.svg" alt='chair ' width={619} height={478} />
            </div>
        </div>

        <div className='h-[362px] flex flex-col gap-[83px] items-center mx-[300px]'>
            <h1 className='font-semibold text-[32px] leading-[35.2px]'>What makes our Brand Different</h1>
            <div className='flex gap-10'>
                <div className='w-[309.45px] h-[244px] p-12 bg-[#F9F9F9] text-[#007580]'>
                    <div className='w-[213.45px] h-[148px] flex flex-col gap-3'>
                        <TbTruckDelivery className='w-6 h-6'/>
                        <p className='text-[20px] leading-[28px]'>Next day as standard</p>
                        <p className='text-[16px] leading-6'>Order before 3pm and get your order the next day as standard</p>
                    </div>
                </div>

                <div className='w-[309.45px] h-[244px] p-12 bg-[#F9F9F9] text-[#007580]'>
                    <div className='w-[213.45px] h-[148px] flex flex-col gap-3'>
                        < CiCircleCheck className='w-6 h-6'/>
                        <p className='text-[20px] leading-[28px]'>Made by true artisans</p>
                        <p className='text-[16px] leading-6'>Handmade crafted goods made with real passion and craftmanship</p>
                    </div>
                </div>

                <div className='w-[309.45px] h-[244px] p-12 bg-[#F9F9F9] text-[#007580]'>
                    <div className='w-[213.45px] h-[148px] flex flex-col gap-3'>
                        <FaRegCreditCard className='w-6 h-6'/>
                        <p className='text-[20px] leading-[28px]'>Unbeatable prices</p>
                        <p className='text-[16px] leading-6'>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                </div>

                <div className='w-[309.45px] h-[244px] p-12 bg-[#F9F9F9] text-[#007580]'>
                    <div className='w-[213.45px] h-[148px] flex flex-col gap-3'>
                        <LuSprout className='w-6 h-6'/>
                        <p className='text-[20px] leading-[28px]'>Recycled packaging</p>
                        <p className='text-[16px] leading-6'>We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[575px] mx-[300px] flex flex-col gap-[78px] my-[150px]'>
            <h1 className='text-[32px] leading-[35.2px] font-semibold text-[#272343]' >Our Popular Products </h1>
            <div className='h-[462px] flex gap-5'>
                <div className='w-[630px] h-[462px] flex flex-col gap-6'>
                    <Image src="./Large.svg" alt='sofa ' width={630} height={375}/>
                    <div className='w-[212px] h-[63px] flex flex-col gap-2 text-[20px] leading-[28px] text-[#2A254B]'>
                        <p>The Poplar suede sofa</p>
                        <p>$99.00</p>
                    </div>
                </div>

                <div className='w-[305px] h-[462px] flex flex-col gap-6'>
                    <Image src="./Photo.svg" alt='sofa ' width={305} height={375}/>
                    <div className='w-[212px] h-[63px] flex flex-col gap-2 text-[20px] leading-[28px] text-[#2A254B]'>
                        <p>The Dandy chair</p>
                        <p>$99.00</p>
                    </div>
                </div>

                <div className='w-[305px] h-[462px] flex flex-col gap-6'>
                    <Image src="./Photo (1).svg" alt='sofa ' width={305} height={375}/>
                    <div className='w-[212px] h-[63px] flex flex-col gap-2 text-[20px] leading-[28px] text-[#2A254B]'>
                        <p>The Dandy chair</p>
                        <p>$99.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page