import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export const InstallGuide: React.FC = () => {
  return (
    <section
      id="install-guide-section"
      className="w-full mt-12 sm:mt-16"
      aria-labelledby="install-guide-heading"
    >
      <div className="text-center mb-8">
        <h2
          id="install-guide-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#17201A]"
        >
          طريقة تثبيت التطبيق
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#66736A]">
          خطوات بسيطة ومباشرة لمساعدتك في تثبيت التطبيق على هاتفك
        </p>
      </div>

      <div className="space-y-6">
        {/* Card 1 */}
        <motion.article
          id="card-blocked"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4EAE5] shadow-xs"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#17201A] mb-4">
            إذا ظهرت رسالة &quot;التثبيت محظور&quot;
          </h3>

          <ol className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                افتح ملف APK بعد تنزيله.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                إذا ظهرت رسالة أمان، اضغط على <strong className="text-[#14532D]">الإعدادات</strong>.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                فعّل <strong className="text-[#14532D]">السماح من هذا المصدر</strong> للمتصفح الذي استخدمته لتحميل الملف.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                ارجع إلى ملف APK واضغط <strong className="text-[#14532D]">تثبيت</strong>.
              </span>
            </li>
          </ol>

          <div className="mt-4 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5] flex items-center gap-2 text-xs sm:text-sm text-[#66736A]">
            <Info className="w-4 h-4 text-[#2F7D4A] shrink-0" aria-hidden="true" />
            <p>
              قد تختلف أسماء الخيارات ومكانها قليلًا حسب نوع الهاتف وإصدار Android.
            </p>
          </div>
        </motion.article>

        {/* Card 2 */}
        <motion.article
          id="card-not-installed"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4EAE5] shadow-xs"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#17201A]">
              إذا ظهرت رسالة &quot;App not installed&quot;
            </h3>
          </div>

          <ol className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                تأكد من وجود مساحة كافية في الهاتف.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                إذا كان لديك إصدار قديم من التطبيق، احذفه ثم حاول التثبيت مرة أخرى.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                أعد تنزيل ملف APK إذا كان التحميل غير مكتمل.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                تأكد من توافق إصدار Android مع التطبيق.
              </span>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAF8] border border-[#E4EAE5]/70">
              <span className="w-6 h-6 rounded-md bg-[#2F7D4A]/10 text-[#14532D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                5
              </span>
              <span className="text-sm sm:text-base text-[#17201A]">
                حاول التثبيت مرة أخرى.
              </span>
            </li>
          </ol>
        </motion.article>
      </div>
    </section>
  );
};
