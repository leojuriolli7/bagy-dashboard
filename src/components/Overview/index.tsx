import { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllSales,
  getAllStores,
  getChartData,
  getHighlightedStore,
} from "../../requests";
import { AllSalesTable } from "../AllSalesTable";
import { ProductsTable } from "../ProductsTable";
import { ChartInfo } from "../ChartInfo";
import * as S from "./styles";
import { Chart } from "../Chart";
import "animate.css";
import {
  HighlightedStoreInterface,
  AllSalesInterface,
  ProductsInterface,
  ChartDataInterface,
  UserStoresInterface,
} from "../../helper/interfaces";

export function Overview() {
  const [highlightedStore, setHighlightedStore] =
    useState<HighlightedStoreInterface>();
  const [allSales, setAllSales] = useState<AllSalesInterface>();
  const [products, setProducts] = useState<ProductsInterface[]>();
  const [chartData, setChartData] = useState<ChartDataInterface>();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("weekly");
  const [userStores, setUserStores] = useState<UserStoresInterface[]>();
  const [storeId, setStoreId] = useState(1);

  const fetchData = () => {
    Promise.all([
      getHighlightedStore,
      getAllSales(type),
      getAllProducts,
      getChartData(storeId),
      getAllStores,
    ]).then((response) => {
      setHighlightedStore(response[0].data);
      setAllSales(response[1].data[0]);
      setProducts(response[2].data);
      setChartData(response[3].data[0]);
      setUserStores(response[4].data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    getAllSales(type).then((response) => setAllSales(response.data[0]));
  }, [type]);

  useEffect(() => {
    getChartData(storeId).then((response) => setChartData(response.data[0]));
  }, [storeId]);

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
            <Chart chartData={chartData!} />
            <ChartInfo
              userStores={userStores!}
              setStoreId={setStoreId!}
              chartData={chartData!}
            />
          </S.ChartContainer>
          <S.TablesContainer>
            <AllSalesTable allSales={allSales!} setType={setType} />
            <ProductsTable products={products!} />
          </S.TablesContainer>
        </>
      )}
    </S.Container>
  );
}
