import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const WHATSAPP_NUMBER = '+5538998304003';

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      // Aqui trocamos para 'bg-primary' e usamos o seu 'hover:glow-blue-strong'
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-all hover:scale-110 hover:glow-blue-strong shadow-lg"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}