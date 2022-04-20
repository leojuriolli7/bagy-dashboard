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
  totalIncome: string;
  monthlyGoal: string;
  totalStores: string;
}

interface UserStoresInterface {
  id: number;
  storeName: string;
}

interface ShowInterface {
  show: boolean;
}

export type {
  AllSalesDataInterface,
  AllSalesInterface,
  ProductsInterface,
  ChartDataInterface,
  UserStoresInterface,
  ShowInterface,
};
