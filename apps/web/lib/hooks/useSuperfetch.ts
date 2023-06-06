import { useSession } from "next-auth/react";
import { useToast } from "ui";
import { useTranslate } from "./useTranslate";

export interface SuperOptions extends Omit<RequestInit, "headers" | "body"> {
  body?: object;
}

class SuperError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export default function useSuperfetch() {
  const { data: session } = useSession();
  const showToast = useToast();
  const { t, dict } = useTranslate("Errors");

  const superfetch = (
    url: string,
    //disable ts suggestion for headers since we are setting them up manually and allow body to be object
    options?: SuperOptions
  ) => {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: "Bearer " + session?.user.accessToken,
    };

    return fetch(url, {
      ...options,
      body: JSON.stringify(options?.body),
      headers,
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json().catch(() => ({}));
          return { ...data, httpStatus: res.status };
        } else if (res.status === 400) {
          const hardcodedError = "10.10";
          const data = await res.json().catch(() => ({}));
          console.log(data.ErrorCode);
          const errorCode  = data.ErrorCode.toString();
          console.log(typeof errorCode);
          showToast({
            variant: "error",
            message:
              // t(dict.title) + errorCode + " - " + t(dict[errorCode as typeof keyof dict]),
              `${t(dict.title)} ${errorCode} : ${t(dict[errorCode as typeof keyof dict])}`,
          });
        } else if (res.status > 401) {
          showToast({
            variant: "error",
            message: t(dict["defaultError"]),
          });
        }
        // CODE BELOW IS DRAFT AND WAIT FOR BE
        // } else if ((res.status === 400 && ErrorCode === "10.1") || "10.2") {
        //   console.log(
        //     t(dict.title) + " " + `${[ErroCode]}` + ": " + t(dict[ErrorCode])
        //   );
        // } else if ((res.status === 400 && ErrorCode === "")) {
        //   showToast({
        //     variant: "error",
        //     message: t(dict[""]),
        //   });
      })

      .catch(() => {
        throw new SuperError("Something went wrong", 500);
      });
  };

  return superfetch;
}
