import { motion } from 'framer-motion';
import { FileText, Globe, Sparkles, Megaphone, FilePlus, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  { icon: FileText, title: 'Landing Page', desc: 'Página única focada em conversão com design profissional e otimizado para resultados.', price: 'A partir de R$ 493' },
  { icon: Globe, title: 'Site Institucional', desc: 'Seu site profissional pronto em 7 dias com todas as páginas essenciais.', price: 'A partir de R$ 897', badge: 'MAIS VENDIDO' },
  { icon: Sparkles, title: 'Site Premium', desc: 'Solução completa com integrações avançadas, animações e funcionalidades sob medida.', price: 'A partir de R$ 1.997' },
  { icon: Megaphone, title: 'Site + Tráfego Pago', desc: 'Combo: site profissional + gestão de anúncios para maximizar seus resultados.', price: 'Sob consulta' },
  { icon: FilePlus, title: 'Páginas Extras', desc: 'Adicione páginas conforme a necessidade do seu projeto.', price: 'R$ 97 por página' },
  { icon: Shield, title: 'Manutenção Mensal', desc: 'Hospedagem, SSL, backups, atualizações e suporte técnico contínuo.', price: 'A partir de R$ 29/mês' },
];

export function Services() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Criação de Sites</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Sites Profissionais Para Sua Empresa</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Do site institucional à loja virtual. Criamos sites que geram resultados reais.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:glow-blue transition-all hover:-translate-y-0.5"
              style={{ borderColor: undefined }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                {s.badge && <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">{s.badge}</Badge>}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <p className="text-sm font-semibold text-primary">{s.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#orcamento" className="text-sm text-primary hover:text-accent transition-colors font-medium">
            Ver todos os serviços →
          </a>
        </div>
      </div>
    </div>
  );
}
