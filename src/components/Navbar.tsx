import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Code2, Menu, X } from "lucide-react";
import { useAppStore } from "../store";
import { HashLink } from "react-router-hash-link";

import { breakpoints } from "../styles/breakpoints";
// --- STYLED COMPONENTS ---

const Nav = styled.nav<{ $scrolled: boolean; $navBackground: string }>`
  position: fixed;
  top: var(--space-0);
  left: var(--space-0);
  right: var(--space-0);
  z-index: var(--z-navbar);
  backdrop-filter: blur(var(--value-12px));
  border-bottom: var(--value-1px) solid var(--alpha-white-08);
  transition: background var(--value-0-3s) ease;
  background: ${(p) => (p.$scrolled ? "var(--alpha-navbar)" : p.$navBackground)};
`;

const NavInner = styled.div`
  margin: var(--number-zero) auto;
  padding: var(--space-0) var(--space-16);
  height: var(--size-navbar);
  display: grid;
  grid-template-columns: var(--value-1fr) auto var(--value-1fr);
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

const LogoBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  justify-self: start;
`;

const Logo = styled.span`
  color: var(--color-surface);
  font-family: var(--font-display);
  font-weight: var(--font-weight-extrabold);
  font-size: var(--font-size-md);
  letter-spacing: var(--value-neg-0-02em);
`;

const LogoIcon = styled.div<{ $menuComplete: boolean }>`
  width: var(--size-36);
  height: var(--size-36);
  background: ${(p) => (!p.$menuComplete ? "var(--gradient-dev)" : "var(--gradient-brand)")};
  border-radius: var(--radius-button);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  justify-self: center;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean; $color?: string }>`
  padding: var(--space-2) var(--space-3-5);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  color: ${(p) => (p.$active ? "var(--color-surface)" : "var(--alpha-white-70)")};
  transition: all var(--value-0-2s);

  ${(p) => p.$color && p.$active && `
    background: linear-gradient(${p.$color});
  `}

  &:hover {
    color: var(--color-surface);
    ${(p) => p.$color && `
      background: linear-gradient(${p.$color});
    `}
  }
`;

const DropdownContainer = styled.div<{ $color: string }>`
  position: absolute;
  top: var(--percent-full);
  left: var(--space-0);
  background: linear-gradient(${(p) => p.$color});
  border: var(--value-1px) solid var(--alpha-white-08);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  display: flex;
  flex-direction: column;
  min-width: var(--size-200);
  box-shadow: var(--number-zero) var(--value-10px) var(--value-15px) var(--value-neg-3px) var(--alpha-black-30);
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-2);
  justify-self: end;
`;

const CtaButton = styled(HashLink)`
  padding: var(--space-2) var(--space-4-5);
  background: linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600));
  color: var(--color-surface);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: opacity var(--value-0-2s), transform var(--value-0-2s);

  &:hover {
    opacity: var(--opacity-90);
    transform: translateY(var(--value-neg-1px));
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--color-surface);
  cursor: pointer;
  padding: var(--space-2);
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: var(--value-68px);
    left: var(--space-0);
    right: var(--space-0);
    bottom: var(--space-0);
    background: var(--color-navy-950);
    padding: var(--space-6);
    gap: var(--space-2);
    transform: ${(p) => (p.$open ? "translateX(var(--number-zero))" : "translateX(var(--percent-full))")};
    transition: transform var(--value-0-3s) ease;
    z-index: var(--z-mobile-menu);
    overflow-y: auto;
  }
`;

const MobileLink = styled(HashLink)<{ $active: boolean }>`
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-button);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  color: ${(p) => (p.$active ? "var(--color-surface)" : "var(--alpha-white-75)")};
  background: ${(p) => (p.$active ? "var(--alpha-primary-35)" : "transparent")};
  border: var(--value-1px) solid ${(p) => (p.$active ? "var(--alpha-primary-50)" : "transparent")};
  transition: all var(--value-0-2s);
`;

const MobileMenuItemWrapper = styled.div<{ $isOpen: boolean; $color: string }>`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-button);
  transition: all var(--value-0-3s) ease;
  background: ${(p) => (p.$isOpen ? `linear-gradient(${p.$color})` : "transparent")};

  ${(p) => p.$isOpen && `
    border: var(--value-1px) solid var(--alpha-white-15);
    padding-bottom: var(--value-0-5rem);
    box-shadow: var(--number-zero) var(--value-8px) var(--value-20px) var(--value-neg-5px) var(--alpha-black-40);
  `}
