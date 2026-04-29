import { BackgroundPaths } from '@/components/ui/background-paths';
import { SideNav } from '@/components/layout/SideNav';
import { MobileTopNav } from '@/components/layout/MobileTopNav';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Footer } from '@/components/layout/Footer';
import { BriefingForm } from '@/components/sections/BriefingForm';

const FormularioPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed animated background - same as Index.tsx */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-background">
        <BackgroundPaths />
      </div>

      {/* Navigation */}
      <SideNav />
      <MobileTopNav />

      {/* Main content */}
      <main className="relative z-10 lg:ml-16 pt-16 lg:pt-0 min-h-screen flex flex-col">
        <section id="formulario" className="flex-grow">
          <BriefingForm />
        </section>
      </main>

      <div className="relative z-10 lg:ml-16">
        <Footer />
      </div>

      <WhatsAppFab />
    </div>
  );
};

export default FormularioPage;
