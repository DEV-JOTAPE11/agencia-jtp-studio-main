import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, Plus } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const WHATSAPP_NUMBER = '38998304003';

const plans = [
  { id: 'landing' as const, name: 'Landing Page (Página única)', pages: '1 página', price: 493, popular: false },
  { id: 'institucional' as const, name: 'Site Institucional', pages: '6 páginas', price: 897, popular: true },
  { id: 'premium' as const, name: 'Site Premium', pages: '6+ páginas', price: 1997, popular: false },
];

type PlanId = typeof plans[number]['id'];

const formatPrice = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export function Budget() {
  const [plan, setPlan] = useState<PlanId | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [extraPages, setExtraPages] = useState(false);
  const [extraQty, setExtraQty] = useState(1);
  const [blog, setBlog] = useState(false);
  const [seo, setSeo] = useState(false);
  const [maintenance, setMaintenance] = useState(true);

  const selectedPlan = plans.find(p => p.id === plan);

  const total = useMemo(() => {
    let sum = selectedPlan?.price || 0;
    if (extraPages) sum += 97 * extraQty; // Cálculo correto: 97
    if (blog) sum += 297;
    if (seo) sum += 490;
    return sum;
  }, [selectedPlan, extraPages, extraQty, blog, seo]);

  const handleSubmit = () => {
    if (!plan || !name || !email || !phone) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }
    const extras: string[] = [];
    if (extraPages) extras.push(`Páginas extras: ${extraQty}x (${formatPrice(97 * extraQty)})`);
    if (blog) extras.push('Blog/Portfólio (+R$ 297)');
    if (seo) extras.push('SEO Avançado (+R$ 490)');

    const text = [
      `*Novo Orçamento - JTP Services*`,
      ``,
      `*Plano:* ${selectedPlan?.name} (${formatPrice(selectedPlan?.price || 0)})`,
      extras.length ? `*Extras:* ${extras.join(', ')}` : '',
      `*Total setup:* ${formatPrice(total)}`,
      maintenance ? `*Manutenção:* R$ 29/mês` : '*Manutenção:* Não inclusa',
      ``,
      `*Nome:* ${name}`,
      `*Email:* ${email}`,
      `*WhatsApp:* ${phone}`,
      msg ? `*Mensagem:* ${msg}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Solicite seu Orçamento</h2>
          <p className="mt-4 text-muted-foreground">Escolha seu plano e preencha os dados. Respondemos em até 2 horas.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 sm:p-8 space-y-8">
          {/* Step 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">1. Escolha seu plano</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {plans.map(p => (
                <button
                  key={p.id}
                  onClick={() => setPlan(p.id)}
                  className={`relative rounded-xl p-4 text-left transition-all ${
                    plan === p.id
                      ? 'bg-primary/10 glow-blue'
                      : 'hover:bg-primary/5'
                  }`}
                  style={{ border: `1px solid rgba(40,126,215,${plan === p.id ? '0.5' : '0.15'})` }}
                >
                  {plan === p.id && (
                    <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}
                  {p.popular && <Badge className="mb-2 bg-primary/20 text-primary border-primary/30 text-[10px]">Popular</Badge>}
                  <p className="font-semibold text-sm">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.pages}</p>
                  <p className="text-sm font-bold text-primary mt-2">{formatPrice(p.price)}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">2. Seus dados de contato</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget-name" className="text-xs">Seu nome *</Label>
                <Input id="budget-name" value={name} onChange={e => setName(e.target.value)} className="mt-1 bg-background/50 border-primary/15" />
              </div>
              <div>
                <Label htmlFor="budget-email" className="text-xs">Seu email *</Label>
                <Input id="budget-email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 bg-background/50 border-primary/15" />
              </div>
              <div>
                <Label htmlFor="budget-phone" className="text-xs">WhatsApp *</Label>
                <Input id="budget-phone" value={phone} onChange={e => setPhone(formatPhone(e.target.value))} placeholder="(00) 00000-0000" className="mt-1 bg-background/50 border-primary/15" />
              </div>
              <div>
                <Label htmlFor="budget-msg" className="text-xs">Mensagem (opcional)</Label>
                <Input id="budget-msg" value={msg} onChange={e => setMsg(e.target.value)} className="mt-1 bg-background/50 border-primary/15" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">3. Extras (opcional)</h3>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 rounded-lg p-4" style={{ border: '1px solid rgba(40,126,215,0.15)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={extraPages} onCheckedChange={(c) => setExtraPages(!!c)} />
                    <div>
                      <p className="text-sm font-medium">Preciso de páginas extras</p>
                      <p className="text-xs text-muted-foreground">R$ 97 por página adicional</p>
                    </div>
                  </div>
                </div>
                
                {/* AQUI FOI CORRIGIDO O VALOR DE EXIBIÇÃO PARA 97 */}
                {extraPages && (
                  <div className="flex items-center gap-2 pl-9">
                    <button onClick={() => setExtraQty(Math.max(1, extraQty - 1))} className="h-7 w-7 rounded flex items-center justify-center hover:bg-primary/10" style={{ border: '1px solid rgba(40,126,215,0.2)' }}>
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm w-6 text-center">{extraQty}</span>
                    <button onClick={() => setExtraQty(Math.min(10, extraQty + 1))} className="h-7 w-7 rounded flex items-center justify-center hover:bg-primary/10" style={{ border: '1px solid rgba(40,126,215,0.2)' }}>
                      <Plus className="h-3 w-3" />
                    </button>
                    <span className="text-xs text-primary ml-1">+{formatPrice(97 * extraQty)}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between rounded-lg p-4" style={{ border: '1px solid rgba(40,126,215,0.15)' }}>
                <div className="flex items-center gap-3">
                  <Checkbox checked={blog} onCheckedChange={(c) => setBlog(!!c)} />
                  <div>
                    <p className="text-sm font-medium">Quero blog ou portfólio</p>
                    <p className="text-xs text-muted-foreground">Sistema de publicações</p>
                  </div>
                </div>
                <span className="text-xs text-primary">+R$ 297</span>
              </div>

              <div className="flex items-center justify-between rounded-lg p-4" style={{ border: '1px solid rgba(40,126,215,0.15)' }}>
                <div className="flex items-center gap-3">
                  <Checkbox checked={seo} onCheckedChange={(c) => setSeo(!!c)} />
                  <div>
                    <p className="text-sm font-medium">Preciso de SEO avançado</p>
                    <p className="text-xs text-muted-foreground">Otimização para Google</p>
                  </div>
                </div>
                <span className="text-xs text-primary">+R$ 490</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-xl bg-background/50 p-5" style={{ border: '1px solid rgba(40,126,215,0.15)' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
              <span className="text-sm text-muted-foreground">Valor estimado:</span>
              <span className="text-xl font-bold">
                {formatPrice(total)} setup{maintenance ? ' + R$ 29/mês' : ''}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-toggle" className="text-sm text-muted-foreground cursor-pointer">Incluir manutenção mensal</Label>
              <Switch id="maintenance-toggle" checked={maintenance} onCheckedChange={setMaintenance} />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-semibold text-primary-foreground glow-blue hover:glow-blue-strong transition-all hover:scale-[1.01]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar Orçamento via WhatsApp
          </button>
        </motion.div>
      </div>
    </div>
  );
}