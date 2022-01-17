import React from 'react'

export default function ContentWrapper({ children }) {
  return (
    <div className="absolute inset-y-0 left-0 z-auto flex pointer-events-none w-[45%]">
      <div className="flex-grow bg-white pointer-events-auto">{children}</div>
      <div
        aria-hidden="true"
        className="flex-none w-1/4 bg-gradient-to-r from-white"
      ></div>
    </div>
  )
}
