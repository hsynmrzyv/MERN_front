import React from 'react'

const ProfileAvatar = ({children}) => {
    return (
        <div className='bg-[#F0F1FF] rounded-full w-12 h-12 py-[2px] px-[6px] mb-8 leading-[48px] text-center text-[#4078FF] text-sm'>
           {children}
        </div>
    )
}

export default ProfileAvatar