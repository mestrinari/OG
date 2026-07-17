import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ActionAnchor } from "./ActionButton";
import { siteContact, siteText } from "../content/site";

interface WhatsAppActionProps {
  background?: string;
  children?: ReactNode;
}

export function WhatsAppAction({
  background = "var(--gradient-whatsapp)",
  children = siteText.whatsappAction,
}: WhatsAppActionProps) {
  return (
    <ActionAnchor
      href={siteContact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      $background={background}
    >
      {children} <ArrowRight size="var(--size-16)" />
    </ActionAnchor>
  );
}

export function EmailAction() {
  return (
    <ActionAnchor href={siteContact.emailHref} $subtle>
      {siteText.emailAction}
    </ActionAnchor>
  );
}
