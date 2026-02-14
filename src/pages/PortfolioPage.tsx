import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Footer } from '@/components/layout/Footer';

// Importação das imagens e logos
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';
import capaBarber from '@/assets/landing-page-barber-start.png';
import capaVet from '@/assets/capa-vet.png';
import capaOc from '@/assets/capa-oc.png';
import capaPatins from '@/assets/landing-page-patins.png';
import capaGlobo from '@/assets/capa-globo-sat-arinos.png';
import capaJustly from '@/assets/justly-capa.png';

// Dados dos projetos com Imagens Reais e Links Específicos
const allProjects = [
  {
    id: 1,
    title: 'Barber Start',
    category: 'Landing Page',
    subCategory: 'Marketing Digital',
    desc: 'Landing page moderna com alta conversão e design dark purple theme.',
    image: capaBarber, // Imagem importada
    badges: ['Alta Conversão', 'Design Premium'],
    link: 'https://projeto-landing-page-jonas.vercel.app/' // Substitua pelo link real
  },
  {
    id: 2,
    title: 'Ouro do Cerrado',
    category: 'Institucional',
    subCategory: 'Hotelaria',
    desc: 'Site institucional completo para facilitar reservas e divulgação do hotel.',
    image: capaOc, // Imagem importada
    badges: ['Sistema de Reservas', 'SEO'],
    link: 'https://www.hotelourodocerrado.com.br' // Substitua pelo link real
  },
  {
    id: 3,
    title: 'Clínica Veterinária',
    category: 'Institucional',
    subCategory: 'Saúde',
    desc: 'Site premium com objetivo de captar clientes e mostrar serviços da clínica.',
    image: capaVet, // Imagem importada
    badges: ['Captura de Leads', 'Clean Design'],
    link: 'https://dev-jotape11.github.io/medneeds-fer/' // Substitua pelo link real
  },
  {
    id: 4,
    title: 'Globo Sat Arinos',
    category: 'Institucional',
    subCategory: 'Telecom',
    desc: 'Portal para provedor de internet e TV com área de cobertura e planos.',
    image: capaGlobo, // Imagem importada
    badges: ['Velocidade', 'Institucional'],
    link: 'https://www.globosatarinos.com.br' // Substitua pelo link real
  },
  {
    id: 5,
    title: 'Lp Patins',
    category: 'Landing Page',
    subCategory: 'Esportes',
    desc: 'Landing page moderna e impactante para marca de patins.',
    image: capaPatins, // Imagem importada
    badges: ['Landing Page', 'Radical'],
    link: 'https://dev-jotape11.github.io/lp-de-patins-animada-/' // Substitua pelo link real
  },
  {
    id: 6,
    title: 'Justly Advogados',
    category: 'Institucional',
    subCategory: 'Jurídico',
    desc: 'Site sóbrio e elegante transmitindo autoridade e confiança jurídica.',
    image: capaJustly, // Imagem importada
    badges: ['Corporativo', 'Sério'],
    link: 'https://dev-jotape11.github.io/justly/' // Substitua pelo link real
  },
];

const categories = ['Todos', 'Landing Page', 'Institucional', 'E-commerce'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Todos');

  // Lógica de filtragem
  const filteredProjects = allProjects.filter(project => 
    filter === 'Todos' ? true : project.category === filter
  );

  // Função para contar
  const getCount = (cat: string) => {
    if (cat === 'Todos') return allProjects.length;
    return allProjects.filter(p => p.category === cat).length;
  };

  // Estilo Gradiente
  const gradientStyle = {
    background: "linear-gradient(90deg, #b2fefa 0%, #004b8e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      {/* Background Animado Fixo */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundPaths />
      </div>

      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-primary/15 bg-background/80 backdrop-blur-xl px-4 md:px-8">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            title="Voltar para o início"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-2">
            <img 
              src={jtpLogo} 
              alt="JTP Services" 
              className="h-8 w-8 rounded-lg object-cover shadow-lg shadow-blue-500/20" 
            />
            <span className="font-semibold text-sm tracking-wide">Portfólio Completo</span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 pt-40 md:pt-36 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex-grow">
        
        {/* Seção de Título */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 mt-4 md:mt-0">
              Galeria de <span style={gradientStyle}>Sucesso</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore nossos projetos entregues. Cada site é desenvolvido estrategicamente para gerar resultados e fortalecer a marca dos nossos clientes.
            </p>
          </motion.div>

          {/* Seção de Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 border-y border-primary/10 py-10"
          >
            <div className="text-center group">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>R$ 493</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">A partir de</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="text-center group">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>7 dias</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">Entrega Rápida</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="text-center group">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>10+</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">Sites Criados</p>
            </div>
          </motion.div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count = getCount(cat);
            return (
              <Button
                key={cat}
                variant={isActive ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 h-10 transition-all duration-300 flex items-center gap-2 border ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105 border-primary' 
                    : 'bg-background/40 backdrop-blur-sm hover:bg-primary/10 hover:text-primary border-primary/20'
                }`}
              >
                {cat}
                <span className={`flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-bold rounded-full transition-colors ${
                  isActive ? 'bg-background/20 text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  {count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Grid de Projetos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col h-full bg-zinc-900/40 border-white/5"
              >
                {/* Imagem do Card */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
                    {project.badges.map(b => (
                      <Badge key={b} className="bg-primary/90 text-primary-foreground text-[10px] backdrop-blur-md shadow-lg border-0">
                        {b}
                      </Badge>
                    ))}
                  </div>

                  {/* Overlay Hover com Botão (Desktop) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px] z-10">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
                    >
                      <Globe className="h-4 w-4" />
                      Visitar Site
                    </a>
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="p-5 flex flex-col flex-grow relative z-20">
                  <div className="mb-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-primary">{project.category}</span>
                      <span className="text-[10px] text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{project.subCategory}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{project.desc}</p>
                  
                  {/* Botão Visível apenas em Mobile */}
                  <div className="md:hidden mt-auto pt-4 border-t border-primary/10">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                      Ver Projeto <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-primary/5 rounded-2xl border border-primary/10 mt-6">
            <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria no momento.</p>
            <Button variant="link" onClick={() => setFilter('Todos')} className="mt-2 text-primary">
              Ver todos os projetos
            </Button>
          </div>
        )}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <WhatsAppFab />
    </div>
  );
}