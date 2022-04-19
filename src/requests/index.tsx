import { api } from "../services/api";

export const getHighlightedStore = api.get("/highlighted-store");
export const getAllProducts = api.get("/products");
export const getAllSales = (type: string) => api.get(`all-sales?type=${type}`);
