import React from 'react'
import ProductAbout from './ProductAbout.tsx'
import { ProductBtn } from './ProductBtn.tsx'
import ProductImage from './ProductImage.tsx'

const WishlistItem = () => {
  return (
    <div className='flex items-center justify-between mb-8 w-[617px] last:border-b-0 border-b border-[#E9E9EB] pb-8'>
      <ProductImage />
      <ProductAbout />
      <div className='text-sm text-[#0E1422] leading-[24.5px]'>
        $75.00
      </div>
      <ProductBtn>Add to cart</ProductBtn>
    </div>
  )
}

export default WishlistItem