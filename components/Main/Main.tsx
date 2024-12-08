import React from 'react'
import Image from 'next/image'
const Main = () => {
  return (
    <div className='relative mx-[300px]'>
        <p className=' absolute left-[-335px] top-[310px] -rotate-90 text-[34px] leading-[39.84px]'>EXPLORE NEW AND POPULAR STYLES</p> 
        
        <div className='w-[1320] h-[648px] grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-5 ' >
        
            <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
                <Image src="./Main/item-category 1.svg" alt='chair image ' width={655} height={648} />
            </div>
            <div className='col-start-3 col-end-4 row-start-1 row-end-2'>
            <Image src="./Main/item-category.svg" alt='chair image ' width={322.5} height={322.5} />
            </div>
            <div className='col-start-4 col-end-5 row-start-1 row-end-2'>
            <Image src="./Main/item-category-hover 1.svg" alt='chair image ' width={322.5} height={322.5} />
            </div>
            <div className='col-start-3 col-end-4 row-start-2 row-end-3'>
            <Image src="./Main/item-category-2.svg" alt='chair image ' width={322.5} height={322.5} />
            </div>
            <div className='col-start-4 col-end-5 row-start-2 row-end-3'>
            <Image src="./Main/item-category-hover 1.svg" alt='chair image ' width={322.5} height={322.5} />
            </div>
           
        </div>
    </div>
  )
}

export default Main