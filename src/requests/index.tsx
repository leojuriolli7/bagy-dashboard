import { api } from "../services/api";

export const getAllProducts = api.get("/products");
export const getAllSales = (type: string) => api.get(`all-sales?type=${type}`);
export const getChartData = (storeId: any) =>
  api.get(`chartInfo?storeId=${storeId}`);
export const getAllStores = api.get("stores");
