"use client";

import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

export default function LandingPage() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  return (
    <div className="h-screen w-screen bg-nord-6">
      {/* Navigation bar */}
      <div className="w-full p-4 flex justify-end">
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

      {/* Existing content */}
      <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] p-12">
        <div className="bg-nord-15 p-12 rounded-lg">
          <h1 className="text-9xl text-nord-0">Eyelody</h1>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".png,.jpg,.jpeg"
        />
        <Button className="bg-nord-7 mt-12"
        onClick={handleFileClick}>Upload</Button>
      </div>
    </div>
  );
}