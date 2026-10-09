import { siteConfig } from "@/config/site-content";

export interface LeadData {
  name: string;
  phone: string;
  complaint: string;
  period?: string | undefined;
  additionalDetails?: string | undefined;
}

export function generateWhatsAppLeadUrl(lead: LeadData): string {
  const parts: string[] = [
    `*NOVO AGENDAMENTO DE AVALIAÇÃO - CLÍNICA LOGOS*`,
    ``,
    `👤 *Nome:* ${lead.name.trim()}`,
    `📱 *WhatsApp:* ${lead.phone.trim()}`,
    `🩺 *Principal Queixa/Dor:* ${lead.complaint.trim()}`,
  ];

  if (lead.period && lead.period.trim()) {
    parts.push(`⏰ *Preferência de Horário:* ${lead.period.trim()}`);
  }

  if (lead.additionalDetails && lead.additionalDetails.trim()) {
    parts.push(`📝 *Detalhes:* ${lead.additionalDetails.trim()}`);
  }

  parts.push(``);
  parts.push(`_Mensagem gerada através da Landing Page da Clínica Logos._`);

  const message = parts.join("\n");
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}
