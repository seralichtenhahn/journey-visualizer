import React from 'react'

export default function ContentWrapper({ children }) {
  return (
    <div className="absolute md:h-full bottom-2 inset-x-2 md:inset-y-0 md:left-0 z-auto flex md:pointer-events-none md:w-[45%]">
      <div className="flex-grow md:bg-white md:shadow-none md:pointer-events-auto">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex-none hidden w-full h-8 md:block md:w-1/4 md:h-full bg-gradient-to-t md:bg-gradient-to-r from-white"
      ></div>
    </div>
  )
}
