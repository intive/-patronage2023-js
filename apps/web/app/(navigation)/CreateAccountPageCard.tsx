"use client";

import { CurrencySelect } from "ui";
import { CardStyled, TypoStyled, LinkStyled } from "./main-page-components";
import { useTranslate } from "lib/hooks";

export const CreateAccountPageCard = () => {
  const { dict, t } = useTranslate("CreateAccountPage");

  return (
    <CardStyled>
      <TypoStyled>{t(dict.welcomeText)}</TypoStyled>
      <LinkStyled href="/sign-in">{t(dict.createAccountLink)}</LinkStyled>
      <br></br>
      <CurrencySelect />
    </CardStyled>
  );
};
