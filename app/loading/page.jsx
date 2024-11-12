'use client';

import React from 'react'
import MainContainer from '../../components/maincontainer'
import { Progress } from "@nextui-org/react";

function LoadingScreen() {
  return (
      <MainContainer>
        <Progress size="large" 
            isIndeterminate
            aria-label="loading"
            color="primary"
        />
      </MainContainer>
  )
}

export default LoadingScreen
