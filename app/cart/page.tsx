import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div>
      <div className='h-[632.89px] m-[180px] flex'>
        <div className='w-[1100px] h-[547.89px]'>
          <div className='w-[936px] h-[163px] px-4 py-8 flex gap-[30px]'>
            <Image src="./Product/Image2.svg" alt='chair' width={150} height={150}/> 
            <div className='w-[753px] h-[163px] flex flex-col gap-6'>
              <div className='w-[687.53px] h-[105px] flex gap-[376px]'>
                <div className='w-[235.31px] h-[105px] text-[16px] leading-[20.8px] text-[#272343]'>
                  <p className='mb-7'>Library Stool Chair</p>
                  <p className='text-[15px] leading-[28px]'>Ashen Slate/Cobalt Bliss</p>
                  <div className='w-[235.31px] h-7 pr-[19.92px] text-[#757575] flex '> 
                    <div className='w-[97.2px] flex gap-1'>
                      <p>Size</p>
                      <p className='w-[67px]'>L</p>
                    </div>
                    <div className='w-[97.2px] flex gap-1'>
                      <p>Quantity</p>
                      <p className='w-[67px]'>1</p>
                    </div>
                    
                  </div>
                  <div className='-[473.33px] flex gap-4'>
                      <CiHeart className='w-6 h-6'/>
                      <RiDeleteBin6Line className='w-6 h-6'/>
                    </div>
                </div>
                <p className='text-[15px] leading-[28px]'>MRP: $99</p>
              </div>
            </div>
          </div>

          <div className='w-[936px] h-[163px] px-4 py-8 flex gap-[30px]'>
            <Image src="./Categories/Image.svg" alt='chair' width={150} height={150}/> 
            <div className='w-[753px] h-[163px] flex flex-col gap-6'>
              <div className='w-[687.53px] h-[105px] flex gap-[376px]'>
                <div className='w-[235.31px] h-[105px] text-[16px] leading-[20.8px] text-[#272343]'>
                  <p className='mb-7'>Library Stool Chair</p>
                  <p className='text-[15px] leading-[28px]'>Ashen Slate/Cobalt Bliss</p>
                  <div className='w-[235.31px] h-7 pr-[19.92px] text-[#757575] flex '> 
                    <div className='w-[97.2px] flex gap-1'>
                      <p>Size</p>
                      <p className='w-[67px]'>L</p>
                    </div>
                    <div className='w-[97.2px] flex gap-1'>
                      <p>Quantity</p>
                      <p className='w-[67px]'>1</p>
                    </div>
                    
                  </div>
                  <div className='-[473.33px] flex gap-4'>
                      <CiHeart className='w-6 h-6'/>
                      <RiDeleteBin6Line className='w-6 h-6'/>
                    </div>
                </div>
                <p className='text-[15px] leading-[28px]'>MRP: $99</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[350px] h-[295px] flex flex-col gap-5'>
          <p className='text-[21px] leading-[33px] font-medium'>Summary</p>
          <div className='w-[334px] h-[28px] flex justify-between'>
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          <div className='w-[334px] h-[28px] flex justify-between'>
            <p>Estimated Delivery & Handling</p>
            <p>$198.00</p>
          </div>
          
         <div className='w-[340px] h-[62px]'> 
         <div className='w-[334px] h-[28px] flex justify-between'>
            <p>Total</p>
            <p>$198.00</p>
          </div>
         </div>

         <div className='w-[334.67px] h-[60px] bg-[#029FAE] rounded-[30px] text-white text-[15px] leading-6 text-center py-5 '>Member Checkout</div>
          
        </div>

       
          
          

          

          
        
      </div>
    </div>
  )
}

export default Cart