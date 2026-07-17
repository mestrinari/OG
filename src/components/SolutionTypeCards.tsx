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
  minCardWidth?: string;
  onCardClick?: (id: string) => void;
}

const highlight = keyframes`
  from {
    transform: scale(1.03);
    box-shadow: var(--number-zero) var(--number-zero) var(--value-26px) var(--type-card-accent);
    border-color: transparent;
  }

  to {
    transform: scale(var(--number-one));
    box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) transparent;
    border-color: var(--type-card-accent);
  }
`;

const Grid = styled.div<{ $minCardWidth: string }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(p) => p.$minCardWidth}, var(--percent-full)), var(--value-1fr))
  );
  gap: var(--space-6);
`;

const Card = styled.article<{
  $accentColor: string;
  $highlighted: boolean;
  $interactive: boolean;
}>`
  --type-card-accent: ${(p) => p.$accentColor};
  background: var(--color-surface);
  border: var(--value-1px) solid color-mix(in srgb, var(--type-card-accent) var(--percent-14), transparent);
  border-radius: var(--radius-card);
  overflow: hidden;
  scroll-margin-top: var(--size-anchor-offset);
  cursor: ${(p) => (p.$interactive ? "pointer" : "default")};
  transition: box-shadow var(--value-0-25s), transform var(--value-0-25s), border-color var(--value-0-25s);

  ${(p) =>
    p.$highlighted
      ? css`
          animation: ${highlight} var(--value-4s) linear;
        `
      : css`
          &:hover {
            border-color: color-mix(
              in srgb,
              var(--type-card-accent) var(--percent-45),
              transparent
            );
            box-shadow: var(--number-zero) var(--value-8px) var(--value-28px)
              color-mix(in srgb, var(--type-card-accent) var(--percent-22), transparent);
            transform: translateY(var(--value-neg-3px));
          }
        `}

  &:focus-visible {
    outline: var(--value-3px) solid
      color-mix(in srgb, var(--type-card-accent) var(--percent-45), transparent);
    outline-offset: var(--value-3px);
  }
`;

const Header = styled.div<{ $background: string }>`
  background: ${(p) => p.$background};
  padding: var(--space-6) var(--space-7);
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const HeaderTitle = styled.h3`
  margin: var(--space-0);
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--font-size-card-title);
  font-weight: var(--font-weight-bold);
`;

const HeaderSubtitle = styled.p`
  margin: var(--space-0-8) var(--number-zero) var(--number-zero);
  color: var(--alpha-white-75);
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
`;

const Body = styled.div`
  padding: var(--space-6) var(--space-7);
`;

const Description = styled.p`
  margin: var(--number-zero) var(--number-zero) var(--space-5);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-spacious);
`;

const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: var(--space-0);
  padding: var(--space-0);
  list-style: none;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  color: var(--color-gray-700);
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
`;

const tagColors: Record<
  TypeCardTagVariant,
  { background: string; color: string }
> = {
  blue: { background: "var(--color-blue-100)", color: "var(--color-blue-800)" },
  cyan: { background: "var(--color-cyan-100)", color: "var(--color-cyan-800)" },
  green: { background: "var(--color-green-100)", color: "var(--color-green-900)" },
  orange: { background: "var(--color-orange-100)", color: "var(--color-orange-800)" },
  purple: { background: "var(--color-purple-100)", color: "var(--color-purple-800)" },
};

const Tag = styled.span<{ $background: string; $color: string }>`
  display: inline-block;
  margin-top: var(--space-4);
  padding: var(--space-0-8) var(--space-2-4);
  border-radius: var(--radius-pill);
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: var(--font-body);
  font-size: var(--font-size-2xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-05em);
  text-transform: uppercase;
`;

export function SolutionTypeCards({
  items,
  checkColor,
  highlightedId,
  minCardWidth = "var(--size-300)",
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
                      size="var(--size-15)"
                      color={checkColor}
                      style={{ flexShrink: "var(--number-zero)", marginTop: "var(--size-2)" }}
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
