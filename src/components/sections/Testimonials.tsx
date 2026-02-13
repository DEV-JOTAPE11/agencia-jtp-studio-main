import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: 'Carlos Silva', role: 'Empresário', text: 'Excelente trabalho! O site ficou incrível e já estamos recebendo muito mais contatos. Recomendo demais a JTP Services.', initials: 'CS' },
  { name: 'Ana Rodrigues', role: 'Local Guide Google', text: 'Profissionalismo e agilidade. Entregaram antes do prazo e superaram todas as expectativas. Nota 10!', initials: 'AR' },
  { name: 'Marcos Oliveira', role: 'CEO - Tech Solutions', text: 'Investimento que valeu cada centavo. Nosso faturamento aumentou 40% após o novo site. Parceria de longo prazo.', initials: 'MO' },
  // Dupliquei os dados apenas para demonstrar o efeito de loop/carrossel se houver poucos itens, 
  // você pode remover ou adicionar novos depoimentos reais aqui.
  { name: 'Carlos Silva', role: 'Empresário', text: 'Excelente trabalho! O site ficou incrível e já estamos recebendo muito mais contatos. Recomendo demais a JTP Services.', initials: 'CS' },
];

export function Testimonials() {
  return (
    <div className="py-24 px-6 select-none"> {/* select-none ajuda na experiência de arrastar */}
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Provas Sociais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">O que nossos clientes dizem</h2>
          <p className="mt-4 text-muted-foreground">Avaliações reais — Nota 5.0 ★</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={`${t.name}-${i}`} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="glass-card p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground flex-1 mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Setas de navegação customizadas */}
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 xl:-left-12 bg-background/20 hover:bg-background/40 border-primary/20 text-primary backdrop-blur-sm" />
              <CarouselNext className="right-0 xl:-right-12 bg-background/20 hover:bg-background/40 border-primary/20 text-primary backdrop-blur-sm" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}