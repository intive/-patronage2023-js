import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TransactionDropdownMenu } from "ui";
import styled from "styled-components";
import Link from "next/link";
import React, { ReactElement } from "react";

//type for every item in DropdownMenu
type DropdownMenuSingleItem = {
  ComponentToRender?: ReactElement;
  id: string;
};

//creating a wrapper for proper display on Storybook
const TransactionDropdownMenuWrapper = styled.div`
  margin: 120px 100px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`;
const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;
  padding: 0;
  text-align: left;
  cursor: pointer;
`;

//DropdownMenu accepts `children` prop in order to be more generic - it can be used in diffrent places with diffrent items.
const dummyItems: Array<DropdownMenuSingleItem> = [
  {
    ComponentToRender: <LinkStyled href="">Edit</LinkStyled>,
    id: "edit-budget",
  },
  {
    ComponentToRender: <ButtonStyled>Clone</ButtonStyled>,
    id: "clone-budget",
  },
  {
    ComponentToRender: <ButtonStyled>Remove</ButtonStyled>,
    id: "remove-budget",
  },
];

export default {
  title: "TransactionDropdownMenu",
  component: TransactionDropdownMenu,
} as ComponentMeta<typeof TransactionDropdownMenu>;

const Template: ComponentStory<typeof TransactionDropdownMenu> = ({ ...args }) => (
  <TransactionDropdownMenuWrapper>
    <TransactionDropdownMenu {...args} items={dummyItems}/>
  </TransactionDropdownMenuWrapper>
);

export const Simple = Template.bind({});
Simple.args = {
  side: "right",
};
