import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 1. Importe suas fotos aqui
import fotoJonas from "@/assets/jonos-logo.png";
import fotoGlobo from "@/assets/globo-sat-logo.png";
import fotoOc from "@/assets/ouro-do-cerrado-logo.png";
import fotoMad from "@/assets/madness-logo.png";
// Exemplo: import fotoAna from "@/assets/foto-ana.png";

const testimonials = [
  { 
    name: 'Marcos', 
    role: 'CEO - Ouro do Cerrado Hotel', 
    text: 'O site ficou sensacional! nossos clientes aumentaram em 40% no primeiro mês de lançamento,sem contar na facilidade na hora do agendamento.', 
    image: fotoOc 
  },
  { 
    name: 'Gabriel Jonas', 
    role: 'Empresário-Barbeiro', 
    text: 'Depois que lancei minha landing-page, minhas vendas aumentaram 30% em um mês!', 
    // 2. Adicione a propriedade image aqui (pode remover initials se não for usar)
    image: fotoJonas 
  },
  { 
    name: 'Globo Sat Arinos', 
    role: 'Empresa - Instalação de Antenas', 
    text: 'A criação do nosso site trouxe muito mais visibilidade para a Globo Sat. Agora nossos clientes encontram nossos planos de internet e TV com facilidade.', 
    // Se não tiver foto para todos, você pode criar uma lógica ou usar uma imagem padrão
    image: fotoGlobo 
  },
  { 
    name: 'Madness Clínica Veterinária', 
    role: 'Clínica Veterinária', 
    text: 'O site da clínica ficou incrível! Nossos clientes adoram a facilidade de agendamento online e a área do cliente. Já vimos um aumento significativo no número de consultas desde o lançamento.', 
    image: fotoMad 
  },
];

export function Testimonials() {
  return (
    <div className="py-24 px-6 select-none">
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
                      
                      {/* 3. AQUI FOI A MUDANÇA: Usamos <img> em vez da <div> com iniciais */}
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="h-10 w-10 rounded-full object-cover border border-primary/20" 
                      />

                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
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