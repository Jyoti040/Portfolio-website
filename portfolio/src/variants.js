export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    };
};

export const borderAnimation = {
  hidden: {
    borderWidth: '2px',
    borderColor: '#38bdf8', // Tailwind color 'sky-400'
  },
  show: {
    borderWidth: '4px',
    borderColor: '#16a34a', // Tailwind color 'green-600'
    transition: {
      duration: 1,
      repeat: Infinity,  
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};
