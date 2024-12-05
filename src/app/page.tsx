"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoadingAnimation = () => {
  return (
    <div className="relative">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-[#FF6B2C]/30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
          borderColor: ['rgba(255, 107, 44, 0.3)', 'rgba(255, 107, 44, 0.8)', 'rgba(255, 107, 44, 0.3)']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-t-[#FF6B2C] absolute top-0"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

const LoadingText = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg font-medium dark:text-white mt-8"
    >
      Loading{dots}
    </motion.div>
  );
};

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push('/profile');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1C1E] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center"
      >
        <LoadingAnimation />
        <LoadingText />
      </motion.div>
    </div>
  );
}
