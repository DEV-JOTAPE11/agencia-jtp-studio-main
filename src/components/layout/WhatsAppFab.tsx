import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const WHATSAPP_NUMBER = '+55SEUNUMEROAQUI';

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
