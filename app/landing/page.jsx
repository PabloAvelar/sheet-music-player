"use client";

import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';

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
    <main className="h-screen w-full bg-nord-6 ">
      {/* Navigation bar */}
      <Navbar />

      {/* Existing content */}
      <MainContainer>
        <div className="bg-nord-15 p-12 rounded-lg">
          <h1 className="text-9xl text-nord-0">Eyelody</h1>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".png,.jpg,.jpeg"
          width={200}
        />
        <Button className="bg-nord-7 mt-12"
          onClick={handleFileClick}>Upload <FontAwesomeIcon icon={faUpload} />
        </Button>
      </MainContainer>
    </main>
  );
}