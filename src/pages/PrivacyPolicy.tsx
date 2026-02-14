import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, FileText, Cookie, Scale, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            A transparência é fundamental para nós. Abaixo, detalhamos
            exatamente como protegemos e utilizamos seus dados.
          </p>
        </motion.div>

        {/* Conteúdo da Política */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid gap-8"
        >
          {/* Seção 1: Coleta de Dados */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Eye className="h-5 w-5" />
              <h2>1. Coleta de Dados</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como responder a um pedido de orçamento). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
              </p>
              <p className="mb-2 font-medium text-white/80">Os dados que comumente coletamos incluem:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 marker:text-primary">
                <li>Nome completo;</li>
                <li>E-mail e número de telefone (WhatsApp);</li>
                <li>Informações sobre o seu projeto ou empresa.</li>
              </ul>
            </div>
          </section>

          {/* Seção 2: Uso das Informações */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <FileText className="h-5 w-5" />
              <h2>2. Uso das Informações</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 marker:text-primary mb-6">
                <li>Entrar em contato para apresentar orçamentos solicitados;</li>
                <li>Responder a dúvidas enviadas pelo formulário ou WhatsApp;</li>
                <li>Melhorar a experiência do usuário em nosso site;</li>
                <li>Enviar atualizações sobre nossos serviços (apenas se autorizado).</li>
              </ul>
              <p className="text-sm text-gray-400 italic">
                Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
            </div>
          </section>

          {/* Seção 3: Cookies e Tecnologias */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Cookie className="h-5 w-5" />
              <h2>3. Cookies e Tecnologias</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                Utilizamos cookies para melhorar sua experiência,entender como você navega pelo nosso site. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>
            </div>
          </section>

          {/* Seção 4: Segurança */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Lock className="h-5 w-5" />
              <h2>4. Segurança</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
            </div>
          </section>

          {/* Seção 5: Seus Direitos (LGPD) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Scale className="h-5 w-5" />
              <h2>5. Seus Direitos (LGPD)</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p>
                Você tem o direito de solicitar o acesso, a correção ou a exclusão dos seus dados pessoais que mantemos. Se desejar exercer esses direitos, entre em contato conosco através dos canais abaixo.
              </p>
            </div>
          </section>

          {/* Seção 6: Contato */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary/90">
              <Mail className="h-5 w-5" />
              <h2>6. Contato</h2>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5 text-gray-300 leading-relaxed">
              <p className="mb-4">
                Para dúvidas sobre esta política ou sobre como tratamos seus dados, entre em contato:
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
                  {/* Ícone de telefone genérico ou WhatsApp se tiver o ícone específico no projeto */}
                  <span className="font-bold">WhatsApp:</span> (38) 99830-4003
                </a>
              </div>
            </div>
          </section>

          <Separator className="bg-white/10 my-4" />

          <div className="text-center text-sm text-gray-500 pt-8">
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
            <p>Agência JTP Studio &copy; {new Date().getFullYear()}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}