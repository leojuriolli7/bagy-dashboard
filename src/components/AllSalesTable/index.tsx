import {
  AllSalesDataInterface,
  AllSalesInterface,
} from "../../helper/interfaces";
import * as S from "./styles";

interface AllSalesTableProps {
  allSales: AllSalesInterface;
  setType: any;
}

export function AllSalesTable({ allSales, setType }: AllSalesTableProps) {
  const handleChange = (e: any) => {
    setType(e.target.value);
  };

  return (
    <S.Container>
      <S.SalesTableHeadContainer>
        <S.SalesTableTitleContainer>
          <S.SalesTableTitle>Total de compras</S.SalesTableTitle>
          <S.SalesTableSubTitle>{`Valor Geral: ${allSales.total_value}`}</S.SalesTableSubTitle>
        </S.SalesTableTitleContainer>
        <S.SelectContainer>
          <S.SalesTableSelect onChange={(e) => handleChange(e)}>
            <S.SelectOption value="weekly">Semanal</S.SelectOption>
            <S.SelectOption value="monthly">Mensal</S.SelectOption>
            <S.SelectOption value="annual">Anual</S.SelectOption>
          </S.SalesTableSelect>
        </S.SelectContainer>
      </S.SalesTableHeadContainer>
      <S.SalesTable>
        <S.SalesTableBody>
          {allSales?.data.map((sale: AllSalesDataInterface) => (
            <S.SalesTableRow key={sale.id}>
              <S.SalesHighlightData>{sale.store}</S.SalesHighlightData>
              <S.SalesData>{`${sale.totalSales} compras`}</S.SalesData>
              <S.SalesData>{`R$${sale.income}`}</S.SalesData>
            </S.SalesTableRow>
          ))}
        </S.SalesTableBody>
        <tfoot></tfoot>
      </S.SalesTable>
    </S.Container>
  );
}
