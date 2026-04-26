"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Contact = () => {
  const whatsappNumber = "+966504112262";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 mt-10"
        >
          <h2 className={`${cairo.className} text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800`}>
            تواصل <span className="text-[#7ea9c9]">معنا</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#7ea9c9] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          <p className={`${cairo.className} text-gray-600 mt-4 text-sm sm:text-base`}>
            نسعد بخدمتك ونتطلع للرد على استفساراتكم
          </p>
        </motion.div>

        {/* المحتوى: معلومات التواصل */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* معلومات الاتصال */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}  // 
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            {/* العنوان */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#7ea9c9]/15 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#7ea9c9]" />
              </div>
              <div>
                <h3 className={`${cairo.className} text-lg font-bold text-gray-800 mb-1`}>
                  العنوان
                </h3>
                <p className={`${cairo.className} text-gray-600 leading-relaxed`}>
                  الإمام فيصل بن تركي بن عبدالله، سابقا، الرياض 41187، المملكة العربية السعودية
                </p>
              </div>
            </div>

            {/* رقم التليفون */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#7ea9c9]/15 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#7ea9c9]" />
              </div>
              <div>
                <h3 className={`${cairo.className} text-lg font-bold text-gray-800 mb-1`}>
                  رقم الهاتف
                </h3>
                <a 
                  href="tel:+966504112262" 
                  className={`${cairo.className} text-gray-600 hover:text-[#7ea9c9] transition-colors duration-300 block`}
                >
                  +966 50 411 2262
                </a>
              </div>
            </div>

            {/* ساعات العمل */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#7ea9c9]/15 p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#7ea9c9]" />
              </div>
              <div>
                <h3 className={`${cairo.className} text-lg font-bold text-gray-800 mb-1`}>
                  ساعات العمل
                </h3>
                <p className={`${cairo.className} text-gray-600`}>
                  السبت - الخميس: 9 صباحاً - 6 مساءً
                </p>
              </div>
            </div>

            {/* زر واتساب */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cairo.className} inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-[#25D366] hover:bg-[#20B859] text-white font-semibold rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto`}
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا عبر واتساب
            </Link>
          </motion.div>

          {/* خريطة - يمكن إضافة خريطة حقيقية لاحقاً */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-80 md:h-full min-h-75">
              {/* خريطة جوجل */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.456!2d46.675!3d24.713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0389d4b7c0d5%3A0xb8c1d2f3e4a5b6c7!2z2YXYtdmK2LHYp9mG2YjYp9iMINin2YTYudin2YbYp9mG!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مكتب المقيبل"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;