import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

// ─── AI Banner ──────────────────────────────────────────────────────────────────

const Banner = styled.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div``;

const Badge = styled.span`
  display: inline-block;
  background: rgba(8, 145, 178, 0.2);
  border: 1px solid rgba(8, 145, 178, 0.4);
  color: #7dd3fc;
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  line-height: 1.25;
  margin-bottom: 0.875rem;
`;

const Desc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 520px;
`;

const Button = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #0891b2, #2563eb);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const AI = {
  Banner,
  Text,
  Badge,
  Title,
  Desc,
  Button,
};
