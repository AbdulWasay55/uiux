import React from 'react'
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
        <div className=' mx-[300px] flex my-[150px] gap-[120px]'>
            <div className=' w-[675px] h-[607px]'>
                <Image src="./Product/Image1.svg" alt='Product image' width={675} height={607}/>

            </div>
            <div className='w-[543px] h-[607px] flex flex-col gap-10'>
            <h1 className='w-[500px] h-[132px] text-[#272343] text-[60px] leading-[66px] font-bold '>Library Stool Chair</h1>
            <div className='w-[144px] h-[44px] rounded-[100px] bg-[#029FAE] text-[20px] leading-[22px] text-white p-3 text-center'>$20.00 USD</div>
            <div className='w-[543px] h-[1px] border-[#D9D9D9] border-[1px]'></div>
            <p className='w-[543px] h-[101px] text-[#272343] opacity-60 text-[22px] leading-[33px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='w-[212px] h-[63px] bg-[#029FAE] rounded-lg py-[14px] px-[24px] text-white flex gap-4 items-center'> 
                 <IoCartOutline className='w-[29px] h-[29px] ' />
                <p className='text-[20px] leading-[22px]'>Add To cart</p>
            </div>
             </div>

        </div>
        <div className='h-[409px] mx-[300px]'>
            <div className='flex justify-between'> 
                <p className='font-bold text-[28px] leading-[33.89px]'>Featured Products</p>
                <button className='w-[75px] h-[31px] text-[18px] leading-[21.78px] border-b border-black'>View all</button>
            </div> 
            <div className='flex justify-between mt-10'>
                <div className='w-[250px] h-[306px] flex flex-col gap-[10px]'>
                    <Image src="./Image.svg" alt='chair image' width={250} height={263}/>
                    <div className='flex justify-between'>
                        <p className='text-[16px] leading-[20.8px]'>Library Stool Chair</p>
                        <p className='font-bold text-[14px] leading-[16.94px]'>$99</p>
                    </div>
                </div>

                <div className='w-[250px] h-[306px] flex flex-col gap-[10px]'>
                    <Image src="./Product/Image.svg" alt='chair image' width={250} height={263}/>
                    <div className='flex justify-between'>
                        <p className='text-[16px] leading-[20.8px]'>Library Stool Chair</p>
                        <p className='font-bold text-[14px] leading-[16.94px]'>$99</p>
                    </div>
                </div>

                <div className='w-[250px] h-[306px] flex flex-col gap-[10px]'>
                    <Image src="./Product/Product2.svg" alt='chair image' width={250} height={263}/>
                    <div className='flex justify-between'>
                        <p className='text-[16px] leading-[20.8px]'>Library Stool Chair</p>
                        <p className='font-bold text-[14px] leading-[16.94px]'>$99</p>
                    </div>
                </div>

                <div className='w-[250px] h-[306px] flex flex-col gap-[10px]'>
                    <Image src="./Product/Image2.svg" alt='chair image' width={250} height={263}/>
                    <div className='flex justify-between'>
                        <p className='text-[16px] leading-[20.8px]'>Library Stool Chair</p>
                        <p className='font-bold text-[14px] leading-[16.94px]'>$99</p>
                    </div>
                </div>

                <div className='w-[250px] h-[306px] flex flex-col gap-[10px]'>
                    <Image src="./Categories/Image.svg" alt='chair image' width={250} height={263}/>
                    <div className='flex justify-between'>
                        <p className='text-[16px] leading-[20.8px]'>Library Stool Chair</p>
                        <p className='font-bold text-[14px] leading-[16.94px]'>$99</p>
                    </div>
                </div>

                
            </div>
        </div>
    </div> 
  )
}

export default page