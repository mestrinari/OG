import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export interface ServiceCardItem {
  accentColor: string;
  description: string;
  icon: ReactNode;
  iconBackground: string;
  title: string;
  to: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1.5rem;
`;

const Card = styled(HashLink)<{ $accentColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid color-mix(in srgb, ${(p) => p.$accentColor} 14%, transparent);
  border-radius: 16px;
  background: white;
  text-decoration: none;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;

  &:hover {
    border-color: color-mix(in srgb, ${(p) => p.$accentColor} 45%, transparent);
    box-shadow: 0 8px 28px color-mix(in srgb, ${(p) => p.$accentColor} 22%, transparent);
    transform: translateY(-3px);
  }
`;

const Icon = styled.div<{ $background: string }>`
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${(p) => p.$background};
`;

const Title = styled.h3`
  margin: 0;
  color: #0c1445;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.175rem;
  font-weight: 700;
`;

const Description = styled.p`
  flex: 1;
  margin: 0;
  color: #4b5684;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  line-height: 1.65;
`;

const More = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  color: #2563eb;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  transition: gap 0.2s;

  ${Card}:hover & { gap: 0.6rem; }
`;

export function ServiceCards({ items }: { items: readonly ServiceCardItem[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <Card key={item.to} to={item.to} $accentColor={item.accentColor}>
          <Icon $background={item.iconBackground}>{item.icon}</Icon>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <More>Saiba mais <ArrowRight size={14} /></More>
        </Card>
      ))}
    </Grid>
  );
}
