import { motion } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import jtpWhite from '@/assets/jtp-white.png';

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {/* Hero Logo */}
        <motion.img
          src={jtpWhite}
          alt="JTP Services"
          className="mx-auto mb-6 h-20 sm:h-24 md:h-28 w-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ filter: 'drop-shadow(0 0 12px rgba(40,126,215,0.3))' }}
        />

        {/* Social Proof Badges */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md" style={{ background: 'rgba(7,20,39,0.7)', border: '1px solid rgba(40,126,215,0.25)' }}>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0/5</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md" style={{ background: 'rgba(7,20,39,0.7)', border: '1px solid rgba(40,126,215,0.25)' }}>
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-foreground">Agência de Sites</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Transformamos ideias em{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #b2fefa 0%, #004b8e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            sites que vendem
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Agência especializada em criação de sites profissionais, landing pages e lojas virtuais que geram resultados reais.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground glow-blue transition-all hover:glow-blue-strong hover:scale-105"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary/5"
            style={{ border: '1px solid rgba(40,126,215,0.25)' }}
          >
            Ver Serviços
          </a>
        </div>

        {/* Stats Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 sm:gap-10"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">R$493</p>
            <p className="text-xs text-muted-foreground mt-1">A partir de</p>
          </div>
          <div className="h-10 w-px bg-primary/20" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">7 dias</p>
            <p className="text-xs text-muted-foreground mt-1">Entrega</p>
          </div>
          <div className="h-10 w-px bg-primary/20" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">10+</p>
            <p className="text-xs text-muted-foreground mt-1">Sites Criados</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </div>
  );
}
