import { motion } from 'framer-motion';
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

// 1. Importe suas fotos aqui
import fotoJonas from "@/assets/jonos-logo.png";
import fotoGlobo from "@/assets/globo-sat-logo.png";
import fotoOc from "@/assets/ouro-do-cerrado-logo.png";
import fotoMad from "@/assets/madness-logo.png";

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
    image: fotoJonas 
  },
  { 
    name: 'Globo Sat Arinos', 
    role: 'Empresa - Instalação de Antenas', 
    text: 'A criação do nosso site trouxe muito mais visibilidade para a Globo Sat. Agora nossos clientes encontram nossos planos de internet e TV com facilidade.', 
    image: fotoGlobo 
  },
  { 
    name: 'Madness Clínica Veterinária', 
    role: 'Clínica Veterinária', 
    text: 'O site da clínica ficou incrível! Nossos clientes adoram a facilidade de agendamento online e a área do cliente. Já vimos um aumento significativo no número de consultas desde o lançamento.', 
    image: fotoMad 
  },
];

// Reordering the 4 items for different columns so they look dynamic and continuous
const firstColumn = [testimonials[0], testimonials[1], testimonials[2], testimonials[3]];
const secondColumn = [testimonials[2], testimonials[3], testimonials[0], testimonials[1]];
const thirdColumn = [testimonials[1], testimonials[2], testimonials[3], testimonials[0]];

export function Testimonials() {
  return (
    <section className="py-24 px-6 select-none relative overflow-hidden">
      <div className="container z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Provas Sociais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-muted-foreground">
            Avaliações reais — Nota 5.0 ★
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </div>
    </section>
  );
}