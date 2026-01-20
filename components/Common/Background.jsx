import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none">
            {/* Base Background Color - Handled by globals.css body, but explicit here for blending */}
            <div className="absolute inset-0 bg-[var(--background)] transition-colors duration-300" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Ambient Glowing Orbs */}
            <div
                style={{
                    background: 'var(--accent)',
                    opacity: 0.15
                }}
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen dark:mix-blend-screen animate-blob-1"
            />

            <div
                style={{
                    background: '#a855f7',
                    opacity: 0.15
                }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen dark:mix-blend-screen animate-blob-2"
            />
        </div>
    );
};

export default Background;
