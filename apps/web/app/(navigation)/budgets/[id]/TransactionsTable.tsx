"use client";

import { useContext, useId } from "react";
import { ThemeContext } from "styled-components";
import { useTranslate } from "lib/hooks";

import { Transaction } from "lib/types";
import { Table } from "ka-table";
import { DataType } from "ka-table/enums";
import { ChildComponents, Column } from "ka-table/models";
import defaultOptions from "ka-table/defaultOptions";
import {
  Icon,
  Avatar,
  TransactionDropdownMenu,
  CategoryIcon,
  SkeletonLoading,
} from "ui";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

import {
  TableWrapperStyled,
  StyledCurrencyAmount,
} from "./TransactionsTable.styled";
import { TransactionsTableSuspense } from "./TransactionsTableSuspense";
import { IDataRowProps, ITableBodyProps } from "ka-table/props";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

type TransactionsTableProps = {
  currency: {
    tag: string;
    locale: string;
  };
  setSorting: (column: string) => void;
  transactions: Transaction[];
  isLoading: boolean;
};

export const TransactionsTable = ({
  currency,
  setSorting,
  transactions,
  isLoading,
}: TransactionsTableProps) => {
  const theme = useContext(ThemeContext);
  const { t, dict } = useTranslate("BudgetsPage");
  const { transactionsTable } = dict;

  const columns = [
    {
      key: "category",
      title: t(transactionsTable.tableColumnHeaders.category),
      isSortable: true,
      dataType: DataType.Object,
      style: {
        verticalAlign: "middle",
        lineHeight: 0,
        width: "27%",
      },
    },
    {
      key: "description",
      title: t(transactionsTable.tableColumnHeaders.name),
      isSortable: true,
      dataType: DataType.String,
      style: { width: "29%" },
    },
    {
      key: "amount",
      title: t(transactionsTable.tableColumnHeaders.amount),
      isSortable: true,
      dataType: DataType.Number,
      style: { width: "44%" },
    },
    {
      key: "creator",
      title: t(transactionsTable.tableColumnHeaders.creator),
      isSortable: true,
      dataType: DataType.Object,
      style: {
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: 0,
        paddingLeft: "5px",
        paddingRight: "5px",
        width: "100px",
      },
    },
    {
      key: "editColumn",
      style: {
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: 0,
        width: "28px",
      },
    },
    {
      key: "date",
      title: "Date",
      isSortable: false,
      dataType: DataType.Number,
    },
  ] as Column[];

  const getDayName = (timestamp: number) => {
    dayjs.extend(isToday);
    dayjs.extend(isYesterday);

    const date = dayjs(timestamp);
    const formattedDate = date.format("DD.MM.YYYY");

    let dayOfWeek = date.format("dddd");
    if (date.isToday()) {
      dayOfWeek = t(transactionsTable.groupRowDays.today);
    } else if (date.isYesterday()) {
      dayOfWeek = t(transactionsTable.groupRowDays.yesterday);
    }

    if (!(date.isToday() && date.isYesterday())) {
      const lowerCaseDay =
        dayOfWeek.toLowerCase() as keyof typeof transactionsTable.groupRowDays;
      dayOfWeek = t(transactionsTable.groupRowDays[lowerCaseDay]);
    }
    return `${dayOfWeek}, ${formattedDate}`;
  };

  const dropdownMenuItems = [
    {
      ComponentToRender: <div>Edit</div>,
      id: "edit-budget",
    },
    {
      ComponentToRender: <div>Clone</div>,
      id: "clone-budget",
    },
    {
      ComponentToRender: <div>Remove</div>,
      id: "remove-budget",
    },
  ];

  return (
    <TableWrapperStyled>
      <Table
        columns={columns}
        rowKeyField={"id"}
        data={transactions}
        groups={[{ columnKey: "date" }]}
        noData={{
          text: "No Data Found",
        }}
        childComponents={{
          cell: {
            content: (props) => {
              switch (props.column.key) {
                case "category":
                  return <CategoryIcon category={props.value} small={false} />;
                case "amount":
                  return (
                    <StyledCurrencyAmount
                      amount={props.value}
                      currencyOptions={currency}
                    />
                  );
                case "creator":
                  return (
                    <Avatar
                      className="avatar"
                      src={`/avatars/${props.value.avatar}`}
                    />
                  );
                case "editColumn":
                  return (
                    <TransactionDropdownMenu
                      items={dropdownMenuItems}
                      side="right"
                    />
                  );
              }
            },
          },
          groupCell: {
            content: (props) => {
              switch (props.column.key) {
                case "date":
                  const value = props.groupKey[props.groupIndex];
                  return <>{getDayName(value)}</>;
              }
            },
          },
          headCellContent: {
            content: ({ column }) => (
              <>
                <span>{column.title}</span>
                {column.key !== "editColumn" && (
                  <button onClick={() => setSorting(column.key)}>
                    <Icon
                      icon="sort"
                      iconSize={20}
                      color={theme.transactionsTable.sortIcon}
                    />
                  </button>
                )}
              </>
            ),
          },
          tableBody: {
            content: (props) => {
              return (
                isLoading && (
                  <TransactionsTableSuspense rowsNumber={5} {...props} />
                )
              );
            },
            elementAttributes: () => ({
              className: isLoading ? "loading-tbody" : undefined,
            }),
          },
        }}
      />
    </TableWrapperStyled>
  );
};
