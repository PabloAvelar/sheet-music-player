import React from 'react'

function MainContainer({children}) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] p-12">
      {children}
    </div>
  )
}

export default MainContainer
