"use client"


import { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const ThemeToggle = () => {
    const [toggleDark, setToggleDark] = useState(false);

    const toggleTheme = () => {
        setToggleDark(!toggleDark);

        if (toggleDark) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="flex items-center justify-between w-12 h-6 p-1 rounded-full bg-gray-200 dark:bg-gray-600"
        >
            <div className={`transform transition-transform duration-300 ease-in-out ${
                toggleDark ? 'translate-x-6' : ''
            }`}>
                {toggleDark ? (
                    <MoonIcon className="w-4 h-4 text-gray-800" />
                ) : (
                    <SunIcon className="w-4 h-4 text-yellow-500" />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
