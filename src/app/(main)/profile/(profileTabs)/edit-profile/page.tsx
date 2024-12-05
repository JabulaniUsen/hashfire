"use client"

import PageTransition from '@/components/PageTransition';
import React, { useState, useEffect } from 'react';
import InputField from '@/components/InputField';
import ImageUpload from '@/components/ImageUpload';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('light');
    }
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4 w-10 h-10 bg-[#FF6B2C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 15 }}
    >
      {theme === 'dark' ? (
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          />
        </motion.svg>
      ) : (
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      )}
    </motion.button>
  );
}

function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    email: '',
    location: '',
    phone: '',
    accountId: '',
  });

  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field === '')) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    setShowSuccess(true);
    console.log('Form Data:', formData);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="dark:bg-[#1C1C1E] min-h-screen transition-colors duration-200">
        <ThemeToggle />
        <AnimatePresence>
          {showSuccess && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#2C2C2E] text-primary dark:text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl z-50 w-[90%] sm:w-auto min-w-[280px] max-w-[400px] text-center mx-auto"
              >
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-3 text-3xl text-[#FF6B2C]"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Success!</h3>
                  <p className="dark:text-gray-300">Profile updated successfully!</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 md:gap-20 p-4 sm:p-6 max-w-7xl mx-auto">
          <div className="imageInput w-full md:w-auto flex justify-center">
              <ImageUpload />
            </div>
          <div className="w-full space-y-5 md:space-y-0 md:gap-5 md:grid md:grid-cols-2">
                <InputField
                  label="Your Name"
                  name="name"
                  placeholder="e.g. Pete Parker"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Company"
                  name="company"
                  placeholder="Enter name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Title"
                  name="title"
                  placeholder="Associate"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.xyz"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Location"
                  name="location"
                  placeholder="New York, NY"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (917) 582-6234"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                  <InputField
                    label="Account ID"
                    name="accountId"
                    placeholder="0x864DDC38B54CbC54d92231546E20849"
                    value={formData.accountId}
                    onChange={handleChange}
                    required
                  />
                {error && <p className="text-red-500 dark:text-red-400 text-sm md:col-span-2">{error}</p>}
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                className="w-full md:w-[130px] h-[40px] bg-[#FF6B2C] text-white py-2 rounded-md hover:scale-[1.1] transition-all"
                  >
                    Save
                  </button>
            </div>
          </div>
        </form>
      </div>
    </PageTransition>
  );
}

export default EditProfile;
