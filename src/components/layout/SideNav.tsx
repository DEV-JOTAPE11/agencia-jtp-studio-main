import { useActiveSection } from '@/hooks/useActiveSection';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Home, Briefcase, LayoutGrid, MessageSquareQuote, FileText, HelpCircle, ClipboardList } from 'lucide-react';
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';
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

export function SideNav() {
  const active = useActiveSection();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.path !== '/') {
      navigate(item.path);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-40 hidden lg:flex h-screen w-16 flex-col items-center border-r border-primary/15 bg-background/80 backdrop-blur-sm py-6 gap-1">
      <img src={jtpLogo} alt="JTP Services" className="h-10 w-10 rounded-lg mb-8 object-cover" style={{ filter: 'drop-shadow(0 0 6px rgba(40,126,215,0.3))' }} />
      {navItems.map((item) => {
        const isActive = item.path === '/' ? active === item.id && location.pathname === '/' : location.pathname === item.path;
        return (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleNavigation(item)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary/15 text-primary glow-blue'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
                aria-label={item.label}
                style={isActive ? { border: '1px solid rgba(40,126,215,0.4)' } : undefined}
              >
                <item.icon className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
