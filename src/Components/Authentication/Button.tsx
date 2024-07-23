import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='bg-[#0E1422] w-80 text-white py-[12px] px-[24px] rounded-md'>
            {children}
        </button>
    )
}

export default Button