import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(29, 78, 216, 0.08);
`;

const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Text = styled.div``;

const Title = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const Desc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.6;
`;

export const Feature = {
  Grid,
  Item,
  IconWrap,
  Text,
  Title,
  Desc,
};
