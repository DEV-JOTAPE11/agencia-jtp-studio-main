import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const videos = [
  { name: 'João Pedro', business: 'Clínica Estética', desc: 'Depoimento de cliente satisfeito' },
  { name: 'Fernanda Lima', business: 'E-commerce Fashion', desc: 'Depoimento de cliente satisfeito' },
  { name: 'Ricardo Santos', business: 'Escritório Advocacia', desc: 'Depoimento de cliente satisfeito' },
];

export function VideoTestimonials() {
  const [openVideo, setOpenVideo] = useState<number | null>(null);

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Resultados em Vídeo</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Veja depoimentos reais de clientes satisfeitos com nosso trabalho.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center aspect-[3/4] justify-between cursor-pointer group"
              onClick={() => setOpenVideo(i)}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded bg-primary/20" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-muted-foreground px-4">Clique aqui e saiba o que nossos clientes dizem sobre a JTP</p>
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:glow-blue transition-all">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm">{v.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{v.desc}</p>
                <span className="text-xs text-primary mt-2 inline-flex items-center gap-1">
                  Ver projeto <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={openVideo !== null} onOpenChange={() => setOpenVideo(null)}>
        <DialogContent className="max-w-2xl bg-background border-primary/20">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Vídeo do depoimento — {openVideo !== null ? videos[openVideo].name : ''}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
