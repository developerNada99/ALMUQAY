"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import Management from '@/components/Management'
import Marketing from '@/components/Markting'
import Rental from '@/components/Rental'
import Buying from '@/components/Buying'
import Sale from '@/components/Rental'

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Services = () => {
  return (
    <div>
      {/* عنوان خدماتنا */}
      <section className="py-12 sm:py-16  md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <h1 className={`${cairo.className} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800`}>
              <span className="text-[#7ea9c9]">خدمات</span> المقيبل العقارية
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-[#7ea9c9] mx-auto mt-4 sm:mt-5 rounded-full"></div>
            <p className={`${cairo.className} text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto`}>
              نقدم لك مجموعة متكاملة من الحلول العقارية لتحقيق أهدافك بكل احترافية وثقة
            </p>
          </motion.div>
        </div>
      </section>

      {/* جميع الخدمات */}
      <Management />
      <Marketing />
      <Rental />
      <Buying />
      <Sale />
    </div>
  )
}

export default Services;