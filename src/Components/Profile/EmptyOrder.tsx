import React from 'react'
import EmptyBasket from '../../Icons/EmptyBasket.tsx'
import ArrowRight from '../../Icons/ArrowRight.tsx'
import Button from "./Button.tsx"

const EmptyOrder = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[100%]'>
            <EmptyBasket />
            <p className='text-[#5C5F6A] text-sm leading-[24,5px]'>Your order history is waiting to be filled.</p>
            <Button>
                Start Shopping
                <ArrowRight />
            </Button>
        </div>
    )
}

export default EmptyOrder