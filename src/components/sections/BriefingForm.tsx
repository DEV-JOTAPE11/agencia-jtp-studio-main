import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const WHATSAPP_NUMBER = '553899743350';

const siteStatusOptions = [
  { id: 'nao', label: 'Não, estou começando agora' },
  { id: 'sim_refazer', label: 'Sim, mas quero refazer' },
  { id: 'sim_manter', label: 'Sim, quero apenas melhorias' },
];

const siteTypeOptions = [
  { id: 'landing', label: 'Landing Page' },
  { id: 'institucional', label: 'Site Institucional' },
  { id: 'loja', label: 'Loja Virtual (E-commerce)' },
  { id: 'blog', label: 'Blog / Portal' },
  { id: 'outro', label: 'Outro' },
];

const deadlineOptions = [
  { id: 'urgente', label: 'O mais rápido possível' },
  { id: '1_mes', label: 'Em até 1 mês' },
  { id: '1_3_meses', label: 'Entre 1 a 3 meses' },
  { id: 'pesquisando', label: 'Só estou pesquisando' },
];

const budgetOptions = [
  { id: 'ate_2k', label: 'Até R$ 2.000' },
  { id: '2k_5k', label: 'De R$ 2.000 a R$ 5.000' },
  { id: '5k_10k', label: 'De R$ 5.000 a R$ 10.000' },
  { id: 'mais_10k', label: 'Acima de R$ 10.000' },
];

const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export function BriefingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [siteStatus, setSiteStatus] = useState<string | null>(null);
  const [siteType, setSiteType] = useState<string | null>(null);
  const [objective, setObjective] = useState('');
  const [deadline, setDeadline] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name || !phone || !company || !siteStatus || !siteType || !objective || !deadline || !budget) {
      alert('Por favor, preencha todos os campos do formulário para continuarmos.');
      return;
    }

    const getLabel = (options: any[], id: string | null) => options.find(o => o.id === id)?.label || '';

    const text = [
      `*Novo Briefing/Orçamento - JTP Services*`,
      ``,
      `*1. Dados de Contato*`,
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      `Empresa/Negócio: ${company}`,
      ``,
      `*2. Sobre o Projeto*`,
      `Já tem site?: ${getLabel(siteStatusOptions, siteStatus)}`,
      `Tipo de site: ${getLabel(siteTypeOptions, siteType)}`,
      `Objetivo principal: ${objective}`,
      ``,
      `*3. Prazos e Investimento*`,
      `Quando quer começar?: ${getLabel(deadlineOptions, deadline)}`,
      `Faixa de investimento: ${getLabel(budgetOptions, budget)}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const renderOptions = (
    options: { id: string; label: string }[],
    selected: string | null,
    onSelect: (id: string) => void
  ) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`relative rounded-xl p-4 text-left transition-all ${
            selected === opt.id
              ? 'bg-primary/10 glow-blue'
              : 'hover:bg-primary/5'
          }`}
          style={{ border: `1px solid rgba(40,126,215,${selected === opt.id ? '0.5' : '0.15'})` }}
        >
          {selected === opt.id && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
          )}
          <p className="font-semibold text-sm pr-6">{opt.label}</p>
        </button>
      ))}
    </div>
  );

  return (
    <div className="py-24 px-6 relative z-10">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Inicie seu{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #b2fefa 0%, #004b8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projeto
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo para nos contar sobre a sua ideia. Quanto mais detalhes, melhor poderemos te ajudar.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Sessão 1: Dados Pessoais */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary text-xs">1</span>
              Seus Dados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input id="nome" value={name} onChange={e => setName(e.target.value)} className="bg-background/50 border-primary/15 h-12" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input id="whatsapp" value={phone} onChange={e => setPhone(formatPhone(e.target.value))} className="bg-background/50 border-primary/15 h-12" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="empresa">Empresa ou Negócio *</Label>
                <Input id="empresa" value={company} onChange={e => setCompany(e.target.value)} className="bg-background/50 border-primary/15 h-12" placeholder="Nome da sua empresa" />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-primary/10" />

          {/* Sessão 2: Sobre o Projeto */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary text-xs">2</span>
              Sobre o Projeto
            </h3>
            
            <div className="space-y-8">
              <div>
                <Label className="text-base">Você já tem site? *</Label>
                {renderOptions(siteStatusOptions, siteStatus, setSiteStatus)}
              </div>

              <div>
                <Label className="text-base">Que tipo de site você precisa? *</Label>
                {renderOptions(siteTypeOptions, siteType, setSiteType)}
              </div>

              <div className="space-y-2">
                <Label htmlFor="objetivo" className="text-base">Qual é o objetivo principal do site? *</Label>
                <p className="text-xs text-muted-foreground">Ex: Vender produtos, captar leads, mostrar portfólio...</p>
                <Textarea 
                  id="objetivo" 
                  value={objective} 
                  onChange={e => setObjective(e.target.value)} 
                  className="bg-background/50 border-primary/15 min-h-[120px] resize-y mt-2" 
                  placeholder="Descreva o que você espera alcançar com o novo site..."
                />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-primary/10" />

          {/* Sessão 3: Prazos e Investimento */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary text-xs">3</span>
              Alinhamento
            </h3>
            
            <div className="space-y-8">
              <div>
                <Label className="text-base">Quando quer começar? *</Label>
                {renderOptions(deadlineOptions, deadline, setDeadline)}
              </div>

              <div>
                <Label className="text-base">Faixa de investimento (Orçamento previsto) *</Label>
                <p className="text-xs text-muted-foreground mt-1 mb-2">Isso nos ajuda a sugerir a melhor solução para a sua realidade atual.</p>
                {renderOptions(budgetOptions, budget, setBudget)}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-5 text-base font-semibold text-primary-foreground glow-blue hover:glow-blue-strong transition-all hover:scale-[1.02] mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar Briefing para Orçamento
          </button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Ao enviar, você será redirecionado para o nosso WhatsApp.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
