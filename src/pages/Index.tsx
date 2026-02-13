import { BackgroundPaths } from '@/components/ui/background-paths';
import { SideNav } from '@/components/layout/SideNav';
import { MobileTopNav } from '@/components/layout/MobileTopNav';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
import { Budget } from '@/components/sections/Budget';
import { FAQ } from '@/components/sections/FAQ';

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
          <Portfolio />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="videos">
          <VideoTestimonials />
        </section>
        <section id="orcamento">
          <Budget />
        </section>
        <section id="faq">
          <FAQ />
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
