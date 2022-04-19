import * as S from "./styles";

export function HamburguerIcon({ show, setShow }: any) {
  return (
    <S.BurguerMenuContainer show={show} onClick={() => setShow(!show)}>
      <S.BurguerLines />
      <S.BurguerLines />
      <S.BurguerLines />
    </S.BurguerMenuContainer>
  );
}
