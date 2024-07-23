import React, { FormEvent, useRef } from 'react'
import Input from '../Components/Profile/Input.tsx'
import Button from '../Components/Profile/Button.tsx'

const ProfileAddressPage = () => {
    const streetRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const districtRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        const streetAddress = streetRef.current?.value;
        const country = countryRef.current?.value;
        const city = cityRef.current?.value;
        const zipCode = zipCodeRef.current?.value;
        const district = districtRef.current?.value;
        console.log(streetAddress, country, city, zipCode, district);

        const response = await fetch("/api/profile/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ streetAddress, country, city, zipCode, district }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.error);
            return;
        }
        alert('Addres added successfully');
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Input ref={streetRef} className="w-[534px]" type="text" label="Street Address" />
                <div className="flex gap-4">
                    <Input ref={cityRef} className="w-[259px]" type="text" label="City" />
                    <Input ref={districtRef} className="w-[259px]" type="text" label="District" />
                </div>
                <div className="flex gap-4">
                    <Input ref={zipCodeRef} className="w-[259px]" type="text" label="Zip Code" />
                    <Input ref={countryRef} className="w-[259px]" type="text" label="Country" />
                </div>
                <Button>
                    Save Changes
                </Button>
            </form>
        </section>
    )
}

export default ProfileAddressPage