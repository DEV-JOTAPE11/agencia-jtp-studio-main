import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Clínica Vitale',
    category: 'Landing Page • Saúde',
    desc: 'Landing page focada em conversão para clínica de estética com design premium.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    badges: ['Destaque'],
  },
  {
    title: 'TechStore Pro',
    category: 'E-commerce • Tecnologia',
    desc: 'Loja virtual completa com integração de pagamentos e gestão de estoque.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    badges: ['Premium'],
  },
  {
    title: 'Advocacia Martins',
    category: 'Site Institucional • Advocacia',
    desc: 'Site profissional com agendamento online e área do cliente.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    badges: ['Case de Sucesso'],
  },
];

export function Portfolio() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Nosso Portfólio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Sites que Criamos</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Alguns dos projetos que desenvolvemos para empresas de todo o Brasil.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.badges.map(b => (
                    <Badge key={b} className="bg-primary/80 text-primary-foreground text-[10px] backdrop-blur-sm">{b}</Badge>
                  ))}
                </div>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-blue transition-transform hover:scale-105">
                    Visitar <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-primary mb-2">{p.category}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-sm text-primary hover:text-accent transition-colors font-medium">Ver portfólio completo →</a>
        </div>
      </div>
    </div>
  );
}
