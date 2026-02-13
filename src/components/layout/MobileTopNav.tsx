import { useState } from 'react';
import { Menu, Home, Briefcase, LayoutGrid, MessageSquareQuote, FileText, HelpCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';

const navItems = [
  { id: 'inicio', icon: Home, label: 'Início' },
  { id: 'servicos', icon: Briefcase, label: 'Serviços' },
  { id: 'portfolio', icon: LayoutGrid, label: 'Portfólio' },
  { id: 'depoimentos', icon: MessageSquareQuote, label: 'Depoimentos' },
  { id: 'orcamento', icon: FileText, label: 'Orçamento' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ' },
];

export function MobileTopNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex lg:hidden h-16 items-center justify-between border-b border-primary/15 bg-background/80 backdrop-blur-sm px-4">
      <div className="flex items-center gap-2">
        <img src={jtpLogo} alt="JTP Services" className="h-8 w-8 rounded-lg object-cover" style={{ filter: 'drop-shadow(0 0 6px rgba(40,126,215,0.3))' }} />
        <span className="font-semibold text-sm">JTP Services</span>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-xl border-l border-primary/15">
          <nav className="flex flex-col gap-2 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
