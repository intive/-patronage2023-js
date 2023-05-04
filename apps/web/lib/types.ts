import { IconType } from "ui/Icon";

interface Currency {
  tag: string;
  locale: string;
}
interface Icon {
  name: string;
  foreground: string;
  background: string;
}
interface Category {
  id: number;
  name: string;
  icon: Icon;
}

interface Creator {
  id: string;
  name: string;
  avatar: string;
}
export interface Transaction {
  id: string;
  date: number;
  amount: number;
  category: Category;
  description: string;
  status: string;
  creator: Creator;
}

export interface Budget {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  startDate: number | null;
  endDate: number | null;
  limit: number;
  currency: Currency;
}

export interface BudgetTransaction {
  budgetID: string;
  transactions: Transaction[];
}
