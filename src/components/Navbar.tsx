import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Code2, Menu, X } from "lucide-react";
import { useAppStore } from "../store";
import { HashLink } from "react-router-hash-link";

// --- STYLED COMPONENTS ---

const Nav = styled.nav<{ $scrolled: boolean; $navBackground: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
  background: ${(p) => (p.$scrolled ? "rgba(12, 20, 69, 0.97)" : `linear-gradient(${p.$navBackground})`)};
`;

const NavInner = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 68px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const LogoBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-self: start;
`;

const Logo = styled.span`
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`;

const LogoIcon = styled.div<{ $menuComplete: boolean }>`
  width: 36px;
  height: 36px;
  background: ${(p) => (!p.$menuComplete ? "linear-gradient(135deg, #e632c824, #e269f87f)" : "linear-gradient(135deg, #2563eb, #0891b2)")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-self: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean; $color?: string }>`
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(p) => (p.$active ? "#ffffff" : "rgba(255,255,255,0.7)")};
  transition: all 0.2s;

  ${(p) => p.$color && p.$active && `
    background: linear-gradient(${p.$color});
  `}

  &:hover {
    color: white;
    ${(p) => p.$color && `
      background: linear-gradient(${p.$color});
    `}
  }
`;

const DropdownContainer = styled.div<{ $color: string }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: linear-gradient(${(p) => p.$color});
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  justify-self: end;
`;

const CtaButton = styled(Link)`
  padding: 0.5rem 1.125rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0c1445;
    padding: 1.5rem;
    gap: 0.5rem;
    transform: ${(p) => (p.$open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease;
    z-index: 99;
    overflow-y: auto;
  }
`;

const MobileLink = styled(Link)<{ $active: boolean }>`
  padding: 1rem 1.25rem;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(p) => (p.$active ? "white" : "rgba(255,255,255,0.75)")};
  background: ${(p) => (p.$active ? "rgba(37,99,235,0.35)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "rgba(37,99,235,0.5)" : "transparent")};
  transition: all 0.2s;
`;

const MobileMenuItemWrapper = styled.div<{ $isOpen: boolean; $color: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: ${(p) => (p.$isOpen ? `linear-gradient(${p.$color})` : "transparent")};

  ${(p) => p.$isOpen && `
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 0.5rem;
    box-shadow: 0 8px 20px -5px rgba(0,0,0,0.4);
  `}
`;

const MobileMenuButton = styled.button<{ $active: boolean; $isOpen: boolean; $color: string }>`
  padding: 1rem 1.25rem;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => (p.$active || p.$isOpen ? "white" : "rgba(255,255,255,0.75)")};
  background: ${(p) => (p.$isOpen ? "transparent" : p.$active ? `linear-gradient(${p.$color})` : "transparent")};
  border: 1px solid ${(p) => (p.$isOpen ? "transparent" : p.$active ? "rgba(37,99,235,0.5)" : "transparent")};
  transition: all 0.2s;
  cursor: pointer;
`;

const MobileSubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
  margin-top: 0.25rem;
`;

const MobileSubLink = styled(HashLink)<{ $active: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  color: ${(p) => (p.$active ? "white" : "rgba(255,255,255,0.75)")};
  background: ${(p) => (p.$active ? "rgba(255,255,255,0.15)" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: white;
    background: rgba(255,255,255,0.1);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const MenuSubButton = styled(HashLink)`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
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
    color: "160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%"
  },
  {
    label: "Sites & Sistemas Web",
    id: "web",
    subItems: [
      { to: "/web#hero", label: "Sites e Sistemas Web" },
      { to: "/web#web", label: "Tipos de sistemas web" },
      { to: "/web#recursos", label: "Recursos extras" },
    ],
    color: "160deg, #0c1445 0%, #1e3a8a 100%"
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
    color: "160deg, #0a1930 0%, #0e7490 100%"
  },
  {
    label: "Softwares",
    id: "software",
    subItems: [
      { to: "/software#hero", label: "Softwares para PC" },
      { to: "/software#Softwares", label: "Sistemas operacionais" },
      { to: "/software#recursos", label: "Opções e recursos" },
    ],
    color: "160deg, #1e1040 0%, #5b21b6 100%"
  },
  {
    label: "Sistemas Locais",
    id: "sistemas-locais",
    subItems: [
      { to: "/sistemas-locais#hero", label: "Sistemas Locais" },
      { to: "/sistemas-locais#Sistemas-Local", label: "O que é um sistema local?" },
      { to: "/sistemas-locais#Controle-Acesso", label: "Controle Acesso" },
    ],
    color: "160deg, #042c1e 0%, #059669 100%"
  },
];

const links = [
  { to: "/", label: "Início", color: "160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%" },
  { to: "/web", label: "Sites & Sistemas Web", color: "160deg, #0c1445 0%, #1e3a8a 100%" },
  { to: "/mobile", label: "Apps Mobile", color: "160deg, #0a1930 0%, #0e7490 100%" },
  { to: "/software", label: "Softwares", color: "160deg, #1e1040 0%, #5b21b6 100%" },
  { to: "/sistemas-locais", label: "Sistemas Locais", color: "160deg, #042c1e 0%, #059669 100%" },
];

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
  const defaultColor = "160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%";
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
              <Code2 size={18} color={!menuComplete ? "#41ff24" : "white"} />
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
                        style={{ color: isCategoryActive ? "#41ff24" : "white" }}
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
            <CtaButton to="/#contato">Falar Conosco</CtaButton>
            <HamburgerButton onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
          $active={false}
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "1rem",
            background: "linear-gradient(135deg, #2563eb, #0891b2)",
            color: "white",
            textAlign: "center",
          }}
        >
          Falar Conosco
        </MobileLink>
      </MobileMenu>
    </>
  );
}
