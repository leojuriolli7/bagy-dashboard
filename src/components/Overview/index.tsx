import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";

interface HighlightedStoreInterface {
  id: number;
  monthlyGoal: string;
  store: string;
  totalIncome: string;
  totalStores: string;
}

export function Overview() {
  const [highlightedStore, setHighlightedStore] =
    useState<HighlightedStoreInterface>();
  const [allSales, setAllSales] = useState();
  const [allProducts, setAllProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("weekly");

  const fetchData = () => {
    const getHighlightedStore = api.get("/highlighted-store");
    const getAllProducts = api.get("products");

    const getAllSales = api.get(`all-sales?type=${type}`);

    Promise.all([getHighlightedStore, getAllProducts, getAllSales]).then(
      (value) => {
        setHighlightedStore(value[0].data);
        setAllProducts(value[1].data);
        setAllSales(value[2].data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.LoadingScreenContainer>
          <S.LoadingText>Carregando...</S.LoadingText>
        </S.LoadingScreenContainer>
      ) : (
        <S.CardContainer>
          <S.StoreTotal>
            <S.CardTitle>Total de Lojas</S.CardTitle>
            <S.StoreTotalText>{highlightedStore?.totalStores}</S.StoreTotalText>
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
      )}
    </S.Container>
  );
}
