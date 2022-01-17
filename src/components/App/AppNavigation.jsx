import React from 'react'

export default function AppNavigation() {
  return (
    <div className="absolute z-10 flex items-center justify-between w-full px-4 mt-4 md:px-6">
      <button className="text-xl font-bold ">My Favourite Holiday</button>
      <ul>
        <li>
          <a href="#about" className="border-b border-black">
            About me
          </a>
        </li>
      </ul>
    </div>
  )
}