`;

const MobileMenuButton = styled.button<{ $active: boolean; $isOpen: boolean; $color: string }>`
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-button);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => (p.$active || p.$isOpen ? "var(--color-surface)" : "var(--alpha-white-75)")};
  background: ${(p) => (p.$isOpen ? "transparent" : p.$active ? `linear-gradient(${p.$color})` : "transparent")};
  border: var(--value-1px) solid ${(p) => (p.$isOpen ? "transparent" : p.$active ? "var(--alpha-primary-50)" : "transparent")};
  transition: all var(--value-0-2s);
  cursor: pointer;
`;

const MobileSubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-0) var(--space-4);
  margin-top: var(--space-1);
`;

const MobileSubLink = styled(HashLink)<{ $active: boolean }>`
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
  text-decoration: none;
  color: ${(p) => (p.$active ? "var(--color-surface)" : "var(--alpha-white-75)")};
  background: ${(p) => (p.$active ? "var(--alpha-white-15)" : "transparent")};
  transition: all var(--value-0-2s);

  &:hover {
    color: var(--color-surface);
    background: var(--alpha-white-10);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-surface);
  cursor: pointer;
  padding: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`;

const MenuSubButton = styled(HashLink)`
  background: transparent;
  border: none;
  color: var(--color-surface);
  cursor: pointer;
  padding: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  text-decoration: none;

  &:hover {
    opacity: var(--opacity-80);
  }
`;

// --- DATA ---

const menuItems = [
  {
    to: "/",
    label: "Início",
    id: "home",
    subItems: [
      { to: "/#hero", label: "Soluções Digitais Completas" },
      { to: "/#o-que-fazemos", label: "O que fazemos" },
      { to: "/#recursos", label: "Recursos disponíveis" },
      { to: "/#como-funciona", label: "Como funciona" },
    ],
    color: "var(--gradient-hero-home)"
  },
  {
    label: "Sites & Sistemas Web",
    id: "web",
    subItems: [
      { to: "/web#hero", label: "Sites e Sistemas Web" },
      { to: "/web#web", label: "Tipos de sistemas web" },
      { to: "/web#recursos", label: "Recursos extras" },
    ],
    color: "var(--gradient-hero-web)"
  },
  {
    label: "Apps Mobile",
    id: "mobile",
    subItems: [
      { to: "/mobile#hero", label: "Aplicativos Mobile" },
      { to: "/mobile#mobile", label: "Plataformas disponíveis" },
      { to: "/mobile#perfis", label: "Perfis de usuário" },
      { to: "/mobile#exemplos", label: "Exemplos de uso" },
    ],
    color: "var(--gradient-hero-mobile)"
  },
  {
    label: "Softwares",
    id: "software",
    subItems: [
      { to: "/software#hero", label: "Softwares para PC" },
      { to: "/software#Softwares", label: "Sistemas operacionais" },
      { to: "/software#recursos", label: "Opções e recursos" },
    ],
    color: "var(--gradient-hero-software)"
  },
  {
    label: "Sistemas Locais",
    id: "sistemas-locais",
    subItems: [
      { to: "/sistemas-locais#hero", label: "Sistemas Locais" },
      { to: "/sistemas-locais#Sistemas-Local", label: "O que é um sistema local?" },
      { to: "/sistemas-locais#Controle-Acesso", label: "Controle Acesso" },
    ],
    color: "var(--gradient-hero-local)"
  },
];

const links = [
  { to: "/", label: "Início", color: "var(--gradient-hero-home)" },
  { to: "/web", label: "Sites & Sistemas Web", color: "var(--gradient-hero-web)" },
  { to: "/mobile", label: "Apps Mobile", color: "var(--gradient-hero-mobile)" },
  { to: "/software", label: "Softwares", color: "var(--gradient-hero-software)" },
  { to: "/sistemas-locais", label: "Sistemas Locais", color: "var(--gradient-hero-local)" },
];

const scrollToSection = (element: HTMLElement) => {
  const navbarOffset = 68;
  const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;
  window.scrollTo({ top, behavior: "smooth" });
};

// --- COMPONENT ---

