import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  FileText, 
  Monitor, 
  DollarSign, 
  Copyright, 
  ShieldCheck, 
  AlertTriangle, 
  Ban, 
  Mail 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TermsOfUse() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Cabeçalho com Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            asChild
            className="text-gray-400 hover:text-white hover:bg-white/10 -ml-4"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </Link>
          </Button>
        </motion.div>

        {/* Título Principal */}
        <motion.div
          {...fadeInUp}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Termos de Uso
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Bem-vindo à <span className="text-white font-semibold">JTP SERVICES</span>. Ao acessar nosso site e contratar nossos serviços, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
          </p>
          <p className="text-sm text-gray-500 mt-2">Última atualização: Janeiro de 2026</p>
        </motion.div>

        {/* Conteúdo dos Termos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid gap-8"
        >
          {/* Seção 1: Serviços Oferecidos */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Monitor className="h-5 w-5" />
              <h2>1. Serviços Oferecidos</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                A JTP Services é uma agência especializada no desenvolvimento de soluções digitais, incluindo, mas não se limitando a:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 marker:text-primary mb-4">
                <li>Criação de Landing Pages de alta conversão;</li>
                <li>Desenvolvimento de Sites Institucionais e Blogs;</li>
                <li>Implementação de Lojas Virtuais (E-commerce);</li>
                <li>Otimização de Sites (SEO) e Manutenção Web.</li>
              </ul>
              <p className="text-sm italic text-gray-400">
                Os detalhes específicos de cada projeto (escopo, funcionalidades e design) são definidos em contrato individual ou proposta comercial aprovada via WhatsApp/E-mail.
              </p>
            </div>
          </section>

          {/* Seção 2: Pagamentos e Prazos */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <DollarSign className="h-5 w-5" />
              <h2>2. Pagamentos e Prazos</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                Para garantir a segurança de ambas as partes, trabalhamos com o seguinte modelo padrão de pagamento, salvo acordo contrário em contrato:
              </p>
              <ul className="space-y-3 pl-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold mt-1">50%</span>
                  <span><strong>De entrada:</strong> Para início imediato do desenvolvimento;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold mt-1">50%</span>
                  <span><strong>Na entrega:</strong> Após a aprovação final do projeto e antes da publicação no domínio oficial.</span>
                </li>
              </ul>
              <p>
                Os prazos de entrega (ex: 7 dias para Landing Pages) começam a contar a partir do recebimento de todo o material necessário (textos, logo e imagens) enviado pelo cliente.
              </p>
            </div>
          </section>

          {/* Seção 3: Propriedade Intelectual */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Copyright className="h-5 w-5" />
              <h2>3. Propriedade Intelectual</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                Após o pagamento integral do serviço, a titularidade do site e dos arquivos fonte é transferida para o cliente. A JTP Services reserva-se o direito de exibir o projeto em seu portfólio e materiais de marketing como demonstração de trabalho realizado.
              </p>
            </div>
          </section>

          {/* Seção 4: Garantia e Suporte */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <ShieldCheck className="h-5 w-5" />
              <h2>4. Garantia e Suporte</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                Oferecemos uma <strong className="text-white">garantia de 30 dias</strong> após a entrega do site para correção de eventuais bugs ou erros técnicos que sejam de nossa responsabilidade.
              </p>
              <p className="text-gray-400">
                Alterações estruturais, adição de novas funcionalidades ou mudanças de design solicitadas após a aprovação final não estão cobertas pela garantia e serão orçadas à parte ou descontadas de um plano de manutenção.
              </p>
            </div>
          </section>

          {/* Seção 5: Responsabilidades */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <AlertTriangle className="h-5 w-5" />
              <h2>5. Responsabilidades</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                O cliente é responsável pela veracidade das informações inseridas no site e pelos direitos autorais de imagens e textos fornecidos à agência. A JTP Services não se responsabiliza por interrupções de serviço causadas por terceiros (ex: problemas na empresa de hospedagem ou instabilidade no servidor do cliente).
              </p>
            </div>
          </section>

          {/* Seção 6: Cancelamento */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Ban className="h-5 w-5" />
              <h2>6. Cancelamento</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                Em caso de cancelamento do projeto por parte do cliente após o início do desenvolvimento, o valor da entrada (50%) não será reembolsado, servindo como pagamento pelas horas técnicas já dedicadas e reserva de agenda.
              </p>
            </div>
          </section>

          {/* Seção 7: Contato */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Mail className="h-5 w-5" />
              <h2>7. Contato</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                Para dúvidas sobre estes termos ou para solicitar um orçamento detalhado, entre em contato:
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:jtp.servicesagencia@gmail.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit"
                >
                  <Mail className="h-4 w-4" />
                  jtp.servicesagencia@gmail.com
                </a>
                <a 
                  href="https://wa.me/5538998304003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit"
                >
                  <span className="font-bold">WhatsApp:</span> (38) 99830-4003
                </a>
              </div>
            </div>
          </section>

          <Separator className="bg-white/10 my-4" />

          <div className="text-center text-sm text-gray-500 pt-8">
            <p>JTP Services &copy; {new Date().getFullYear()}</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}