"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Images = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto ">
        

        {/* المحتوى: صور على الشمال + نص على اليمين */}
        <div className="flex flex-col  lg:flex-row gap-8 lg:gap-12 max-lg:flex-col-reverse items-center">
          
          {/* الجهة اليمنى - النص */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4`}>
              أكثر من <span className="text-[#7ea9c9]">عقد من التميز</span> في مجال العقار
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نفتخر بتقديم أفضل الخدمات العقارية لعملائنا الكرام. فريقنا المتخصص 
              يعمل على تحقيق أحلامكم العقارية بكل احترافية ومصداقية. سواء كنتم 
              تبحثون عن شراء، بيع، تأجير، أو إدارة أملاك، نحن هنا لخدمتكم.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base mt-4`}>
              ثقتكم هي دافعنا لتقديم الأفضل دائماً.
            </p>
          </motion.div>

          {/* الجهة اليسرى - 3 صور بأطوال مختلفة */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex gap-4 items-center justify-center">
              
              {/* الصورة الأولى - طويلة */}
              <div className="relative w-1/3 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img1.jfif"
                  alt="عقار 1"
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* الصورة الثانية - متوسطة */}
              <div className="relative w-1/3 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/img2.jfif"
                  alt="عقار 2"
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* الصورة الثالثة - قصيرة */}
              <div className="relative w-1/3 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg mt-16">
                <Image
                  src="/img3.jpg"
                  alt="عقار 3"
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Images;