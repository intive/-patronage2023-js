const dictionary = {
  NavigationLayout: {
    SideNav: {
      budgetsItem: { en: "Budgets", pl: "Budżety" },
      reportsItem: { en: "Reports", pl: "Raporty" },
      settingsItem: { en: "Settings", pl: "Ustawienia" },
      teamsItem: { en: "Teams", pl: "Zespoły" },
    },
  },
  RegFlowLayout: {
    signIn: {
      h1: {
        en: "Log in with your email",
        pl: "Zaloguj się za pomocą swojego adresu email",
      },
      paragraph: {
        en: "Use your email to log in to your team workspace",
        pl: "Użyj swojego adresu email, aby zalogować się do obszaru roboczego zespołu",
      },
    },
    signUp: {
      h1: {
        en: "Get started with your free account today",
        pl: "Zacznij korzystać z bezpłatnego konta już dziś",
      },
      paragraph: {
        en: "No credit card required",
        pl: "Karta kredytowa nie jest wymagana",
      },
    },
  },
  WelcomePage: {
    welcomeText: { en: "Welcome to Inbudget", pl: "Witaj w Inbudget" },
  },
  MainPage: {
    welcomeText: { en: "Welcome to Inbudget", pl: "Witaj w Inbudget" },
    createAccountLink: {
      en: "Create my free account!",
      pl: "Utwórz bezpłatne konto!",
    },
  },
  SignInPage: {
    form: {
      errorMessage: {
        en: "Invalid credentials. Please try again.",
        pl: "Nieprawidłowy email lub hasło. Proszę spróbuj ponownie.",
      },
      emailInput: {
        label: { en: "Email", pl: "Email" },
        wrongFormatError: {
          en: "This is not a valid email",
          pl: "To nie jest prawidłowy adres email",
        },
      },
      passwordInput: {
        label: { en: "Password", pl: "Hasło" },
        min3CharactersError: {
          en: "Password must have at least 3 characters",
          pl: "Hasło musi mieć co najmniej 3 znaki",
        },
      },
      submitButton: { en: "Log In", pl: "Zaloguj" },
    },
  },
  SignUpPage: {
    paragraph: {
      en: "Hello from Sign-Up page",
      pl: "Witaj ze strony rejestracji",
    },
    emailScreen: {
      inputLabel: {
        en: "Email",
        pl: "Email",
      },
      invalidEmailError: {
        en: "This is not a valid email",
        pl: "To nie jest prawidłowy adres email",
      },
      buttonNext: {
        en: "Continue",
        pl: "Dalej",
      },
      footer: {
        en: "Already have an account?",
        pl: "Posiadasz już konto?",
      },
      footerLink: {
        en: "Log in",
        pl: "Zaloguj się",
      },
    },
    successErrorScreen: {
      status: {
        error: {
          subheader: {
            en: "The account with this email already exists",
            pl: "Konto z tym adresem e-mail już istnieje",
          },
          header: {
            en: "Something went wrong",
            pl: "Coś poszło nie tak",
          },
          button: {
            en: "Back to the registration process",
            pl: "Powrót do rejestracji",
          },
        },
        success: {
          subheader: {
            en: "You've successfully created your account",
            pl: "Pomyślnie utworzyłeś swoje konto",
          },
          header: {
            en: "Congratulations",
            pl: "Gratulacje",
          },
          button: {
            en: "Log in to your account",
            pl: "Zaloguj się",
          },
        },
      },
    },
  },
  BudgetsPage: { title: { en: "Budgets page", pl: "Budżety" } },
  ReportsPage: { title: { en: "Reports page", pl: "Raporty" } },
  SettingsPage: { title: { en: "Settings page", pl: "Ustawienia" } },
  TeamPage: { title: { en: "Team page", pl: "Zespoły" } },
};

export default dictionary;

export type dictionaryType = typeof dictionary;
