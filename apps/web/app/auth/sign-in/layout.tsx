"use client";

import styled from "styled-components";
import { Card, Logo } from "ui";
import { LayoutProps } from "../layout";
import { device } from "lib/css-variables";
import { useState, useEffect } from "react";

export default function SignInLayout({ children }: LayoutProps) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowWidth);
  }, [windowWidth]);

  useEffect(() => {
    setIsDesktop(windowWidth >= 768 ? true : false);
  }, [windowWidth]);

  return (
    <ContentStyled>
      <SectionStyled>
        <Logo logoWidth={138} white />
        <H1Styled>Log in with your email</H1Styled>
        <ParagraphStyled>
          Use your email to log in to your team workspace
        </ParagraphStyled>
      </SectionStyled>
      <FormWrapperStyled>
        <Card minHeight="100%" padding={isDesktop ? "48px 10vh" : "24px"}>
          {children}
        </Card>
      </FormWrapperStyled>
    </ContentStyled>
  );
}

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media ${device.desktop} {
    flex-direction: row;
    width: 100%;
  }
`;

const SectionStyled = styled.div`
  color: white;
  width: 100%;
  padding: 52px 16px 0px 16px;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-left: 128px;
    padding-right: 64px;
  }
`;

const FormWrapperStyled = styled.div`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  padding: 8px;

  @media ${device.desktop} {
    height: 100vh;
    padding: 12vh 64px;
  }
`;

const H1Styled = styled.h1`
  font-family: "Signika", sans-serif;
  font-size: 1.5em;
  line-height: 1.5em;
  margin-top: 16px;

  @media ${device.desktop} {
    margin-top: 32px;
    font-size: 40px;
    line-height: 40px;
  }
`;

const ParagraphStyled = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;

  @media ${device.desktop} {
    line-height: 24px;
    margin-top: 1em;
  }
`;
