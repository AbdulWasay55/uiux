import React from 'react'
import { Poppins } from "next/font/google";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import Image from 'next/image';
const fontPoppins = Poppins({
    subsets: ['latin'],
    weight:["400","700"]
  })
const page = () => {
  return (
    <div>
        <div className='mx-[240px] h-[1144px] flex flex-col justify-center items-center'>
            <div className={`flex flex-col gap-[20px] ${fontPoppins.className} items-center`}>
                <h1 className='text-[36px] leading-[54px] font-semibold'>Get In Touch With Us</h1>
                <p className='text-[16px] leading-[24px] text-[#9F9F9F] w-[644px] h-[48px] text-center' >For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className='w-[1058px] h-[923px] flex gap-5 '>  
                <div className='w-[393px] h-[537px] flex flex-col gap-10 p-10 justify-end'>
                    <div className='w-[260px] flex gap-5'>
                    <IoLocationSharp className='w-[22px] h-[27px]' />
                    <div className='flex flex-col'>
                        <p className={`text-[24px] leading-[36px] font-medium ${fontPoppins}`}>Address</p>
                        <p className='w-[200px] h-[57px] text-[16px] leading-[19.36px]'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                    </div>

                    <div className='w-[260px] flex gap-5'>
                    <FaPhoneAlt className='w-[22px] h-[27px]' />
                    <div className='flex flex-col'>
                        <p className={`text-[24px] leading-[36px] font-medium ${fontPoppins}`}>Phone</p>
                        <p className='w-[200px] h-[57px] text-[16px] leading-[19.36px]'>Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</p>
                    </div>
                    </div>

                    <div className='w-[260px] flex gap-5'>
                    <GoClockFill className='w-[22px] h-[27px]' />
                    <div className='flex flex-col'>
                        <p className={`text-[24px] leading-[36px] font-medium ${fontPoppins}`}>Working Time</p>
                        <p className='w-[200px] h-[57px] text-[16px] leading-[19.36px]'>Monday-Friday: 9:00 - 22:00
                        Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                    </div>
                </div>

                <div className={`w-[635px] h-[923px] flex p-10 pt-20 ${fontPoppins.className}`}>
                    <div className='w-[531px] h-[741px] flex flex-col gap-10'>
                        <div className={`w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name" className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Your name</label>
                            <input type="text" placeholder='Abc' className='w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>

                        <div className={`w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Email address</label>
                            <input type="text" placeholder='Abc@def.com' className='w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>


                        <div className={`w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Subject</label>
                            <input type="text" placeholder='This is an optional' className='w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>


                        <div className={`w-[530px] h-[166px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Message</label>
                            <input type="text" placeholder='Hi! i’d like to ask about' className='w-[528.75px] h-[120px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>

                        <div className='w-[237px] h-[55px] bg-[#029FAE] text-white rounded-[5px] text-[16px] leading-6   flex justify-center items-center '>Submit</div>
                    </div>
                    
                        
                </div>
            </div>

        </div>


        <div className={`h-[270px] w-[1320px] mx-[300px] flex justify-between bg-[#F4F4F4] py-[100px] ${fontPoppins.className}`}>
            <div className='h-[70px] w-[1188px] flex justify-between items-center mx-16'>
                <div className='w-[337px] h-[70px] flex gap-[10px]'>
                    <Image src="./trophy 1.svg" alt='trophy icon' width={60} height={60}/>
                    <div className='w-[267px]  flex flex-col gap-[2px]'>
                        <div className='text-[25px] leading-[37.5px] font-medium'>High Quality</div>
                        <p className='text-[20px] leading-[30px] font-medium text-[#898989]'>crafted from top materials</p>

                    </div>
                </div>


                <div className='w-[337px] h-[70px] flex gap-[10px]'>
                    <Image src="./guarantee.svg" alt='trophy icon' width={60} height={60}/>
                    <div className='w-[267px]  flex flex-col gap-[2px]'>
                        <div className='text-[25px] leading-[37.5px] font-medium'>Warranty Protection</div>
                        <p className='text-[20px] leading-[30px] font-medium text-[#898989]'>Over 2 years</p>

                    </div>
                </div>



                <div className='w-[337px] h-[70px] flex gap-[10px]'>
                    <Image src="./customer-support.svg" alt='trophy icon' width={60} height={60}/>
                    <div className='w-[267px]  flex flex-col gap-[2px]'>
                        <div className='text-[25px] leading-[37.5px] font-medium'>24 / 7 Support</div>
                        <p className='text-[20px] leading-[30px] font-medium text-[#898989]'>Dedicated support</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default page

