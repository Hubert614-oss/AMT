import { useState, useEffect } from "react";


const ThemeToggle  = () => {
    const [theme, setTheme] = useState(() => {
        if ( typeof window !== "undefined" ) { 
            return localStorage.getItem("theme") || "system";
        }
        return "system";
    })

    useEffect(() => {
        const root = window.document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if ( theme === "dark" || (theme === "system" && prefersDark) ) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const getThemeIcon = (themeType: string) => {
        switch (themeType) {
            case "light":
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 1v2m0 16v2M4.22 4.22l1.42 1.42m11.31 11.31l1.42 1.42M1 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                );
            case "dark":
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case "system":
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex gap-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
            {["light", "dark", "system"].map((themeType) => (
                <button
                    key={themeType}
                    onClick={() => setTheme(themeType)}
                    className={`p-1.5 rounded-full transition-colors ${
                        theme === themeType
                            ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    title={`${themeType} theme`}
                >
                    {getThemeIcon(themeType)}
                </button>
            ))}
        </div>
    )
}

export default ThemeToggle;