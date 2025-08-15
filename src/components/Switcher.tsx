import React, { useState } from 'react'

interface ISwitcherProps {
    label: string,
    bChecked: boolean,
    onToggle: (checked: boolean) => void
}

const Switcher = ({ 
    label = 'Switcher',
    bChecked,
    onToggle
}: ISwitcherProps) => {
    
  const handleCheckboxChange = () => {
    onToggle(!bChecked)
  }

  return (
    <>
        <label className='cursor-pointer select-none'>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</div>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={bChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                />
                <div
                    className={`box block h-8 w-14 rounded-full ${
                        bChecked ? 'bg-[#F7BF57]' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                ></div>
                <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        bChecked ? 'translate-x-full' : ''
                    }`}
                ></div>
            </div>
        </label>
    </>
  )
}

export default Switcher