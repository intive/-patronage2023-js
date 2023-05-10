import React from "react";

import styled from "styled-components";
import BudgetStatistics from "./BudgetStatistics";
import { type BudgetGeneralInfo } from "lib/types";
import { useQuery } from "@tanstack/react-query";
import { env } from "env.mjs";
import { useSession } from "next-auth/react";

interface Props {
  budget: BudgetGeneralInfo;
}

const DetailsWrapperStyled = styled.div`
  width: 100%;
  border: 2px solid #f7f7f7;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 24px 32px;
`;

const BudgetDetails = ({ budget }: Props) => {
  const { data: session } = useSession();

  const { id, currency, startDate, endDate } = budget;

  const { data: statistics } = useQuery({
    queryKey: ["statistics", id],
    queryFn: async () => {
      return fetch(
        `${env.NEXT_PUBLIC_API_URL}/budgets/${id}/statistics?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + session?.user.accessToken,
          },
        }
      ).then((res) => res.json());
    },
    enabled: !!session,
  });

  console.log(statistics);

  return (
    <DetailsWrapperStyled>
      <div>lewy</div>
      <BudgetStatistics />
    </DetailsWrapperStyled>
  );
};

export default BudgetDetails;
