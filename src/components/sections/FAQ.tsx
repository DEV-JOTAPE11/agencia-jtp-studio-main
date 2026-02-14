import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Quanto tempo leva para criar um site?', a: 'O prazo médio é de 4 a 15 dias úteis, dependendo da complexidade do projeto. Landing pages ficam prontas em até 5 dias úteis.' },
  { q: 'Qual o investimento para criar um site?', a: 'Os valores começam a partir de R$ 493 para landing pages. Sites institucionais a partir de R$ 897. Consulte nossos planos para mais detalhes.' },
  { q: 'O site fica otimizado para Google?', a: 'Sim! Todos os nossos sites seguem as melhores práticas de SEO on-page, com meta tags, sitemap, performance otimizada e código limpo.' },
  { q: 'Vocês oferecem garantia?', a: 'Oferecemos 30 dias de garantia após a entrega, cobrindo ajustes e correções sem custo adicional.' },
  { q: 'Como funciona o suporte após a entrega?', a: 'Oferecemos planos de manutenção mensal a partir de R$ 29/mês, incluindo hospedagem, SSL, backups e suporte técnico contínuo.' },
];

export function FAQ() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Dúvidas Sobre Criação de Sites</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Perguntas Frequentes</h2>
          <p className="mt-4 text-muted-foreground">Tire suas dúvidas sobre criação de sites, prazos e investimento.</p>
        </motion.div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-sm font-medium hover:text-primary transition-colors py-5 hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">Pronto para criar seu site?</p>
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground glow-blue hover:glow-blue-strong transition-all hover:scale-105"
          >
            Criar Meu Site Agora
          </a>
        </div>
      </div>
    </div>
  );
}
