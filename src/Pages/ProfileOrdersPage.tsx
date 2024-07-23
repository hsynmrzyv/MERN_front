import React from 'react'
import ProfileMenu from '../Components/Profile/ProfileMenu.tsx'
import ProfilePage from './ProfilePage.tsx'
import OrderItem from '../Components/Profile/OrderItem.tsx'
import EmptyOrder from '../Components/Profile/EmptyOrder.tsx'

const ProfileOrdersPage = () => {
    return (
        <section>
            {5 > 3 ? (
                <>
                    <OrderItem />
                    <OrderItem />
                </>
            ) : (
                <EmptyOrder />
            )}
        </section>
    )
}

export default ProfileOrdersPage