"use client"

import PageTransition from '@/components/PageTransition'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Key, Smartphone, History, Eye, EyeOff } from 'lucide-react'

interface SecurityActivity {
  id: string;
  action: string;
  device: string;
  location: string;
  date: string;
  status: 'success' | 'failed';
}

function PasswordSection() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white dark:bg-[#2C2C2E] rounded-xl p-6 shadow-sm h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-[#FF6B2C]/10 rounded-lg">
          <Key className="w-5 h-5 text-[#FF6B2C]" />
        </div>
        <h2 className="text-lg font-semibold dark:text-white">Change Password</h2>
      </div>
      <form className="space-y-6">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium dark:text-gray-300">Current Password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-[#1C1C1E] border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] dark:text-white text-sm"
              placeholder="Enter current password"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium dark:text-gray-300">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-[#1C1C1E] border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] dark:text-white text-sm"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium dark:text-gray-300">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-gray-50 dark:bg-[#1C1C1E] border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] dark:text-white text-sm"
            placeholder="Confirm new password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF6B2C] text-white py-2.5 rounded-lg hover:scale-[1.02] transition-transform font-medium"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

function TwoFactorSection() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="bg-white dark:bg-[#2C2C2E] rounded-xl p-6 shadow-sm h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-[#FF6B2C]/10 rounded-lg">
          <Smartphone className="w-5 h-5 text-[#FF6B2C]" />
        </div>
        <h2 className="text-lg font-semibold dark:text-white">Two-Factor Authentication</h2>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm dark:text-gray-300 font-medium">Add an extra layer of security</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
            {isEnabled ? 'Two-factor authentication is enabled' : 'Two-factor authentication is disabled'}
          </p>
        </div>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:ring-offset-2 ${
            isEnabled ? 'bg-[#FF6B2C]' : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      {isEnabled && (
        <button className="w-full bg-gray-100 dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 py-2.5 rounded-lg hover:scale-[1.02] transition-transform font-medium">
          Configure 2FA
        </button>
      )}
    </div>
  );
}

function ActivitySection() {
  const activities: SecurityActivity[] = [
    {
      id: '1',
      action: 'Login',
      device: 'Chrome on Windows',
      location: 'New York, USA',
      date: '2024-02-05 14:30',
      status: 'success',
    },
    {
      id: '2',
      action: 'Password Change',
      device: 'Firefox on MacOS',
      location: 'San Francisco, USA',
      date: '2024-02-04 09:15',
      status: 'success',
    },
    {
      id: '3',
      action: 'Login Attempt',
      device: 'Safari on iPhone',
      location: 'London, UK',
      date: '2024-02-03 18:45',
      status: 'failed',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#2C2C2E] rounded-xl p-6 shadow-sm h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-[#FF6B2C]/10 rounded-lg">
          <History className="w-5 h-5 text-[#FF6B2C]" />
        </div>
        <h2 className="text-lg font-semibold dark:text-white">Recent Activity</h2>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1C1C1E] rounded-lg"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium dark:text-white">{activity.action}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activity.status === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}
                >
                  {activity.status === 'success' ? 'Success' : 'Failed'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {activity.device} • {activity.location}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Security() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="space-y-6">
            <PasswordSection />
            <TwoFactorSection />
          </div>
          <ActivitySection />
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Security;