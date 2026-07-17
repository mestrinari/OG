import styled from "styled-components";

const Page = styled.section`
  background: linear-gradient(160deg, #042c1e 0%, #059669 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.25);
  border: 1px solid rgba(5, 150, 105, 0.5);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6ee7b7;
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

const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;

export const Hero = {
  Page,
  PageBadge,
  PageTitle,
  PageSubtitle,
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
};
