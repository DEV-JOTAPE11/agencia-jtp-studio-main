import { useState } from 'react';
import { Menu, Home, Briefcase, LayoutGrid, MessageSquareQuote, FileText, HelpCircle, ClipboardList } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'inicio', icon: Home, label: 'Início', path: '/' },
  { id: 'servicos', icon: Briefcase, label: 'Serviços', path: '/' },
  { id: 'portfolio', icon: LayoutGrid, label: 'Portfólio', path: '/' },
  { id: 'depoimentos', icon: MessageSquareQuote, label: 'Depoimentos', path: '/' },
  { id: 'orcamento', icon: FileText, label: 'Orçamento', path: '/' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ', path: '/' },
  { id: 'formulario', icon: ClipboardList, label: 'Formulário', path: '/formulario' },
];

export function MobileTopNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: typeof navItems[0]) => {
    setOpen(false);
    
    if (item.path !== '/') {
      navigate(item.path);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex lg:hidden h-16 items-center justify-between border-b border-primary/15 bg-background/80 backdrop-blur-sm px-4">
      <div className="flex items-center gap-2" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src="/images/brand/logo-jtp-80.webp" alt="JTP Services" width={80} height={80} decoding="async" className="h-8 w-8 rounded-lg object-cover" style={{ filter: 'drop-shadow(0 0 6px rgba(40,126,215,0.3))' }} />
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
            {navItems.map((item) => {
              const isActive = item.path === '/' ? location.pathname === '/' : location.pathname === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive ? 'bg-primary/10 text-foreground glow-blue' : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
