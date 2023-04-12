"use client";
import styled from "styled-components";
import { CheckboxWrapper } from "./CheckboxWrapper";

//creating imitation of RightCard content

const DummyContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const DescriptionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 15px;
`;

const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
`;

export const H3Styled = styled.h3`
  font-size: 0.9em;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

//it stands for component that will be passed into MultiCardLayout in AsideCard
export const DummyAsideCardContent = () => {
  return (
    <DummyContentWrapper>
      <DescriptionsWrapper>
        <H3Styled>Categories</H3Styled>
        <H3Styled>Manage</H3Styled>
      </DescriptionsWrapper>
      <CheckboxesWrapper>
        <CheckboxWrapper
          title="Home spendings"
          iconName="home"
          color="#1E4C40"
        />
        <CheckboxWrapper
          title="Subscriptions"
          iconName="subscriptions"
          color="#643400"
        />
        <CheckboxWrapper
          title="Car"
          iconName="directions_car"
          color="#003150"
        />
        <CheckboxWrapper
          title="Grocery"
          iconName="shopping_cart"
          color="#5A092F"
        />
      </CheckboxesWrapper>
    </DummyContentWrapper>
  );
};
