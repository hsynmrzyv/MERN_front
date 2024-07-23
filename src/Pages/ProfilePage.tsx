import React from 'react'
import ProfileMenu from '../Components/Profile/ProfileMenu.tsx'

const ProfilePage = ({ children }) => {
    return (
        <>
            <ProfileMenu />
            {children}
        </>
    )
}

export default ProfilePage