import styled from "styled-components";
import { Icon } from "ui";
import { IconType } from "ui/Icon/index";

type categoryType = {
  id: number;
  name: string;
  icon: {
    name: string;
    foreground: string;
    background: string;
  };
};

export type IncomeExpenseIconProps = {
  category: categoryType;
  small?: boolean;
};

type BackgroundProps = {
  background: string;
  small?: boolean;
};

const IconBackground = styled.div<BackgroundProps>`
  width: ${({ small }) => (small ? "2.286em" : "2.5em")};
  height: ${({ small }) => (small ? "2.286em" : "2.5em")};
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => background || "lightgrey"};
`;

export const IncomeExpenseIcon = ({
  category,
  small,
}: IncomeExpenseIconProps) => {
  const { icon } = category;
  const { name, foreground, background } = icon;

  return (
    <IconBackground background={background} small={small}>
      <Icon
        icon={(name as IconType) || "help"}
        color={foreground || "black"}
        iconSize={24}
      />
    </IconBackground>
  );
};