export default function Navbar() {
  const location = useLocation();
  const { menuOpen, toggleMenu, setMenuOpen } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuComplete, setMenuComplete] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const highlightTimeoutRef = useRef<number>(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname, setMenuOpen]);

  const handleSubmenuToggle = (id: string) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  // Lógica de Cor Dinâmica (Desktop)
  const defaultColor = "var(--gradient-hero-home)";
  let pageColor = defaultColor;

  for (const item of menuItems) {
    const isCurrentPath = location.pathname === item.to || location.pathname === "/" + item.id;
    const isSubItemActive = item.subItems?.some(sub => sub.to.split('#')[0] === location.pathname);

    if (isCurrentPath || isSubItemActive) {
      pageColor = item.color || pageColor;
      break;
    }
  }

  let finalNavBackground = pageColor;
  if (activeSubmenu) {
    const openItem = menuItems.find((item) => item.id === activeSubmenu);
    if (openItem && openItem.color) {
      finalNavBackground = openItem.color;
    }
  }

  return (
    <>
      <Nav $scrolled={scrolled} $navBackground={finalNavBackground}>
        <NavInner>
          {/* Esquerda — logo sempre colado */}
          <LogoBrand to="/" onClick={(e) => { if (!menuComplete) { e.preventDefault(); setMenuComplete(true); } }}>
            <LogoIcon
              as="span"
              $menuComplete={menuComplete}
              onClick={(e: React.MouseEvent) => { e.preventDefault(); setMenuComplete(!menuComplete); }}
            >
              <Code2 size="var(--size-18)" color={!menuComplete ? "var(--color-dev)" : "var(--color-surface)"} />
            </LogoIcon>
            <Logo>{!menuComplete ? "OG Dev" : "OG Labs"}</Logo>
          </LogoBrand>

          {/* Centro — links de navegação */}
          {menuComplete ? (
            <NavLinks>
              {links.map((l) => (
                <NavLink
                  $color={l.color}
                  key={l.to}
                  to={l.to}
                  $active={location.pathname === l.to}
                >
                  {l.label}
                </NavLink>
              ))}
            </NavLinks>
          ) : (
            <NavLinks>
              {menuItems.map((item, index) => {
                if (item.subItems) {
                  const isCurrentPath = location.pathname === item.to || location.pathname === "/" + item.id;
                  const isSubItemActive = item.subItems.some(sub => sub.to.split('#')[0] === location.pathname);
                  const isCategoryActive = isCurrentPath || isSubItemActive;

                  return (
                    <div key={index} style={{ position: "relative" }}>
                      <MenuButton
                        onClick={() => handleSubmenuToggle(item.id)}
                        style={{ color: isCategoryActive ? "var(--color-dev)" : "var(--color-surface)" }}
                      >
                        {item.label} {activeSubmenu === item.id ? "▲" : "▼"}
                      </MenuButton>

                      {activeSubmenu === item.id && (
                        <DropdownContainer $color={item.color}>
                          {item.subItems.map((sub) => (
                            <MenuSubButton key={sub.to} to={sub.to}>
                              {sub.label}
                            </MenuSubButton>
                          ))}
                        </DropdownContainer>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to!}
                    $active={location.pathname === item.to}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </NavLinks>
          )}

          {/* Direita — CTA + hambúrguer mobile */}
          <NavRight>
            <CtaButton to="/#contato" scroll={scrollToSection}>Falar Conosco</CtaButton>
            <HamburgerButton onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? <X size="var(--size-24)" /> : <Menu size="var(--size-24)" />}
            </HamburgerButton>
          </NavRight>
        </NavInner>
      </Nav>

      {/* Drawer mobile */}
      <MobileMenu $open={menuOpen}>
        {menuItems.map((item) => {
          if (item.subItems) {
            const isSubMenuOpen = activeSubmenu === item.id;
            const isCategoryActive =
              location.pathname === "/" + item.id ||
              item.subItems.some(sub => sub.to.split("#")[0] === location.pathname);

            return (
              <MobileMenuItemWrapper key={item.id} $isOpen={isSubMenuOpen} $color={item.color}>
                <MobileMenuButton
                  $active={isCategoryActive}
                  $isOpen={isSubMenuOpen}
                  $color={item.color}
                  onClick={() => handleSubmenuToggle(item.id)}
                >
                  {item.label}
                  <span>{isSubMenuOpen ? "▲" : "▼"}</span>
                </MobileMenuButton>

                {isSubMenuOpen && (
                  <MobileSubMenuContainer>
                    {item.subItems.map((sub) => (
                      <MobileSubLink
                        key={sub.to}
                        to={sub.to}
                        $active={location.pathname === sub.to.split("#")[0]}
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </MobileSubLink>
                    ))}
                  </MobileSubMenuContainer>
                )}
              </MobileMenuItemWrapper>
            );
          }

          return (
            <MobileLink
              key={item.to}
              to={item.to!}
              $active={location.pathname === item.to}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </MobileLink>
          );
        })}

        <MobileLink
          to="/#contato"
          scroll={scrollToSection}
          $active={false}
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "var(--value-1rem)",
            background: "linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600))",
            color: "var(--color-surface)",
            textAlign: "center",
          }}
        >
          Falar Conosco
        </MobileLink>
      </MobileMenu>
    </>
  );
}
