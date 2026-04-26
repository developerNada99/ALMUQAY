"use client";

import React from 'react';
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Footer = () => {
  return (
    <footer className="p-2 sm:px-6 md:px-8 border-t-[#7ea9c9] border-t bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className={`${cairo.className} text-gray-600 text-sm sm:text-base`}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} 
            <span className="text-[#7ea9c9] mx-1">المقيبل</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;