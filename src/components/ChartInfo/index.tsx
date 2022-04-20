import { useState } from "react";
import {
  ChartDataInterface,
  UserStoresInterface,
} from "../../helper/interfaces";
import * as S from "./styles";

interface ChartInfoProps {
  userStores: UserStoresInterface[];
  setStoreId: any;
  chartData: ChartDataInterface;
}

export function ChartInfo({
  userStores,
  setStoreId,
  chartData,
}: ChartInfoProps) {
  const handleChange = (e: any) => {
    setStoreId(e.target.value);
  };

  const [currentMonthSum, setCurrentMonthSum] = useState(0);

  const statusCalculation =
    Number(
      chartData?.totalMonthIncome
        .replace(".", "")
        .substring(0, chartData.lastMonthIncome.length - 4)
    ) -
    Number(
      chartData?.lastMonthIncome
        .replace(".", "")
        .substring(0, chartData.lastMonthIncome.length - 4)
    );

  return (
    <S.Container>
      <S.ItemContainer>
        <S.InfoTitle>Loja</S.InfoTitle>
        <S.GraphInfoSelect onChange={(e) => handleChange(e)}>
          {userStores.map((store: UserStoresInterface) => (
            <S.SelectOption value={store.id} key={store.id}>
              {store.storeName}
            </S.SelectOption>
          ))}
        </S.GraphInfoSelect>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Mes</S.InfoTitle>
        <S.InfoSelected>Julho</S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Ano</S.InfoTitle>
        <S.InfoSelected>2020</S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Total de faturamento</S.InfoTitle>
        <S.InfoSelected>
          {chartData?.totalMonthIncome
            ? `R$${chartData.totalMonthIncome}`
            : "Indisponivel"}
        </S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Analise comparativa</S.InfoTitle>
        {chartData?.totalMonthIncome ? (
          <S.MonthlyIncomeStatusText
            status={statusCalculation > 0 ? "positive" : "negative"}
          >
            {statusCalculation > 0 ? "Positivo" : "Negativo"}
          </S.MonthlyIncomeStatusText>
        ) : (
          <S.InfoSelected>Indisponível</S.InfoSelected>
        )}
      </S.ItemContainer>
    </S.Container>
  );
}
