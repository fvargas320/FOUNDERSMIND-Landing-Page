import { motion } from 'motion/react';

export const FluxBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 blur-[80px] contrast-125 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#0a0a0a,#000)]">
      <motion.div 
        className="absolute rounded-full opacity-60 bg-gradient-to-br from-[#1a1a1a] to-[#333344] w-[600px] h-[600px] -top-[10%] -left-[10%]"
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute rounded-full opacity-60 bg-[#151515] w-[500px] h-[500px] -bottom-[5%] -right-[5%]"
        animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute rounded-full opacity-60 bg-[#0f0f15] w-[400px] h-[400px] top-[40%] left-[30%]"
        animate={{ x: [0, 50, 0], y: [0, 80, 0], scale: [1, 1.05, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  )
}
