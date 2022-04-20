import { useState } from "react";
import {
  ChartDataInterface,
  UserStoresInterface,
} from "../../helper/interfaces";
import * as S from "./styles";

interface ChartInfoProps {
  userStores: UserStoresInterface[];
  setStoreId: React.Dispatch<React.SetStateAction<number>>;
  chartData: ChartDataInterface;
}

export function ChartInfo({
  userStores,
  setStoreId,
  chartData,
}: ChartInfoProps) {
  const [selectWidth, setSelectWidth] = useState("140px");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStoreId(Number(e.target.value));
    const storeName = userStores.filter(
      (store) => store.id === Number(e.target.value)
    );
    setSelectWidth(`${storeName[0]?.storeName.length * 15}px`);
  };

  const sumCurrentMonth = chartData?.data.reduce(
    (accumulator: any, object: any) => {
      return accumulator + object.july;
    },
    0
  );

  const sumLastMonth = chartData?.data.reduce(
    (accumulator: any, object: any) => {
      return accumulator + object.june;
    },
    0
  );

  const subtractMonths = sumCurrentMonth - sumLastMonth;

  return (
    <S.Container>
      <S.ItemContainer>
        <S.InfoTitle>Loja</S.InfoTitle>
        <S.ChartInfoSelect
          onChange={(e) => handleChange(e)}
          style={{ width: selectWidth }}
        >
          {userStores.map((store: UserStoresInterface) => (
            <S.SelectOption value={store.id} key={store.id}>
              {store.storeName}
            </S.SelectOption>
          ))}
        </S.ChartInfoSelect>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Mês</S.InfoTitle>
        <S.InfoSelectedUnderline>Julho</S.InfoSelectedUnderline>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Ano</S.InfoTitle>
        <S.InfoSelectedUnderline>2020</S.InfoSelectedUnderline>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Total de faturamento</S.InfoTitle>
        <S.InfoSelected>
          {chartData?.data ? `R$${sumCurrentMonth}.000,00` : "Indisponivel"}
        </S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Análise comparativa</S.InfoTitle>
        {chartData?.data ? (
          <>
            <S.MonthlyIncomeStatusText
              status={subtractMonths > 0 ? "positive" : "negative"}
            >
              {subtractMonths > 0 ? "Positivo" : "Negativo"}
            </S.MonthlyIncomeStatusText>
            <S.MonthlyIncomeComparison
              status={subtractMonths > 0 ? "positive" : "negative"}
            >
              {`${subtractMonths > 0 ? "+" : "-"}R$${Math.abs(
                subtractMonths
              )}.000,00`}
            </S.MonthlyIncomeComparison>
          </>
        ) : (
          <S.InfoSelected>Indisponível</S.InfoSelected>
        )}
      </S.ItemContainer>
    </S.Container>
  );
}
