import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { Code2, Mail, Phone, Instagram } from "lucide-react";

const FooterWrap = styled.footer`
  background: #0c1445;
  color: rgba(255, 255, 255, 0.7);
  padding: 3rem 4rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const FooterGrid = styled.div`
  // max-width: 1366px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Brand = styled.div``;

const BrandLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandText = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  max-width: 280px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa;
  }
`;

const Column = styled.div``;

const ColTitle = styled.h4`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const footerLinkStyles = `
  display: block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa;
  }
`;

const FooterLink = styled(Link)`${footerLinkStyles}`;
const FooterHashLink = styled(HashLink)`${footerLinkStyles}`;

const Divider = styled.div`
  max-width: 1366px;
  margin: 2.5rem auto 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Bottom = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 1280px) {
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
              <Code2 size={18} color="white" />
            </BrandIcon>
            OG Labs
          </BrandLogo>
          <BrandText>
            Transformamos ideias em soluções digitais completas — do site mais simples ao sistema mais sofisticado, sempre com linguagem clara e suporte real.
          </BrandText>
          <ContactItem href="mailto:contato@oglabs.com.br">
            <Mail size={15} /> contato@oglabs.com.br
          </ContactItem>
          <ContactItem href="tel:+5511999999999">
            <Phone size={15} /> (11) 99999-9999
          </ContactItem>
          <ContactItem href="https://instagram.com" target="_blank">
            <Instagram size={15} /> @oglabs
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="/styleguide" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", textDecoration: "none", fontFamily: "'Inter',sans-serif" }}>
            Design System
          </Link>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>Feito com cuidado no Brasil 🇧🇷</span>
        </div>
      </Bottom>
    </FooterWrap>
  );
}
