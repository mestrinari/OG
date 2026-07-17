import type { KeyboardEvent, ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import styled, { css, keyframes } from "styled-components";

export type TypeCardTagVariant =
  | "blue"
  | "cyan"
  | "green"
  | "orange"
  | "purple";

export interface SolutionTypeCardItem {
  id: string;
  icon: ReactNode;
  color: string;
  accentColor?: string;
  title: string;
  sub: string;
  desc: string;
  checks: readonly string[];
  tag: {
    label: string;
    variant: TypeCardTagVariant;
  };
}

interface SolutionTypeCardsProps {
  items: readonly SolutionTypeCardItem[];
  checkColor: string;
  highlightedId?: string;
  minCardWidth?: number;
  onCardClick?: (id: string) => void;
}

const highlight = keyframes`
  from {
    transform: scale(1.03);
    box-shadow: 0 0 26px var(--type-card-accent);
    border-color: transparent;
  }

  to {
    transform: scale(1);
    box-shadow: 0 0 0 transparent;
    border-color: var(--type-card-accent);
  }
`;

const Grid = styled.div<{ $minCardWidth: number }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(p) => p.$minCardWidth}px, 100%), 1fr)
  );
  gap: 1.5rem;
`;

const Card = styled.article<{
  $accentColor: string;
  $highlighted: boolean;
  $interactive: boolean;
}>`
  --type-card-accent: ${(p) => p.$accentColor};
  background: white;
  border: 1px solid color-mix(in srgb, var(--type-card-accent) 14%, transparent);
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 84px;
  cursor: ${(p) => (p.$interactive ? "pointer" : "default")};
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;

  ${(p) =>
    p.$highlighted
      ? css`
          animation: ${highlight} 4s linear;
        `
      : css`
          &:hover {
            border-color: color-mix(
              in srgb,
              var(--type-card-accent) 45%,
              transparent
            );
            box-shadow: 0 8px 28px
              color-mix(in srgb, var(--type-card-accent) 22%, transparent);
            transform: translateY(-3px);
          }
        `}

  &:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--type-card-accent) 45%, transparent);
    outline-offset: 3px;
  }
`;

const Header = styled.div<{ $background: string }>`
  background: ${(p) => p.$background};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
`;

const HeaderSubtitle = styled.p`
  margin: 0.2rem 0 0;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
`;

const Body = styled.div`
  padding: 1.5rem 1.75rem;
`;

const Description = styled.p`
  margin: 0 0 1.25rem;
  color: #4b5684;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
`;

const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #374151;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
`;

const tagColors: Record<
  TypeCardTagVariant,
  { background: string; color: string }
> = {
  blue: { background: "#dbeafe", color: "#1e40af" },
  cyan: { background: "#cffafe", color: "#155e75" },
  green: { background: "#dcfce7", color: "#166534" },
  orange: { background: "#ffedd5", color: "#9a3412" },
  purple: { background: "#ede9fe", color: "#5b21b6" },
};

const Tag = styled.span<{ $background: string; $color: string }>`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export function SolutionTypeCards({
  items,
  checkColor,
  highlightedId,
  minCardWidth = 300,
  onCardClick,
}: SolutionTypeCardsProps) {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    itemId: string,
  ) => {
    if (!onCardClick || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    onCardClick(itemId);
  };

  return (
    <Grid $minCardWidth={minCardWidth}>
      {items.map((item) => {
        const colors = tagColors[item.tag.variant];
        const accentColor = item.accentColor ?? checkColor;
        const interactive = Boolean(onCardClick);

        return (
          <Card
            id={item.id}
            key={item.id}
            $accentColor={accentColor}
            $highlighted={highlightedId === item.id}
            $interactive={interactive}
            onClick={() => onCardClick?.(item.id)}
            onKeyDown={(event) => handleKeyDown(event, item.id)}
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
          >
            <Header $background={item.color}>
              {item.icon}
              <div>
                <HeaderTitle>{item.title}</HeaderTitle>
                <HeaderSubtitle>{item.sub}</HeaderSubtitle>
              </div>
            </Header>

            <Body>
              <Description>{item.desc}</Description>
              <CheckList>
                {item.checks.map((check) => (
                  <CheckItem key={check}>
                    <CheckCircle2
                      size={15}
                      color={checkColor}
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    {check}
                  </CheckItem>
                ))}
              </CheckList>
              <Tag $background={colors.background} $color={colors.color}>
                {item.tag.label}
              </Tag>
            </Body>
          </Card>
        );
      })}
    </Grid>
  );
}
