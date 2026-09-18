import React from 'react';
import { motion } from 'motion/react';

interface FeatureItem {
  icon: string;
  title: string;
}

const features: FeatureItem[] = [
  { icon: '🕌', title: 'الصلوات الخمس' },
  { icon: '📖', title: 'ورد القرآن الكريم' },
  { icon: '🌙', title: 'قيام الليل' },
  { icon: '🤲', title: 'الدعاء' },
  { icon: '☀️', title: 'صلاة الضحى' },
  { icon: '🕋', title: 'الوتر والأذكار' },
  { icon: '🔔', title: 'تذكيرات الصلاة والعبادات' },
  { icon: '📅', title: 'إمكانية مراجعة الأيام السابقة' },
  { icon: '📿', title: 'الاستغفار والتسبيح والتحميد والتكبير والصلاة على النبي ﷺ' },
];

export const About: React.FC = () => {
  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="w-full mt-12 sm:mt-16 pt-8 border-t border-[#E4EAE5]"
      aria-labelledby="about-heading"
    >
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4EAE5] shadow-xs">
        <h2
          id="about-heading"
          className="text-xl sm:text-2xl font-bold text-[#17201A] mb-3"
        >
          عن أهل القرآن
        </h2>
        <p className="text-base sm:text-lg text-[#17201A] font-medium leading-relaxed">
          <span className="font-bold text-[#14532D]">أهل القرآن</span> هو رفيقك اليومي للثبات على الطاعات.
        </p>
        <p className="mt-2 text-sm sm:text-base text-[#66736A] leading-relaxed">
          يساعدك التطبيق على متابعة عباداتك اليومية بطريقة بسيطة وهادئة، مع التركيز على الاستمرار والعودة بدلًا من الشعور بالضغط أو الذنب.
        </p>

        {/* Feature Cards Grid */}
        <div className="mt-6 pt-5 border-t border-[#E4EAE5]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#66736A] uppercase tracking-wider mb-3">
            ما يساعدك التطبيق على متابعته:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {features.map((item, idx) => {
              const isWide = idx === features.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/80 transition-colors hover:border-[#2F7D4A]/40 ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="text-lg shrink-0" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#17201A]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
