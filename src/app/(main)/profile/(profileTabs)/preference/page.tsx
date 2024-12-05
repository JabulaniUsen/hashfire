"use client"

import PageTransition from '@/components/PageTransition'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PreferenceOption {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

function PreferenceSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function PreferenceToggle({ option, onToggle }: { option: PreferenceOption; onToggle: (id: string) => void }) {
  return (
    <div className="flex items-start justify-between p-4 rounded-lg bg-gray-50 dark:bg-[#2C2C2E]">
      <div className="flex-1">
        <h3 className="text-sm font-medium dark:text-white">{option.label}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{option.description}</p>
      </div>
      <button
        onClick={() => onToggle(option.id)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:ring-offset-2 ${
          option.enabled ? 'bg-[#FF6B2C]' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            option.enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const languages = [
    { value: 'english', label: 'English (US)' },
    { value: 'spanish', label: 'Español' },
    { value: 'french', label: 'Français' },
    { value: 'german', label: 'Deutsch' },
  ];

  return (
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-[#2C2C2E]">
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="w-full bg-white dark:bg-[#1C1C1E] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Preference() {
  const [preferences, setPreferences] = useState<PreferenceOption[]>([
    {
      id: 'emailNotif',
      label: 'Email Notifications',
      description: 'Receive email notifications about your account activity and updates.',
      enabled: true,
    },
    {
      id: 'pushNotif',
      label: 'Push Notifications',
      description: 'Get instant notifications on your device for important updates.',
      enabled: false,
    },
    {
      id: 'marketingEmails',
      label: 'Marketing Emails',
      description: 'Receive promotional emails about new features and special offers.',
      enabled: true,
    },
    {
      id: 'profileVisibility',
      label: 'Public Profile',
      description: 'Make your profile visible to other users on the platform.',
      enabled: false,
    },
    {
      id: 'twoFactor',
      label: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account.',
      enabled: true,
    },
  ]);

  const handleToggle = (id: string) => {
    setPreferences(preferences.map(pref => 
      pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
    ));
  };

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto p-4 sm:p-6 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-8">Preferences</h1>

          <PreferenceSection title="Notifications">
            <PreferenceToggle option={preferences[0]} onToggle={handleToggle} />
            <PreferenceToggle option={preferences[1]} onToggle={handleToggle} />
            <PreferenceToggle option={preferences[2]} onToggle={handleToggle} />
          </PreferenceSection>

          <PreferenceSection title="Privacy">
            <PreferenceToggle option={preferences[3]} onToggle={handleToggle} />
            <PreferenceToggle option={preferences[4]} onToggle={handleToggle} />
          </PreferenceSection>

          <PreferenceSection title="Language">
            <LanguageSelector />
          </PreferenceSection>

          <div className="flex justify-end mt-8">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 bg-[#FF6B2C] text-white rounded-md hover:scale-[1.02] transition-transform"
            >
              Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Preference;