"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const About = () => {
  return (
    <section className=" h-screen py-12  sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto mt-10">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className={`${cairo.className} text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800`}>
            من <span className="text-[#7ea9c9]">نحن</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#7ea9c9] mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </motion.div>

        {/* محتوى الصور المتعددة + النبذة */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* قسم الصور */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-70 sm:w-90 md:w-105 aspect-square">
              {/* الخلفية */}
              <div className="absolute top-0 right-0 w-[40%] aspect-square 
                              rounded-2xl overflow-hidden shadow-lg rotate-6">
                <Image
                  src="/about.png"
                  alt="عقار"
                  fill
                  priority
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 15vw"
                  className="object-cover"
                />
              </div>

              {/* الوسط */}
              <div className="absolute bottom-0 -left-9 w-[55%] aspect-square 
                              rounded-2xl overflow-hidden shadow-lg -rotate-12">
                <Image
                  src="/about3.jpg"
                  alt="مكتب عقاري"
                  fill
                  priority
                  sizes="(max-width: 640px) 35vw, (max-width: 768px) 30vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* الرئيسية */}
              <div className="absolute inset-0 m-auto w-[70%] aspect-square 
                              rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about2.jpg"
                  alt="شركة المقيبل العقارية"
                  fill
                  priority
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 35vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* النبذة */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-3 sm:space-y-4 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              شركة <span className="text-[#7ea9c9]">المقيبل</span> العقارية
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نقدم خدمات عقارية متكاملة تشمل التسويق العقاري، إدارة الممتلكات، 
              التأجير، والبيع والشراء. نسعى لتحقيق أفضل النتائج لعملائنا من خلال 
              فريق محترف وخبرة طويلة في السوق العقاري السعودي.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              نضع مصداقيتنا والتزامنا في مقدمة أولوياتنا، لضمان تجربة عقارية سلسة وموثوقة 
              لعملائنا الكرام.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;