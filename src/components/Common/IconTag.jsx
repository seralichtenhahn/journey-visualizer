import Icons from '@/components/Icon'
import React from 'react'
import { capitalizeFirstLetter } from '@/utils'

export default function IconTag({ label, icon }) {
  const IconComponent = Icons[`Icon${capitalizeFirstLetter(icon)}`]

  return (
    <div className="flex items-center space-x-2">
      {IconComponent && (
        <div className="p-[0.3rem] rounded-full bg-primary-500">
          <IconComponent className="w-5 h-5" />
        </div>
      )}
      <p className="text-lg font-medium">{label}</p>
    </div>
  )
}
