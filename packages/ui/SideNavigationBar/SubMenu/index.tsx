import styled from "styled-components";
import { ReactNode } from "react";
import { SearchInput } from "../../Input/SearchInput";
import { Button } from "../../Button";
import { Icon } from "../../Icon";

export type SubMenuDataProps = {
  title: string;
  sort?: {
    clickHandler: () => void;
    icon: string;
    sortAscending: boolean;
  };
  searchInput?: {
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onInputCleared?: () => void;
    value?: string;
  };
  navigationList?: ReactNode;
  button?: {
    clickHandler: () => void;
    label: string;
  };
};

type SubMenuProps = {
  subMenuDataObject: SubMenuDataProps;
} & React.HTMLProps<HTMLDivElement>;

const SubMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 80px;
  height: 100%;
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  margin-top: 68px;
  padding: 40px 4px 24px 16px;
  border-left: 1px solid
    ${({ theme }) => theme.sideNavigationBar.subMenu.separator};
  background-color: ${({ theme }) =>
    theme.sideNavigationBar.subMenu.background};
  box-shadow: 0px 6px 20px -2px rgba(26, 26, 26, 0.14);
`;

const SubMenuHeaderStyled = styled.div`
  padding-right: 12px; // + padding above = 16 to handle scroll
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.span`
  font-family: "Signika";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.sideNavigationBar.subMenu.title};
  line-height: 36px;
`;

const ButtonStyled = styled(Button)`
  width: 256px;
  position: fixed;
  bottom: 25px;
`;

const IconUpsideDown = styled(Icon)`
  transform: rotate(180deg);
  cursor: pointer;
`;

const IconWrapperStyled = styled.div`
  cursor: pointer;
`;

export const SubMenu = ({ subMenuDataObject: subMenuData }: SubMenuProps) => {
  const { title, sort, searchInput, navigationList, button } = subMenuData;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchInput?.onChange?.(e);
  };

  const onIconClicked = () => {
    sort?.clickHandler();
  };

  return (
    <SubMenuStyled>
      <MainDiv>
        <SubMenuHeaderStyled>
          <HeaderStyled>
            <Title>{title}</Title>
            <IconWrapperStyled onClick={onIconClicked}>
              {sort?.sortAscending ? (
                <Icon icon="filter_list" />
              ) : (
                <IconUpsideDown icon="filter_list" />
              )}
            </IconWrapperStyled>
          </HeaderStyled>
          {searchInput && (
            <SearchInput
              name="searchInput"
              type="text"
              placeholder={searchInput.placeholder}
              value={searchInput.value}
              onChange={onInputChange}
              onInputCleared={searchInput.onInputCleared}
            />
          )}
        </SubMenuHeaderStyled>
        {navigationList}
      </MainDiv>

      {button && (
        <ButtonStyled variant="secondary" onClick={() => button.clickHandler()}>
          {button.label}
        </ButtonStyled>
      )}
    </SubMenuStyled>
  );
};
