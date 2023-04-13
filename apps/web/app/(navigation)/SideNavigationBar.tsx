"use client";

import { useTranslate } from "lib/hooks";
import { usePathname } from "next/navigation";
import { SideNavigationBar } from "ui";
import { Icon } from "ui";
import { NavList } from "ui";

import {
  BudgetsSubMenuNavListContents,
  TeamSubMenuNavListContents,
  SettingsSubMenuNavListContents,
} from "./SideNavigationBarNavListData";

export default function SideNav() {
  const { dict, t } = useTranslate("NavigationLayout");
  const { SideNav } = dict;
  const currentPage = usePathname() || "";

  const BudgetsSubMenuData = {
    title: "Budgets",
    sort: {
      method: () => {},
      icon: <Icon icon="filter_list" />,
    },
    searchInput: {
      placeholder: "Search budgets",
      icon: <Icon icon="search" color="#515151" />,
    },
    navigationList: (
      <NavList
        contents={BudgetsSubMenuNavListContents}
        currentPage={currentPage}
      />
    ),
    button: {
      method: () => {},
      label: "Add new budget",
    },
  };

  const TeamSubMenuData = {
    title: "Team",
    sort: {
      method: () => {},
      icon: <Icon icon="filter_list" />,
    },
    searchInput: {
      icon: <Icon icon="search" color="#515151" />,
      placeholder: "Search team",
    },
    navigationList: (
      <NavList
        contents={TeamSubMenuNavListContents}
        currentPage={currentPage}
      />
    ),
    button: {
      method: () => {},
      label: "Add new member",
    },
  };

  const SettingsSubMenuData = {
    title: "Settings",
    navigationList: (
      <NavList
        contents={SettingsSubMenuNavListContents}
        currentPage={currentPage}
      />
    ),
  };

  return (
    <SideNavigationBar
      items={[
        {
          href: "/budgets",
          icon: <Icon icon="wallet" iconSize={32} />,
          textValue: t(SideNav.budgetsItem),
          subMenu: BudgetsSubMenuData,
          id: 1,
        },
        {
          href: "/reports",
          icon: <Icon icon="query_stats" iconSize={32} />,
          textValue: t(SideNav.reportsItem),
          id: 2,
        },
        {
          href: "/team",
          icon: <Icon icon="account_circle" iconSize={32} />,
          textValue: t(SideNav.teamsItem),
          subMenu: TeamSubMenuData,
          id: 3,
        },
        {
          href: "/settings",
          icon: <Icon icon="settings" iconSize={32} />,
          textValue: t(SideNav.settingsItem),
          subMenu: SettingsSubMenuData,
          id: 4,
        },
      ]}
    />
  );
}
