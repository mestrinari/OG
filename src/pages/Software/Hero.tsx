import styled from "styled-components";

// ─── Page Hero ──────────────────────────────────────────────────────────────────

const Page = styled.section`
  background: linear-gradient(160deg, #1e1040 0%, #5b21b6 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.25);
  border: 1px solid rgba(124, 58, 237, 0.45);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #c4b5fd;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const PageTitle = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`;

const PageSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`;

export const Hero = {
  Page,
  PageBadge,
  PageTitle,
  PageSubtitle,
};
