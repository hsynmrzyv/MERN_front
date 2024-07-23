import React from 'react'

const Button = ({ children }: any) => {
    return (
        <button className='bg-[#0E1422] text-white py-[12px] px-[24px] mt-10 rounded-sm flex items-center'>
            {children}
        </button>
    )
}

export default Button