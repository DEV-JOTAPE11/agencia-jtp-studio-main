import { lazy, Suspense } from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { SideNav } from '@/components/layout/SideNav';
import { MobileTopNav } from '@/components/layout/MobileTopNav';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Footer } from '@/components/layout/Footer';
import { LazyOnView } from '@/components/LazyOnView';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';

const Portfolio = lazy(() =>
  import('@/components/sections/Portfolio').then((module) => ({
    default: module.Portfolio,
  }))
);
const Testimonials = lazy(() =>
  import('@/components/sections/Testimonials').then((module) => ({
    default: module.Testimonials,
  }))
);
const Budget = lazy(() =>
  import('@/components/sections/Budget').then((module) => ({
    default: module.Budget,
  }))
);
const FAQ = lazy(() =>
  import('@/components/sections/FAQ').then((module) => ({
    default: module.FAQ,
  }))
);

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-background">
        <BackgroundPaths />
      </div>

      {/* Navigation */}
      <SideNav />
      <MobileTopNav />

      {/* Main content */}
      <main className="relative z-10 lg:ml-16 pt-16 lg:pt-0">
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="portfolio">
          <LazyOnView placeholderClassName="min-h-[760px]" rootMargin="1200px 0px">
            <Suspense fallback={null}>
              <Portfolio />
            </Suspense>
          </LazyOnView>
        </section>
        <section id="depoimentos">
          <LazyOnView placeholderClassName="min-h-[720px]" rootMargin="1200px 0px">
            <Suspense fallback={null}>
              <Testimonials />
            </Suspense>
          </LazyOnView>
        </section>
        <section id="orcamento">
          <LazyOnView placeholderClassName="min-h-[700px]" rootMargin="1200px 0px">
            <Suspense fallback={null}>
              <Budget />
            </Suspense>
          </LazyOnView>
        </section>
        <section id="faq">
          <LazyOnView placeholderClassName="min-h-[620px]" rootMargin="1200px 0px">
            <Suspense fallback={null}>
              <FAQ />
            </Suspense>
          </LazyOnView>
        </section>
      </main>

      <div className="relative z-10 lg:ml-16">
        <Footer />
      </div>

      <WhatsAppFab />
    </div>
  );
};

export default Index;
