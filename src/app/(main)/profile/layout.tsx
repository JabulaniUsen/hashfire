"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-primary font-bold border-b-2 border-primary py-2 transition-all" : "transition-all py-2 text-blue-500";

  return (
    <div className="text-[14px] lg:m-[100px] p-5">
      {/* Tab Selector */}
      <div className="flex space-x-8 border-b">
        <Link href="/profile/edit-profile">
          <p className={isActive("/profile/edit-profile")}>Edit Profile</p>
        </Link>
        <Link href="/profile/security">
          <p className={isActive("/profile/security")}>Security</p>
        </Link>
        <Link href="/profile/preference">
          <p className={isActive("/profile/preference")}>Preference</p>
        </Link>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
