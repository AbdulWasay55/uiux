import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='my-[136px] '>
        <p className='text-[32px] leading-[35.2px] text-[#272343] font-semibold ml-[150px] 2xl:ml-[300px]'>Top categories</p>
        <div className='w-[1100px] h-[508px] mx-[50px] my-[54px] flex justify-between 2xl:w-[1321px] 2xl:mx-[300px] 2xl:justify-between'>
          <div className='relative w-[424px] h-[424px]'>
            <Image src="./Categories/Image.svg" alt='tpo categories product image' width={424} height={424} className='rounded-[10px]'/>
            <div className= 'flex flex-col gap-2  absolute top-[339px] w-[424px] h-[85px]  rounded-b-[10px] bg-black opacity-70 text-white p-5'>
              <p className='text-[20px] leading-[22px]'>Wing Chair</p>
              <h1 className='text-[14px] leading-[15.4px]'>3,584 Products</h1>
            </div>

          </div>
          {/* product 2 */}
          <div className='relative w-[424px] h-[424px]'>
            <Image src="./Categories/Image1.svg" alt='tpo categories product image' width={424} height={424} className='rounded-[10px]'/>
            <div className= 'flex flex-col gap-2  absolute top-[339px] w-[424px] h-[85px]  rounded-b-[10px] bg-black opacity-70 text-white p-5'>
              <p className='text-[20px] leading-[22px]'>Wooden Chairr</p>
              <h1 className='text-[14px] leading-[15.4px]'>157 Products</h1>
            </div>

          </div>
          {/* product 3 */}
          <div className='relative w-[424px] h-[424px]'>
            <Image src="./Categories/Image2.svg" alt='tpo categories product image' width={424} height={424} className='rounded-[10px]'/>
            <div className= 'flex flex-col gap-2  absolute top-[339px] w-[424px] h-[85px]  rounded-b-[10px] bg-black opacity-70 text-white p-5'>
              <p className='text-[20px] leading-[22px]'>Desk Chair</p>
              <h1 className='text-[14px] leading-[15.4px]'>154 Products</h1>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Categories