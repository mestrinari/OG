import styled from "styled-components";

export interface ProcessStepItem {
  description: string;
  number: string;
  title: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  gap: 2rem;
`;
const Step = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;
const Number = styled.div`
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
`;
const Title = styled.h3`
  margin: 0;
  color: #0c1445;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;
const Description = styled.p`
  margin: 0;
  color: #4b5684;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  line-height: 1.65;
`;

export function ProcessSteps({ items }: { items: readonly ProcessStepItem[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <Step key={item.number}>
          <Number>{item.number}</Number>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Step>
      ))}
    </Grid>
  );
}
