import styled from "styled-components";

export interface ProcessStepItem {
  description: string;
  number: string;
  title: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--value-200px), var(--percent-full)), var(--value-1fr)));
  gap: var(--space-8);
`;
const Step = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;
`;
const Number = styled.div`
  display: flex;
  width: var(--size-52);
  height: var(--size-52);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  background: linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600));
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-extrabold);
`;
const Title = styled.h3`
  margin: var(--space-0);
  color: var(--color-navy-950);
  font-family: var(--font-display);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-bold);
`;
const Description = styled.p`
  margin: var(--space-0);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  line-height: var(--line-height-looser);
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
