import React from 'react'
import ProductAbout from './ProductAbout.tsx'
import { ProductBtn } from './ProductBtn.tsx'
import ProductImage from './ProductImage.tsx'

const OrderItem = () => {
  return (
    <div className='flex items-center justify-between mb-8 w-[617px] last:border-b-0 border-b border-[#E9E9EB] pb-8'>
      <ProductImage />
      <ProductAbout />
      <div className='text-sm text-[#0E1422] border-b border-[#0E1422] leading-[24.5px]'>
        Processing
      </div>
      <ProductBtn>View item</ProductBtn>
    </div>
  )
}

export default OrderItem