import React from 'react'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <a
      href="#"
      rel="nofllow"
      onClick={e => {
        e.preventDefault()
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <div className="group mx-1 rounded-full p-1 text-gray-500 hover:bg-blue-800 dark:hover:bg-blue-200">
        {theme === 'light' ? (
          <MoonIcon className="h-6 w-6 group-hover:text-yellow-500" />
        ) : (
          <SunIcon className="h-6 w-6 group-hover:text-red-400" />
        )}
      </div>
    </a>
  )
}

export default ThemeToggleButton
