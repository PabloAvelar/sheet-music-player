import React from 'react'

function MainContainer({children}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center h-[calc(100%-4rem)] p-12 bg-nord-6 overflow-hidden">
      {children}
    </div>
  )
}

export default MainContainer
