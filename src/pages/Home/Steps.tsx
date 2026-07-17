import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
`;

const Step = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Number = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
`;

const Title = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0c1445;
`;

const Desc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.65;
`;

export const Steps = {
  Grid,
  Step,
  Number,
  Title,
  Desc,
};
