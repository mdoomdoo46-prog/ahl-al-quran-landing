import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  apkSize?: string | null;
}

export const Hero: React.FC<HeroProps> = ({ apkSize }) => {
  return (
    <header id="hero-section" className="w-full flex flex-col items-center text-center">
      {/* 1. Header Image photo.png */}
      <motion.div
        id="hero-image-container"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full max-w-lg sm:max-w-xl mx-auto overflow-hidden rounded-2xl border border-[#E4EAE5] bg-white shadow-xs"
      >
        <img
          id="hero-image"
          src="/photo.png"
          alt="أهل القرآن"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain rounded-2xl block"
        />
      </motion.div>

      {/* 2. Main Title & Subtitle & Description */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="mt-7 sm:mt-9 max-w-xl mx-auto px-2"
      >
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl font-extrabold text-[#17201A] tracking-tight leading-tight"
        >
          أهل القرآن
        </h1>

        <p
          id="hero-subtitle"
          className="mt-2.5 text-lg sm:text-xl font-semibold text-[#2F7D4A]"
        >
          رفيقك اليومي للثبات على الطاعات
        </p>

        <p
          id="hero-description"
          className="mt-3.5 text-base sm:text-lg text-[#66736A] leading-relaxed font-normal"
        >
          أهل القرآن هو تطبيق إيماني يومي يساعدك على تنظيم عباداتك ومتابعة ما قمت به خلال يومك، من الصلاة والقرآن والأذكار والدعاء إلى السنن وقيام الليل. صُمم ليكون بسيطًا وهادئًا، مع تذكيرات للصلاة والعبادات، ومراجعة سهلة لليوم السابق، بدون نقاط أو منافسة أو ضغط.
        </p>
      </motion.div>

      {/* 3. Prominent Primary Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
        className="mt-7 sm:mt-8 w-full max-w-md mx-auto flex flex-col items-center"
      >
        <a
          id="primary-download-btn"
          href="/Ahl-al-Quran.apk"
          download="Ahl-al-Quran.apk"
          className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg text-white bg-[#14532D] hover:bg-[#0f3f22] active:bg-[#0a2e19] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#14532D]/20 cursor-pointer"
          aria-label="تحميل تطبيق أهل القرآن"
        >
          <ArrowDown className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          <span>تحميل تطبيق أهل القرآن</span>
        </a>

        {/* Small metadata note */}
        <div
          id="download-meta-note"
          className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-[#66736A]"
        >
          <ShieldCheck className="w-4 h-4 text-[#2F7D4A]" aria-hidden="true" />
          <span>Android APK • مجاني</span>
          {apkSize && (
            <>
              <span className="text-slate-300">•</span>
              <span>{apkSize}</span>
            </>
          )}
        </div>
      </motion.div>
    </header>
  );
};
