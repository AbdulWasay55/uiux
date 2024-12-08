import React from 'react'
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";

const Product = () => {
  return (
    <div>
        <p className='text-[32px] leading-[35.2px] text-[#272343] font-semibold ml-[150px] 2xl:ml-[300px]'>Featured Products</p>
        <div className='w-[1100px] h-[461px] mx-[50px] flex justify-between my-[54px]  2xl:w-[1321px] 2xl:mx-[300px]'>
            <div className='relative w-[312px] h-[377px] flex flex-col gap-[14px] '>
              <div className=' absolute top-5 left-5 w-[49px] h-[26px] py-[6px] px-[10px] bg-[#01AD5A] text-[13px] leading-[14.3px] rounded '>New</div>
                <Image src="./Product/Image.svg" alt='chair' width={312} height={312} className='rounded-md' />
                <div className='w-[312px] flex justify-between h-[51px]'>
                <div className='w-[256px] h-[51px] flex flex-col gap-[10px]'> 
                    <p className='text-[16px] leading-[20.8px] '>Library Stool Chair</p>
                    <p className='text-[18px] leading-[19.8px] text-[#272343] font-bold'>$20</p>
                </div>
                <div className='w-11 h-11 rounded-lg bg-[#029FAE] text-white flex items-center justify-center '>
                  <IoCartOutline className='w-6 h-6'/>
                </div>
                </div>
            </div>
            {/* product 2 */}
            <div className='relative w-[312px] h-[377px] flex flex-col gap-[14px] '>
              <div className=' absolute top-5 left-5 w-[49px] h-[26px] py-[6px] px-[10px] bg-[#F5813F] text-[13px] leading-[14.3px] rounded '>Sales</div>
                <Image src="./Product/Image1.svg" alt='chair' width={312} height={312} className='rounded-md' />
                <div className='w-[312px] flex justify-between h-[51px]'>
                <div className='w-[256px] h-[51px] flex flex-col gap-[10px]'> 
                    <p className='text-[16px] leading-[20.8px] '>Library Stool Chair</p>
                    <p className='text-[18px] leading-[19.8px] text-[#272343] font-bold'>$20</p>
                </div>
                <div className='w-11 h-11 rounded-lg bg-[#F0F2F3]  flex items-center justify-center '>
                  <IoCartOutline className='w-6 h-6'/>
                </div>
                </div>
            </div>
            {/* product 3 */}
            <div className=' w-[312px] h-[377px] flex flex-col gap-[14px] '>
              
                <Image src="./Product/Image2.svg" alt='chair' width={312} height={312} className='rounded-md' />
                <div className='w-[312px] flex justify-between h-[51px]'>
                <div className='w-[256px] h-[51px] flex flex-col gap-[10px]'> 
                    <p className='text-[16px] leading-[20.8px] '>Library Stool Chair</p>
                    <p className='text-[18px] leading-[19.8px] text-[#272343] font-bold'>$20</p>
                </div>
                <div className='w-11 h-11 rounded-lg bg-[#F0F2F3]  flex items-center justify-center '>
                  <IoCartOutline className='w-6 h-6'/>
                </div>
                </div>
            </div>
            {/* product 4 */}
            <div className=' w-[312px] h-[377px] flex flex-col gap-[14px] '>
              
                <Image src="./Product/Image3.svg" alt='chair' width={312} height={312} className='rounded-md' />
                <div className='w-[312px] flex justify-between h-[51px]'>
                <div className='w-[256px] h-[51px] flex flex-col gap-[10px]'> 
                    <p className='text-[16px] leading-[20.8px] '>Library Stool Chair</p>
                    <p className='text-[18px] leading-[19.8px] text-[#272343] font-bold'>$20</p>
                </div>
                <div className='w-11 h-11 rounded-lg bg-[#F0F2F3]  flex items-center justify-center '>
                  <IoCartOutline className='w-6 h-6'/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product