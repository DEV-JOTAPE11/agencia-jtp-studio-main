import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Footer } from '@/components/layout/Footer';
import jtpLogo from '@/assets/logo-jtp-profissional.jpeg';

// Dados dos projetos
const allProjects = [
  {
    id: 1,
    title: 'Clínica Vitale',
    category: 'Landing Page',
    subCategory: 'Saúde',
    desc: 'Landing page focada em conversão para clínica de estética com design premium.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    badges: ['Destaque', 'Alta Conversão'],
    link: '#'
  },
  {
    id: 2,
    title: 'TechStore Pro',
    category: 'E-commerce',
    subCategory: 'Tecnologia',
    desc: 'Loja virtual completa com integração de pagamentos e gestão de estoque.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    badges: ['Premium', 'Gestão Total'],
    link: '#'
  },
  {
    id: 3,
    title: 'Advocacia Martins',
    category: 'Institucional',
    subCategory: 'Advocacia',
    desc: 'Site profissional com agendamento online e área do cliente restrita.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    badges: ['Case de Sucesso'],
    link: '#'
  },
  {
    id: 4,
    title: 'Barbearia Viking',
    category: 'Landing Page',
    subCategory: 'Beleza',
    desc: 'Página de captura para agendamentos com integração de calendário.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b7f304?w=800&h=500&fit=crop',
    badges: ['Agenda Online'],
    link: '#'
  },
  {
    id: 5,
    title: 'Ouro do Cerrado',
    category: 'Institucional',
    subCategory: 'Hotelaria',
    desc: 'Site para hotel com sistema de reservas e galeria de quartos.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    badges: ['Reservas', 'Multilíngue'],
    link: '#'
  },
  {
    id: 6,
    title: 'Burger House',
    category: 'Landing Page',
    subCategory: 'Alimentação',
    desc: 'Cardápio digital interativo e sistema de pedidos via WhatsApp.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=500&fit=crop',
    badges: ['Delivery', 'QR Code'],
    link: '#'
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

      {/* Conteúdo Principal com Espaçamento Mobile Ajustado */}
      {/* Alterado pt-32 para pt-40 no mobile para dar mais respiro abaixo do header fixo */}
      <main className="relative z-10 pt-40 md:pt-36 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex-grow">
        
        {/* Seção de Título Estilo Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Margem top extra no mobile (mt-4) para garantir separação visual */}
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
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>
                R$ 493
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                A partir de
              </p>
            </div>
            
            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            
            <div className="text-center group">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>
                7 dias
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                Entrega Rápida
              </p>
            </div>

            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            
            <div className="text-center group">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={gradientStyle}>
                10+
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                Sites Criados
              </p>
            </div>
          </motion.div>
        </div>

        {/* Filtros com Contadores */}
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
                  isActive 
                    ? 'bg-background/20 text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Grid de Projetos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                  
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {project.badges.map(b => (
                      <Badge key={b} className="bg-primary/90 text-primary-foreground text-[10px] backdrop-blur-md shadow-lg border-0">
                        {b}
                      </Badge>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <a href={project.link} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
                      Ver Projeto <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-primary">{project.category}</span>
                      <span className="text-[10px] text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{project.subCategory}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{project.desc}</p>
                  
                  <div className="md:hidden mt-auto pt-4 border-t border-primary/10">
                    <a href={project.link} className="flex items-center justify-center w-full gap-2 rounded-lg bg-primary/10 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                      Visitar Site <ExternalLink className="h-4 w-4" />
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