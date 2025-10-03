"use client";

import { useEffect } from "react";

export default function StatusBar({ message, type = "info", onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  const typeClasses = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-3 rounded shadow-lg text-white transition-all duration-300 ${typeClasses[type]}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white font-bold focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
