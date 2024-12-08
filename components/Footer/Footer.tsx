import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { Poppins } from "next/font/google";
const fontPoppins = Poppins({
    subsets: ['latin'],
    weight:["400","700"]
  })
const Footer = () => {
  return (
    <div>
        <div className=' mx-[300px] h-[343px] flex justify-between py-20'>
            <div className='w-[350px] h-[198px] flex flex-col gap-6 '>
            <div className='w-[166px] h-10 flex gap-2 items-center'>
                <Image src="./LogoIcon.svg" alt='Logo' width={40} height={40}/>
                <p className='text-[26px] leading-[31.2px] font-medium'>Comforty</p>
            </div> 
            <div className='text-[16px] leading-6 text-[#272343] w-[350px] h-[72px] opacity-60 '>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus </div>
            
            <div className='w-[206px] h-[38px] flex gap-4'>
                <FaFacebook className='text-[#007580]'/>
                <FaTwitter className='text-[#636270]'/>
                <FaInstagram className='text-[#636270]'/>
                <FaPinterest className='text-[#636270]'/>
                <FaYoutube className='text-[#636270]'/>
            </div>
            </div>

            <div className='w-[105px] h-[203px] flex flex-col gap-5 text-[16px] leading-[17.6px] text-[#272343]'>
                <p className='text-[14px] leading-[15.4px] tracking-[5%] text-[#9A9CAA] font-medium'>Category</p>
                <p>Sofa</p>
                <p>Armchair</p>
                <p>Wing Chair</p>
                <p className=' underline text-[#007580]'>Desk Chair</p>
                <p>wooden Chair</p>
                <p>Park Bench</p>
            </div>

            <div className='w-[156px] h-[143px] flex flex-col gap-5 text-[16px] leading-[17.6px] text-[#272343]'>
                <p className='text-[14px] leading-[15.4px] tracking-[5%] text-[#9A9CAA] font-medium'>Support</p>
                <p>Help & Support</p>
                <p>Tearms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Help</p>
                
            </div>

            <div className='w-[424px] h-[142px] rounded-lg flex flex-col gap-5 '>
            <p className='text-[14px] leading-[15.4px] tracking-[5%] text-[#9A9CAA] font-medium'>Newsletter</p>
            <div className='w-[424px]  flex gap-5 '> 
                <input type="text" className='w-[285px] h-[46px] border-[1px] border-[#E1E3E5] rounded-lg p-5 ' placeholder='Your email' />
                <button className='w-[127px] h-[46px] py-[14px] px-6 bg-[#029FAE] rounded-lg text-[16px] leading-[17.6px] text-white'>Subscribe</button>
            </div>
            <p className='text-[#272343] opacity-60 text-[15px] leading-[22.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
        </div>
        <div className='flex justify-between mx-[300px] h-[75px] py-6 ' >
            <p className={`text-[14px] leading-[21px] text-[#9A9CAA] ${fontPoppins.className}`}>@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
            <Image src="./Group 13.svg" alt='payment method image' width={227} height={27} className=' opacity-30'/>
        </div>
    </div>
  )
}

export default Footer