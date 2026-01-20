import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring for the ring
    const springConfig = { damping: 25, stiffness: 700 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, ringX, ringY]);

    return (
        <>
            {/* Main Dot - Follows strictly */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-RoyalBlue rounded-full pointer-events-none z-[9999]"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                }}
            />
            {/* Outer Ring - Follows with lag */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-RoyalBlue rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: ringX,
                    translateY: ringY,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
};

export default Cursor;
