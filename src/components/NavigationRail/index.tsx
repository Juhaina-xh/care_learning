"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/app/routes";
import "./index.css";
import { useAuth } from "@/app/context/AuthContext";

function NavigationRail() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="navbar-sticky sticky top-0 left-0  h-full w-fit pe-2">
      {/* Back Button */}
      <div className="back-btn-row">
        <Link href="/" className="back-btn">
          <Image
            src="/images/icons/icon-back-btn.svg"
            alt="Back"
            width={20}
            height={20}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav-rail mb-8">
        <ul className="nav-rail-list flex flex-col">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li
                key={item.href}
                className={`nav-rail-item ${item.className || ""}`}
              >
                <Link
                  href={item.href}
                  className={`nav-rail-link ${isActive ? "active" : ""}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            );
          })}

          <li className="nav-rail-item mt-6">
            <div className="flex flex-col items-center">
              <Image
                src="/images/img-squircle.png"
                alt="Profile"
                width={50}
                onClick={handleLogout}
                height={50}
                className="rounded-full cursor-pointer"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationRail;
