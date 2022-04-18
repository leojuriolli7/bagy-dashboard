import * as S from "./styles";

export function Overview() {
  return (
    <S.Container>
      <S.CardContainer>
        <S.StoreTotal>
          <S.CardTitle>Total de Lojas</S.CardTitle>
          <S.StoreTotalText>7213</S.StoreTotalText>
        </S.StoreTotal>
        <S.Card>
          <S.CardTitle>Faturamento Total</S.CardTitle>
          <S.CardText>100.000,00</S.CardText>
        </S.Card>
        <S.Card>
          <S.CardTitle>Loja Destaque</S.CardTitle>
          <S.CardText>Estilo Pri</S.CardText>
        </S.Card>
        <S.Card>
          <S.CardTitle>Meta Mensal</S.CardTitle>
          <S.CardText>110.000,00</S.CardText>
        </S.Card>
      </S.CardContainer>
    </S.Container>
  );
}
