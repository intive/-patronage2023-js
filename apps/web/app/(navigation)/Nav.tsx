"use client";

import styled from "styled-components";
import { Icon, Logo, Avatar } from "ui";
import { useSession } from "next-auth/react";

const NavBar = styled.nav`
  box-sizing: border-box;
  display: flex;
  background-color: ${({ theme }) => theme.nav.main};
  margin: 0;
  padding: 15px 15px;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  width: 100%;
`;

const ActionWrapper = styled.div`
  display: flex;
  min-width: 150px;
  justify-content: space-around;
  align-items: center;
`;

const AvatarStyled = styled(Avatar)`
  height: 2.1em;
  width: 2.1em;
`;
export default function Nav() {
  const { data } = useSession();
  return (
    <NavBar>
      <Logo white />
      <ActionWrapper>
        {data && (
          <>
            <Icon icon="notifications" color="white" />
            <AvatarStyled src={data.user.image} outlined />
          </>
        )}
      </ActionWrapper>
    </NavBar>
  );
}
