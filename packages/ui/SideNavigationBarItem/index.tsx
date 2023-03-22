import styled, { css } from "styled-components";
import { Icon } from "ui";
import { IconProps } from "../Icon";
import Link from "next/link";

/*
Side navigation item:
HTML div element containing children: Icon component and HTML span text
dedicated icon 
text below icon
Active state: green color, left green border.
Inactive: gray color.
Hover: unspecified in design (probably green color similar to active state but without border?)
*/

export const SideNavigationBarItem = ({
  href,
  icon,
  textValue,
  activeFlag,
}: SideNavigationBarItemProps) => {
  return (
    <ListItemStyled>
      <LinkStyled href={href}>
        <SideNavigationBarItemStyled
          activeFlag={activeFlag}
          href={href}
          textValue={textValue}
          icon={icon}
        >
          <Icon
            icon={icon}
            iconSize={30}
            color={activeFlag ? "#1e4c40" : "#7e7e7e"}
          />
          <SpanStyled fontSize={10}>{textValue}</SpanStyled>
        </SideNavigationBarItemStyled>
      </LinkStyled>
    </ListItemStyled>
  );
};

export type SideNavigationBarItemProps = {
  activeFlag?: boolean;
  href: string;
  textValue: string;
} & React.HTMLProps<HTMLDivElement> &
  IconProps;

const SideNavigationBarItemStyled = styled.div<SideNavigationBarItemProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  height: auto;
  width: 60px;

  padding: 7px 14px 7px 14px;
  color: #7e7e7e;
  ${({ activeFlag }) =>
    activeFlag &&
    css`
      border-left: 3px solid #459175;
      color: #1e4c40;
    `}
`;

type SpanProps = {
  fontSize: number;
} & React.HTMLProps<HTMLSpanElement>;

const SpanStyled = styled.span<SpanProps>`
  text-align: center;
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `};
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ListItemStyled = styled.li`
  list-style: none;
  padding: 0;
`;
