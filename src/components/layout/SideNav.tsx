import { useActiveSection } from '@/hooks/useActiveSection';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Home, Briefcase, LayoutGrid, MessageSquareQuote, FileText, HelpCircle } from 'lucide-react';
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';

const navItems = [
  { id: 'inicio', icon: Home, label: 'Início' },
  { id: 'servicos', icon: Briefcase, label: 'Serviços' },
  { id: 'portfolio', icon: LayoutGrid, label: 'Portfólio' },
  { id: 'depoimentos', icon: MessageSquareQuote, label: 'Depoimentos' },
  { id: 'orcamento', icon: FileText, label: 'Orçamento' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ' },
];

export function SideNav() {
  const active = useActiveSection();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 top-0 z-40 hidden lg:flex h-screen w-16 flex-col items-center border-r border-primary/15 bg-background/80 backdrop-blur-sm py-6 gap-1">
      <img src={jtpLogo} alt="JTP Services" className="h-10 w-10 rounded-lg mb-8 object-cover" style={{ filter: 'drop-shadow(0 0 6px rgba(40,126,215,0.3))' }} />
      {navItems.map((item) => (
        <Tooltip key={item.id}>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollTo(item.id)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                active === item.id
                  ? 'bg-primary/15 text-primary glow-blue'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`}
              aria-label={item.label}
              style={active === item.id ? { border: '1px solid rgba(40,126,215,0.4)' } : undefined}
            >
              <item.icon className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">{item.label}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
}
