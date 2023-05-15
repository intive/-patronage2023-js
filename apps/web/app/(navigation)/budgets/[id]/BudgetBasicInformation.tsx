"use client";

import { BudgetFixed } from "lib/types";
import { NavBudgetIcon, InfoTile } from "ui";
import { StyledAddInfoSpan } from "ui/InfoTile";
import { useTranslate } from "lib/hooks";

import {
  BasicInfoWrapper,
  BudgetIconStyled,
  InfoTileAmount,
  StyledDescription,
  StyledTitle,
  TileWrapper,
  TopSectionWrapper,
} from "./BudgetBasicInformation.styled";
import { iconNames } from "lib/iconValidation";
import styled from "styled-components";
import { EditBudget } from "app/(navigation)/EditBudget";
import { useState } from "react";
import { RemoveBudget } from "./RemoveBudget";
//TYPES
type BudgetBasicInfoProps = {
  budget: BudgetFixed;
};
//TYPES end

export function BudgetBasicInformation({ budget }: BudgetBasicInfoProps) {
  const { t, dict } = useTranslate("BudgetsPage");

  const { basicInformation } = dict;
  const { startDate, endDate, limit, currency, description, icon, name } =
    budget;
  //DATE formatting
  function convertTimestamp(timestamp: number) {
    const date = new Date(timestamp);

    return date.toLocaleDateString(t(basicInformation.dateFormats), {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
  }

  const TitleEditButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  `;

  //DATA to display for information tiles
  const dataRangeInfo = (
    <>
      {convertTimestamp(startDate)} - {convertTimestamp(endDate)}
    </>
  );

  const limitInfo = (
    <InfoTileAmount amount={limit} currencyOptions={currency} hidePlus />
  );

  const currencyInfo = (
    <>
      <span>{currency.tag}</span>
      <StyledAddInfoSpan>
        {t(
          basicInformation.currencyNames[
            currency.tag as keyof typeof basicInformation.currencyNames
          ]
        )}
      </StyledAddInfoSpan>
    </>
  );
  //DATA for information tiles end

  const [isEditBudgetModalOpen, setIsEditBudgetModalOpen] = useState(false);

  const openModal = () => {
    setIsEditBudgetModalOpen(true);
  };

  const closeModal = () => {
    setIsEditBudgetModalOpen(false);
  };

  const [deleteModalVisibility, setDeleteModalVisibility] =
    useState<boolean>(false);

  return (
    <>
      <BasicInfoWrapper>
        <TopSectionWrapper>
          <BudgetIconStyled
            icon={iconNames.includes(icon) ? icon : "notifications"}
          />
          <div>
            <TitleEditButton>
              <StyledTitle>{name}</StyledTitle>
              <NavBudgetIcon onClick={() => openModal()} icon={"edit"} />
              <NavBudgetIcon
                onClick={() => setDeleteModalVisibility(true)}
                icon={"delete"}
              />
            </TitleEditButton>

            <StyledDescription>{description}</StyledDescription>
          </div>
        </TopSectionWrapper>
        <TileWrapper>
          <InfoTile
            label={t(basicInformation.labels.period)}
            dataToRender={dataRangeInfo}
          />
          <InfoTile
            label={t(basicInformation.labels.limit)}
            dataToRender={limitInfo}
          />
          <InfoTile
            label={t(basicInformation.labels.currency)}
            dataToRender={currencyInfo}
          />
        </TileWrapper>
      </BasicInfoWrapper>
      {isEditBudgetModalOpen && (
        <EditBudget budget={budget} onClose={() => closeModal()} />
      )}
      {deleteModalVisibility && (
        <RemoveBudget
          budget={budget}
          onClose={() => setDeleteModalVisibility(false)}
        />
      )}
    </>
  );
}
