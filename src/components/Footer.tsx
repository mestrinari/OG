import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { Code2, Mail, Phone, Instagram } from "lucide-react";

import { breakpoints } from "../styles/breakpoints";
import { siteContact } from "../content/site";

const FooterWrap = styled.footer`
  background: var(--color-navy-950);
  color: var(--alpha-white-70);
  padding: var(--space-12) var(--space-16) var(--space-8);
  font-family: var(--font-body);
`;

const FooterGrid = styled.div`
  max-width: var(--max-width);
  margin: var(--number-zero) auto;
  display: grid;
  grid-template-columns: var(--value-2fr) var(--value-1fr) var(--value-1fr);
  gap: var(--space-12);

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: var(--value-1fr);
    gap: var(--space-8);
  }
`;

const Brand = styled.div``;

const BrandLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-2-5);
  text-decoration: none;
  color: var(--color-surface);
  font-family: var(--font-display);
  font-weight: var(--font-weight-extrabold);
  font-size: var(--font-size-md);
  margin-bottom: var(--space-4);
`;

const BrandIcon = styled.div`
  width: var(--size-36);
  height: var(--size-36);
  background: linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600));
  border-radius: var(--radius-button);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandText = styled.p`
  font-size: var(--font-size-base-sm);
  line-height: var(--line-height-spacious);
  max-width: var(--size-280);
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--alpha-white-65);
  text-decoration: none;
  font-size: var(--font-size-base-sm);
  margin-top: var(--space-3);
  transition: color var(--value-0-2s);

  &:hover {
    color: var(--color-blue-400);
  }
`;

const Column = styled.div``;

const ColTitle = styled.h4`
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
  text-transform: uppercase;
  letter-spacing: var(--value-0-06em);
`;

const footerLinkStyles = `
  display: block;
  color: var(--alpha-white-60);
  text-decoration: none;
  font-size: var(--font-size-base-sm);
  margin-bottom: var(--space-2);
  transition: color var(--value-0-2s);

  &:hover {
    color: var(--color-blue-400);
  }
`;

const FooterLink = styled(Link)`${footerLinkStyles}`;
const FooterHashLink = styled(HashLink)`${footerLinkStyles}`;

const Divider = styled.div`
  max-width: var(--max-width);
  margin: var(--space-10) auto var(--space-6);
  border-top: var(--value-1px) solid var(--alpha-white-08);
`;

const Bottom = styled.div`
  max-width: var(--max-width);
  margin: var(--number-zero) auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-xs);
  flex-wrap: wrap;
  gap: var(--space-2);

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterGrid>
        <Brand>
          <BrandLogo to="/">
            <BrandIcon>
              <Code2 size="var(--size-18)" color="var(--color-surface)" />
            </BrandIcon>
            OG Labs
          </BrandLogo>
          <BrandText>
            Transformamos ideias em soluções digitais completas — do site mais simples ao sistema mais sofisticado, sempre com linguagem clara e suporte real.
          </BrandText>
          <ContactItem href={siteContact.emailHref}>
            <Mail size="var(--size-15)" /> {siteContact.email}
          </ContactItem>
          <ContactItem href={siteContact.phoneHref}>
            <Phone size="var(--size-15)" /> {siteContact.phoneDisplay}
          </ContactItem>
          <ContactItem href={siteContact.instagramHref} target="_blank" rel="noreferrer">
            <Instagram size="var(--size-15)" /> {siteContact.instagram}
          </ContactItem>
        </Brand>

        <Column>
          <ColTitle>Soluções</ColTitle>
          <FooterLink to="/web">Sites & Sistemas Web</FooterLink>
          <FooterLink to="/mobile">Apps Mobile</FooterLink>
          <FooterLink to="/software">Softwares</FooterLink>
          <FooterLink to="/sistemas-locais">Sistemas Locais</FooterLink>
        </Column>

        <Column>
          <ColTitle>Recursos</ColTitle>
          <FooterHashLink to="/#o-que-fazemos">O que fazemos</FooterHashLink>
          <FooterHashLink to="/#como-funciona">Como funciona</FooterHashLink>
          <FooterHashLink to="/#ia">Inteligência Artificial</FooterHashLink>
          <FooterHashLink to="/#contato">Contato</FooterHashLink>
        </Column>
      </FooterGrid>

      <Divider />

      <Bottom>
        <span>© {new Date().getFullYear()} OG Labs. Todos os direitos reservados.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <Link to="/styleguide" style={{ color: "var(--alpha-white-25)", fontSize: "var(--value-0-75rem)", textDecoration: "none", fontFamily: "var(--font-body)" }}>
            Design System
          </Link>
          <span style={{ color: "var(--alpha-white-35)", fontSize: "var(--value-0-8rem)" }}>Feito com cuidado no Brasil 🇧🇷</span>
        </div>
      </Bottom>
    </FooterWrap>
  );
}
