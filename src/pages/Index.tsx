import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LogosMarquee } from '@/components/LogosMarquee';
import { WhatWeDo } from '@/components/WhatWeDo';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Portfolio } from '@/components/Portfolio';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
const Index = () => {
  return <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <ProcessSteps />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>;
};
export default Index;