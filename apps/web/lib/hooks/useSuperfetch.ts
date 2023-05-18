import { useSession } from "next-auth/react";

interface SuperOptions extends Omit<RequestInit, "headers" | "body"> {
  body: object;
}

export default function useSuperfetch() {
  const { data: session } = useSession();

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
          return { data: await res.json(), status: res.status };
        }
        return { data: null, status: res.status };
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  };

  return superfetch;
}
