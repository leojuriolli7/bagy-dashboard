import * as S from "./styles";

export function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <S.TooltipContainer>
        <S.TooltipText>{`R$${payload[0].value}.000,00`}</S.TooltipText>
        <S.TooltipTextGrey>{`R$${payload[1].value}.000,00`}</S.TooltipTextGrey>
      </S.TooltipContainer>
    );
  }

  return null;
}
