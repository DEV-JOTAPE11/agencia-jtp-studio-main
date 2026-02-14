import { Instagram, Star } from 'lucide-react';
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={jtpLogo} alt="JTP Services" className="h-8 w-8 rounded-lg object-cover" style={{ filter: 'drop-shadow(0 0 6px rgba(40,126,215,0.3))' }} />
          <div>
            <span className="text-sm font-medium">JTP Services — Criação de Sites</span>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
              ))}
              <span className="text-[10px] text-muted-foreground ml-1">Google Reviews</span>
            </div>
          </div>
        </div>

        <a href="https://www.instagram.com/jtp.services/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="h-5 w-5" />
        </a>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>© 2026 JTP Services</span>
          <a href="/politica-de-privacidade" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="/termos-de-uso" className="hover:text-primary transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
}

