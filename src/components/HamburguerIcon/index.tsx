import * as S from "./styles";

interface HamburguerIconProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HamburguerIcon({ show, setShow }: HamburguerIconProps) {
  return (
    <S.BurguerMenuContainer show={show} onClick={() => setShow(!show)}>
      <S.BurguerLines />
      <S.BurguerLines />
      <S.BurguerLines />
    </S.BurguerMenuContainer>
  );
}
