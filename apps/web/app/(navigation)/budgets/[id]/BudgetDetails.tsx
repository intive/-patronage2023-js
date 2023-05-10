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
  padding: 24px 32px;
`;

const BudgetDetails = ({ budget }: Props) => {
  const { data: session } = useSession();

  const { id } = budget;

  const startDate = "2020-03-01";
  const endDate = "2024-01-01";

  const { data: statistics } = useQuery({
    queryKey: ["mainStatistics"],
    queryFn: async () => {
      return fetch(
        `${env.NEXT_PUBLIC_API_URL}budgets/${id}/statistics?startDate=${startDate}&endDate=${endDate}`,
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

  return (
    <DetailsWrapperStyled>
      {/* statistics do lewego */}
      <div>lewy</div>
      <BudgetStatistics budget={budget} />
    </DetailsWrapperStyled>
  );
};

export default BudgetDetails;
