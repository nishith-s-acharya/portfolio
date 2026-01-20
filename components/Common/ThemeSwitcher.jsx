import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    if (!theme) return null; // Avoid hydration mismatch

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[9999] p-3 rounded-full bg-Surface border border-RoyalBlue/20 text-RoyalBlue shadow-lg backdrop-blur-md transition-colors hover:bg-RoyalBlue/10 hover:border-RoyalBlue/50"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </motion.button>
    );
};

export default ThemeSwitcher;
