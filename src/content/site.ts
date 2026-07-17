export const siteContact = {
  email: "contato@oglabs.com.br",
  emailHref: "mailto:contato@oglabs.com.br",
  instagram: "@oglabs",
  instagramHref: "https://instagram.com/oglabs",
  phoneDisplay: "(11) 99999-9999",
  phoneHref: "tel:+5511999999999",
  whatsappNumber: "5511999999999",
  whatsappHref: "https://wa.me/5511999999999",
} as const;

export const siteText = {
  brandName: "OG Labs",
  emailAction: "Enviar e-mail",
  whatsappAction: "Falar pelo WhatsApp",
  whatsappChatAction: "Falar com a gente no WhatsApp",
} as const;

export function createWhatsAppHref(message?: string): string {
  if (!message) return siteContact.whatsappHref;
  return `${siteContact.whatsappHref}?text=${encodeURIComponent(message)}`;
}
