"use client";

import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';
import uploadService from '../../services/uploadService';
import { getSession } from '../../lib/authSession';
import { Progress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';


export default function LandingPage() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getSession();
  const router = useRouter();

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file);

      // Enviando el archivo al servidor!!
      const data = {
        source: file
      }

      // Se asume que ya está cargando
      setIsLoading(true);
      setTimeout(() => {
        router.push(`/player?midifile=` + "471545f5c82f4eff81cf86ab1f5352fe");
      }, 2000);
      //const res = await uploadService.sendImage(data);

    }

  }

  if (isLoading) {
    return (
      <MainContainer>
        <Progress size="large"
          isIndeterminate
          aria-label="loading"
          color="primary"
        />
      </MainContainer>
    )
  } else {
    return (
      <main className="h-screen w-full bg-nord-6 ">


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


}