"use client";

import styled from "styled-components";

export type NavListProps = React.HTMLProps<HTMLUListElement>;

const NavListStyled = styled.ul`
    list-style: none;
    width:100%;
    height:auto;
`
export const NavList = ({
    children
  }: NavListProps) => {
    return (
      <NavListStyled>
       {children}
      </NavListStyled>
    );
  };
  
