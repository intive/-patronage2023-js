"use client";

import { TypoStyled, LinkStyled } from "app/(navigation)/HomePageComponents";
import { useTranslate } from "lib/hooks";
import { signIn, signOut, useSession } from "next-auth/react";

export const MainPageTranslated = () => {
  const { dict, t } = useTranslate("MainPage");
  const { data } = useSession();

  return (
    <>
      <TypoStyled>{t(dict.welcomeText)}</TypoStyled>
      <LinkStyled href="/sign-up">{t(dict.createAccountLink)}</LinkStyled>
      <button onClick={() => signOut()}>Log out</button>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => console.log(process.env.NEXTAUTH_URL)}>
        Check data
      </button>
    </>
  );
};
