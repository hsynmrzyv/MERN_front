import React, { FormEvent, useRef } from 'react'
import Input from '../Components/Profile/Input.tsx'
import Button from '../Components/Profile/Button.tsx'
import { useNavigate } from 'react-router';

const ProfilePasswordPage = () => {
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        const newPassword = newPasswordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        const response = await fetch("/api/profile/change-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newPassword, confirmPassword }),
        });

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
            console.log(data.error);
            return;
        }
        alert('Password changed successfully');
        navigate('/profile');
    };
    return (
        <form onSubmit={handleSubmit}>
            <Input
                ref={newPasswordRef}
                className="w-[80]"
                type="password"
                label="New Password" />
            <Input
                ref={confirmPasswordRef}
                className="w-[80]"
                type="password"
                label="Confirm Password" />
            <Button>
                Change password
            </Button>
        </form>
    )
}

export default ProfilePasswordPage