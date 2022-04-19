import { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllSales,
  getHighlightedStore,
} from "../../requests";
import { AllSalesTable } from "../AllSalesTable";
import { ProductsTable } from "../ProductsTable";
import { ChartInfo } from "../ChartInfo";
import * as S from "./styles";

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

export function Overview() {
  const [highlightedStore, setHighlightedStore] =
    useState<HighlightedStoreInterface>();
  const [allSales, setAllSales] = useState<AllSalesInterface>();
  const [products, setProducts] = useState<ProductsInterface[]>();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("weekly");

  const fetchData = () => {
    Promise.all([getHighlightedStore, getAllSales(type), getAllProducts]).then(
      (response) => {
        setHighlightedStore(response[0].data);
        setAllSales(response[1].data[0]);
        setProducts(response[2].data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    getAllSales(type).then((response) => setAllSales(response.data[0]));
  }, [type]);

  return (
    <S.Container>
      {loading ? (
        <S.LoadingScreenContainer>
          <S.LoadingText>Carregando...</S.LoadingText>
        </S.LoadingScreenContainer>
      ) : (
        <>
          <S.CardContainer>
            <S.StoreTotal>
              <S.CardTitle>Total de Lojas</S.CardTitle>
              <S.StoreTotalText>
                {highlightedStore?.totalStores}
              </S.StoreTotalText>
            </S.StoreTotal>
            <S.Card>
              <S.CardTitle>Faturamento Total</S.CardTitle>
              <S.CardText>{highlightedStore?.totalIncome}</S.CardText>
            </S.Card>
            <S.Card>
              <S.CardTitle>Loja Destaque</S.CardTitle>
              <S.CardText>{highlightedStore?.store}</S.CardText>
            </S.Card>
            <S.Card>
              <S.CardTitle>Meta Mensal</S.CardTitle>
              <S.CardText>{highlightedStore?.monthlyGoal}</S.CardText>
            </S.Card>
          </S.CardContainer>
          <S.ChartContainer>
            <div className="graphTemp"></div>
            <ChartInfo />
          </S.ChartContainer>
          <S.TablesContainer>
            <AllSalesTable allSales={allSales} setType={setType} />
            <ProductsTable products={products} />
          </S.TablesContainer>
        </>
      )}
    </S.Container>
  );
}
