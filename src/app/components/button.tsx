import React from 'react'

function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button className={`border w-72 border-gray-300 rounded-md placeholder-gray-200 placeholder:font-bold bg-transparent text-white p-2 outline-none text-black px-6 py-3 hover:bg-gray-200 hover:text-black hover:cursor-pointer transition-colors ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button