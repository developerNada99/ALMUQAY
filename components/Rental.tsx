"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Rental = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">
    

        {/* المحتوى: صورة + نص */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* قسم النص */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              <span className="text-[#7ea9c9]">تأجير</span> العقارات بسهولة وأمان
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نوفر في مكتب المقيبل للعقارات خدمات تأجير متكاملة تشمل البحث عن العقار 
              المناسب، التفاوض على الإيجار، إعداد العقود القانونية، ومتابعة إجراءات 
              التسليم والاستلام. نضمن لك تجربة إيجار سلسة وموثوقة سواء كنت مالكاً أو مستأجراً.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              فريقنا يمتلك شبكة واسعة من العقارات المتنوعة (سكنية، تجارية، إدارية) في 
              أفضل مواقع الرياض، نساعدك في إيجاد العقار الذي يناسب احتياجاتك وميزانيتك، 
              مع ضمان حقوق جميع الأطراف من خلال عقود واضحة ومصادق عليها.
            </p>
          </motion.div>


          {/* قسم الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative w-full aspect-4/3">
              <Image
                                            src="/rental.jpg"
                                            alt="إدارة الأملاك"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                          />
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Rental;