import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import { DM_Sans } from "next/font/google";
import Link from 'next/link';
const fontDM = DM_Sans({
    subsets: ['latin'],
    weight:["400","700"]
  })
const Header = () => {
  return (
    <div>
        <div className='w-full h-[45px] flex justify-between px-[300px] py-[14px] bg-[#272343] text-white'>
            <div className='w-[255px] h-4 flex gap-2 opacity-70 '>
                <FaCheck className='w-4 h-4'/>
                <p className='text-[13px] leading-[14.3px]'>Free shipping on all orders over $50</p>
            </div>
            <div className='w-[202px] h-[17px] flex gap-6 opacity-70 text-[13px] leading-[16.9px] items-center justify-center'>
                <div className='w-[37px] h-[17px] flex gap-[6px] '>
                    <p>Eng</p>
                    <IoIosArrowDown className='text-white w-4 h-4'/>
                </div>
                <p>Faqs</p>
                <div className='w-[87px] h-[17px] flex gap-[6px] items-center'>
                    <IoAlertCircleOutline/>
                    <p>Need Help</p>
                </div>
            </div>
        </div>
        {/* loog and cart section  */}
        <div className='bg-[#F0F2F3] w-full h-[84px] flex justify-between py-5 px-[300px]'>
            <div className='w-[166px] h-10 flex gap-2 items-center'>
                <Image src="./LogoIcon.svg" alt='Logo' width={40} height={40}/>
                <p className='text-[26px] leading-[31.2px] font-medium'>Comforty</p>
            </div>
            <div className='w-[120px] h-11 flex gap-3 bg-[#FFFFFF] rounded py-[11px] px-4' >
                <Link href={"/cart"}>
                <div className='w-14 h-[22px] flex gap-2 items-center'>
                    <IoCartOutline className='w-[22px] h-[22px] '/>
                    <p className='text-[12px] leading-[13.2px] font-medium'>Cart</p>
                </div>
                </Link>
                <div className={`w-5 h-5 rounded-full bg-[#007580] text-white text-[10px] leading-[10px] flex items-center justify-center ${fontDM.className}`}>2</div>
            </div>
        </div>
        {/* nav bar section  */}
        <div className='w-full h-[74px] flex justify-between py-[14px] px-[300px] items-center ' >
            <div className='w-[339px] h-[15px] flex gap-8 text-[#636270] text-[14px] leading-[15.4px]'>
                <Link href={"/"} className='text-[#007580]'>Home</Link>
                <Link href={"/Shop"}>Shop</Link>
                <Link href={"/Product"}>Product</Link>
                <Link href={"#"}>Pages</Link>
                <Link href={"#"}>About</Link>
            </div>
            <div className='w-[168px] h-[15px] flex gap-2 text-[#636270] text-[14px] leading-[15.4px]'>
                <p>Contact:</p>
                <p className='text-[#272343]'>(808) 555-0111</p>
            </div>
        </div>
    </div>
  )
}

export default Header