interface HighlightedStoreInterface {
  id: number;
  monthlyGoal: string;
  store: string;
  totalIncome: string;
  totalStores: string;
}

interface AllSalesDataInterface {
  id: number;
  store: string;
  totalSales: string;
  income: string;
}

interface AllSalesInterface {
  id: number;
  type: "weekly" | "annual" | "monthly";
  total_value: string;
  data: AllSalesDataInterface[];
}

interface ProductsInterface {
  date: string;
  id: number;
  price: string;
  productName: string;
  store: string;
}

interface DataInterface {
  day: number;
  june: number;
  july: number;
}

interface ChartDataInterface {
  storeId: number;
  totalMonthIncome: string;
  lastMonthIncome: string;
  store: string;
  data: DataInterface[];
}

interface UserStoresInterface {
  id: number;
  storeName: string;
}

interface ShowInterface {
  show: boolean;
}

export type {
  HighlightedStoreInterface,
  AllSalesDataInterface,
  AllSalesInterface,
  ProductsInterface,
  ChartDataInterface,
  UserStoresInterface,
  ShowInterface,
};
