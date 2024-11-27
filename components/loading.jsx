'use client';

import { Progress } from "@nextui-org/react";

function Loading() {
  return (
        <Progress size="small" 
            isIndeterminate
            aria-label="loading"
            color="primary"
        />
  )
}

export default Loading