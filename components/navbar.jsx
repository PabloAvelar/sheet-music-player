import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';

function Navbar() {
    return (
        <div className="w-full max-w-screen p-4 flex justify-end bg-nord-10">
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
                    <DropdownItem key="profile">Profile</DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                    <DropdownItem key="logout" className="text-danger" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Navbar
