import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { InstallGuide } from './components/InstallGuide';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  const [apkSize, setApkSize] = useState<string | null>(null);

  useEffect(() => {
    // Attempt to determine APK size safely if the file exists on the server
    fetch('/Ahl-al-Quran.apk', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) return;
        const length = res.headers.get('content-length');
        if (length) {
          const bytes = parseInt(length, 10);
          // Only show size when it's a real release APK (> 1MB)
          if (!isNaN(bytes) && bytes > 1024 * 1024) {
            const mb = (bytes / (1024 * 1024)).toFixed(1);
            setApkSize(`${mb} ميجابايت`);
          }
        }
      })
      .catch(() => {
        // Safe fallback - keep apkSize null
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#17201A] flex flex-col justify-between overflow-x-hidden">
      <main className="w-full max-w-[840px] mx-auto px-4 sm:px-6 pt-6 sm:pt-12 pb-4">
        {/* 1. Hero Section */}
        <Hero apkSize={apkSize} />

        {/* 2. About Ahl Al-Quran Section */}
        <About />

        {/* 3. Installation Guide Section */}
        <InstallGuide />

        {/* 4. Final CTA Download Section */}
        <FinalCta />

        {/* 5. Footer */}
        <Footer />
      </main>
    </div>
  );
}
