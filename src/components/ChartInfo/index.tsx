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
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStoreId(Number(e.target.value));
  };

  // const statusCalculation =
  //   Number(
  //     chartData?.totalMonthIncome
  //       .replace(".", "")
  //       .substring(0, chartData.lastMonthIncome.length - 4)
  //   ) -
  //   Number(
  //     chartData?.lastMonthIncome
  //       .replace(".", "")
  //       .substring(0, chartData.lastMonthIncome.length - 4)
  //   );

  const sumCurrentMonth = chartData.data.reduce(
    (accumulator: any, object: any) => {
      return accumulator + object.july;
    },
    0
  );

  const sumLastMonth = chartData.data.reduce(
    (accumulator: any, object: any) => {
      return accumulator + object.june;
    },
    0
  );

  return (
    <S.Container>
      <S.ItemContainer>
        <S.InfoTitle>Loja</S.InfoTitle>
        <S.ChartInfoSelect onChange={(e) => handleChange(e)}>
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
          {chartData?.data
            ? `R$${sumCurrentMonth - sumLastMonth}.000,00`
            : "Indisponivel"}
        </S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Análise comparativa</S.InfoTitle>
        {chartData?.data ? (
          <S.MonthlyIncomeStatusText
            status={
              sumCurrentMonth - sumLastMonth > 0 ? "positive" : "negative"
            }
          >
            {sumCurrentMonth - sumLastMonth > 0 ? "Positivo" : "Negativo"}
          </S.MonthlyIncomeStatusText>
        ) : (
          <S.InfoSelected>Indisponível</S.InfoSelected>
        )}
      </S.ItemContainer>
    </S.Container>
  );
}
