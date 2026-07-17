import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

// ─── Service Cards Grid ─────────────────────────────────────────────────────────

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const View = styled(HashLink)<{ $color: string; $highlight?: boolean }>`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(29, 78, 216, 0.1);
  padding: 2rem;
  text-decoration: none;
  transition:
    box-shadow 0.25s,
    transform 0.25s,
    border-color 0.25s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0 1px 16px rgba(${(p) => p.$color}, 0.6);
    transform: scale(1.03);
    border: 0px solid rgba(${(p) => p.$color}, 0.6);
  }
`;

export const Icon = styled.div<{ $color: string }>`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${(p) => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.175rem;
  font-weight: 700;
  color: #0c1445;
`;

export const Desc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.65;
  flex: 1;
`;

export const Link = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin-top: 0.5rem;
  transition: gap 0.2s;

  ${View}:hover & {
    gap: 0.6rem;
  }
`;

export const Card = {
  Grid,
  View,
  Icon,
  Title,
  Desc,
  Link,
};
