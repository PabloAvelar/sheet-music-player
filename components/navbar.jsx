'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getSession, deleteSession } from '../lib/authSession';
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";


function Navbar() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const checkAuth = () => {
        const session = getSession();
        console.log("SESION:")
        console.log(session);

        setIsAuthenticated(session);
    }

    useEffect(() => {
        checkAuth();

    }, []);

    const handleLogout = () => {
        deleteSession();
        checkAuth();
        router.push("/");
    }

    return (
        <div className="w-full max-w-screen p-4 flex justify-end bg-nord-4">
            {isAuthenticated ? (
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="primary"
                            size="lg"
                            src="https://i.pravatar.cc/150"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions">
                        <DropdownItem href='/profile' key="profile">Profile</DropdownItem>
                        <DropdownItem key="settings">Settings</DropdownItem>
                        <DropdownItem onPress={handleLogout} key="logout" className="text-danger" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            ) : (
                <div className='flex gap-5'>
                    <Link href='/login'>
                        <Button> Login </Button>
                    </Link>

                    <Link href='/register'>
                        <Button> Sign up </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar
