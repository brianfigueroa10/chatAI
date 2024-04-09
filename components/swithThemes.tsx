// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="">
            {theme === 'dark' ?
                <button className="bg-neutral-200 border rounded" onClick={() => setTheme('light')}>☀️</button>
                :
                <button className="bg-neutral-800 border rounded" onClick={() => setTheme('dark')}>🌙</button>}

        </div>
    )
};