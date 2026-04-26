"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import { 
  TrendingUp, 
  Building2, 
  Key, 
  ShoppingCart, 
  DollarSign,
  BarChart3
} from "lucide-react";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Icons = () => {
  const services = [
    { name: "تسويق عقاري", icon: TrendingUp },
    { name: "إدارة الأملاك", icon: Building2 },
    { name: "تأجير عقاري", icon: Key },
    { name: "شراء عقارات", icon: ShoppingCart },
    { name: "بيع عقارات", icon: DollarSign },
    { name: "استشارات عقارية", icon: BarChart3 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">

        {/* شبكة الخدمات - أيقونات أكبر */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.15 }} 
                viewport={{ once: true }}
                className="text-center"
              >
                {/* الأيقونة - مقاسات أكبر */}
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="bg-[#7ea9c9]/15 p-4 md:p-5 rounded-full">
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#7ea9c9]" />
                  </div>
                </div>
                
                {/* اسم الخدمة - خط أكبر */}
                <h3 className={`${cairo.className} text-sm sm:text-base md:text-lg font-semibold text-gray-700`}>
                  {service.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Icons;