import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom gold cursor — a spring-following dot that expands into a
 * ring when hovering interactive elements (a, button, input, textarea).
 */
export const CustomCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovered(
        !!target.closest('a, button, input, textarea, [data-cursor="hover"]')
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
      animate={{
        x: cursorPos.x - (isHovered ? 24 : 5),
        y: cursorPos.y - (isHovered ? 24 : 5),
        width: isHovered ? 48 : 10,
        height: isHovered ? 48 : 10,
        backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
