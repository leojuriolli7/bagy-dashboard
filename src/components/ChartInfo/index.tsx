import * as S from "./styles";

export function ChartInfo() {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.InfoTitle>Loja</S.InfoTitle>
        <S.GraphInfoSelect>
          <option>Estilo Pri</option>
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
        <S.InfoSelected>R$ 45.000,00</S.InfoSelected>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.InfoTitle>Analise comparativa</S.InfoTitle>
        <S.InfoSelected>Positivo</S.InfoSelected>
      </S.ItemContainer>
    </S.Container>
  );
}
