"use client";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* Content */}
      <div
        dir="rtl"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
       
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${cairo.className} text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-relaxed`}
          >
            مكتب <span className="text-[#7ea9c9]">المقيبل</span> للعقارات
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className={`${cairo.className} mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-loose flex flex-col items-center`}
          >
            <p>
              نوفّر لك في مكتب المقيبل للعقارات خدمات متكاملة في بيع وشراء
              وتأجير العقارات، بالإضافة إلى إدارة الأملاك باحترافية عالية.
            </p>

            {/* Button */}
            <motion.a
              href="https://wa.me/966504112262"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${cairo.className} inline-block mt-6 px-6 py-3 rounded-xl bg-[#7ea9c9] text-white font-semibold hover:bg-[#a8c9e2] transition duration-300 shadow-md`}
            >
              تواصل معنا عبر واتساب
            </motion.a>
          </motion.div>
        </div>
    </section>
  );
}

export default HeroSection;