"use client";

import { Logo } from "ui";
import { useTranslate } from "lib/hooks";

import { usePathname } from "next/navigation";
import {
  BackgroundFlex,
  ContentStyled,
  CustomCard,
  FormWrapperStyled,
  H1Styled,
  ParagraphStyled,
  SectionStyled,
  TypoStyled,
} from "./layout.styles";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RegFlowLayout({ children }: LayoutProps) {
  const pathName = usePathname();
  const { t, dict } = useTranslate("RegFlowLayout");
  const { signIn, signUp } = dict;

  type leftColumnText = {
    signIn: {
      h1: string;
      p: string;
    };
    signUp: {
      h1: string;
      p: string;
    };
  };

  const leftColumnText = {
    signIn: {
      h1: t(signIn.h1),
      p: t(signIn.paragraph),
    },
    signUp: {
      h1: t(signUp.h1),
      p: t(signUp.paragraph),
    },
  };

  const getLeftColumnText = (element: string) => {
    if (pathName === "/sign-in")
      return leftColumnText.signIn[
        element as keyof typeof leftColumnText.signIn
      ];
    if (pathName === "/sign-up")
      return leftColumnText.signUp[
        element as keyof typeof leftColumnText.signIn
      ];
  };

  return (
    <BackgroundFlex>
      <ContentStyled>
        <SectionStyled>
          <TypoStyled>
            <Logo logoWidth={138} white />
            <H1Styled>{getLeftColumnText("h1")}</H1Styled>
            <ParagraphStyled>{getLeftColumnText("p")}</ParagraphStyled>
          </TypoStyled>
        </SectionStyled>
        <FormWrapperStyled>
          <CustomCard>{children}</CustomCard>
        </FormWrapperStyled>
      </ContentStyled>
    </BackgroundFlex>
  );
}
