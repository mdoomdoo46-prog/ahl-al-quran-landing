import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="w-full mt-14 sm:mt-18 pt-8 pb-12 border-t border-[#E4EAE5] text-center"
    >
      <p className="text-base sm:text-lg font-bold text-[#17201A]">
        أهل القرآن
      </p>
      <p className="mt-1.5 text-sm sm:text-base text-[#66736A] font-normal">
        خطوة صغيرة كل يوم، وعودة دائمًا إلى الطريق.
      </p>
    </footer>
  );
};
