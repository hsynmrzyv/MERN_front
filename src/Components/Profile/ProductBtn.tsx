import React from 'react'

export const ProductBtn = ({ children }) => {
    return (
        <button className='border border-[#0E1422] py-3 px-6 rounded-[4px] text-sm leading-[24,5px]'>
            {children}
        </button>
    )
}
