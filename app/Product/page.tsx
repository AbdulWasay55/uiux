import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';

const page = () => {
  return (
    <div>
        
        <div className='flex mx-[50px]  flex-col justify-center 2xl:mx-[300px] mt-[136px]'>
        
        <p className='text-[32px] leading-[35.2px] text-[#272343] font-semibold self-center mb-10'>Our Products</p>
        <div className='w-[1100px] h-[461px]  flex justify-between  2xl:w-[1321px] '>
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
  

    <div className='w-[1100px] h-[461px]  flex justify-between my-[54px]  2xl:w-[1321px] '>
        <div className='relative w-[312px] h-[377px] flex flex-col gap-[14px] '>
          <div className=' absolute top-5 left-5 w-[49px] h-[26px] py-[6px] px-[10px] bg-[#01AD5A] text-[13px] leading-[14.3px] rounded '>New</div>
            <Image src="./Product/Product1.svg" alt='chair' width={312} height={312} className='rounded-md' />
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
        {/* product 2 */}
        <div className='relative w-[312px] h-[377px] flex flex-col gap-[14px] '>
          <div className=' absolute top-5 left-5 w-[49px] h-[26px] py-[6px] px-[10px] bg-[#F5813F] text-[13px] leading-[14.3px] rounded '>Sales</div>
            <Image src="./Main/item-category-2.svg" alt='chair' width={312} height={312} className='rounded-md' />
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
          
            <Image src="./Image.svg" alt='chair' width={312} height={312} className='rounded-md' />
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
        <div  className=' w-[312px] h-[377px] flex flex-col gap-[14px] '>
          
            <Image src="./Product/Image.svg" alt='chair' width={312} height={312} className='rounded-md' />
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


    <div className='w-[1100px] h-[461px]  flex justify-between my-[54px]  2xl:w-[1321px] '>
            <div className='relative w-[312px] h-[377px] flex flex-col gap-[14px] '>
              <div className=' absolute top-5 left-5 w-[49px] h-[26px] py-[6px] px-[10px] bg-[#01AD5A] text-[13px] leading-[14.3px] rounded '>New</div>
                <Image src="./Categories/Image.svg" alt='chair' width={312} height={312} className='rounded-md' />
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
              
                <Image src="./Product/Product2.svg" alt='chair' width={312} height={312} className='rounded-md' />
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
    <div className='w-[1920px] h-[754px] flex flex-col gap-[70px] bg-[#1E28320D] py-[100px] px-[300px] items-center' >
        <div className='w-[760px] h-[165px] flex flex-col gap-[75px] '>
            <p className='text-[50px] leading-[58.5px] font-medium'>Or subscribe to the newsletter</p>
            <div className='flex gap-5 self-end'>
               <input type="text" className='w-[643px] h-8 border-b border-black bg-transparent text-[16px] font-semibold leading-[18.75px]' placeholder='Email address...' />
               <button className='w-[91px] h-8 border-b border-black text-[16px] leading-[21.9px]'>SUBMIT</button>
            </div>
        </div>
        <div className='w-[1324px] h-[319px] flex flex-col gap-10 '>
            <h1 className='text-[50px] leading-[58.59px] font-medium self-center'>Follow products and discounts on Instagram</h1>
            <div className='flex justify-between'>
                <Image src="./Product/Product1.svg" alt='product image' width={186} height={186}/>
                <Image src="./Categories/Image.svg" alt='product image' width={186} height={186}/>
                <Image src="./Product/Image1.svg" alt='product image' width={186} height={186}/>
                <Image src="./Product/Image2.svg" alt='product image' width={186} height={186}/>
                <Image src="./Product/Image.svg" alt='product image' width={186} height={186}/>
                <Image src="./Product/Product2.svg" alt='product image' width={186} height={186}/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default page