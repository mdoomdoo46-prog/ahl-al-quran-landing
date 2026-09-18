import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <motion.section
      id="cta-section"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="w-full mt-12 sm:mt-16 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="bg-white border border-[#E4EAE5] rounded-2xl sm:rounded-3xl p-7 sm:p-10 shadow-xs">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#17201A]"
        >
          جاهز تبدأ؟
        </h2>
        <p className="mt-2.5 text-base sm:text-lg text-[#66736A] max-w-md mx-auto">
          حمّل أهل القرآن وابدأ بخطوة صغيرة كل يوم.
        </p>

        <div className="mt-6 sm:mt-7 max-w-md mx-auto">
          <a
            id="secondary-download-btn"
            href="/Ahl-al-Quran.apk"
            download="Ahl-al-Quran.apk"
            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg text-white bg-[#14532D] hover:bg-[#0f3f22] active:bg-[#0a2e19] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#14532D]/20 cursor-pointer"
            aria-label="تحميل أهل القرآن APK"
          >
            <ArrowDown className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
            <span>تحميل أهل القرآن APK</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};
