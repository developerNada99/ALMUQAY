"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Marketing = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        

        {/* المحتوى: صورة + نص */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* قسم الصورة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative w-full aspect-4/3">
              <Image
                              src="/markt.jpg"
                              alt="إدارة الأملاك"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
            </div>
          </motion.div>

          {/* قسم النص */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              <span className="text-[#7ea9c9]">تسويق</span> عقاري احترافي
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نقدم في مكتب المقيبل للعقارات خدمات تسويق عقاري متكاملة تشمل دراسة السوق، 
              تحليل الفرص الاستثمارية، وإعداد خطط تسويقية مبتكرة. نستخدم أحدث أساليب 
              التسويق الرقمي والتقليدي للوصول إلى أكبر شريحة من المشترين والمستأجرين.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              فريقنا المتخصص في التسويق العقاري يضمن لك تحقيق أفضل عائد على استثماراتك 
              من خلال حملات إعلانية موجهة، تصوير احترافي للعقارات، ونشرها على منصات 
              متعددة محلياً ودولياً لضمان سرعة البيع أو التأجير بأفضل الأسعار.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Marketing;