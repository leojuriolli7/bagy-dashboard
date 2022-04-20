import * as S from "./styles";
import developmentImage from "../../assets/dev.png";

export function UnderConstructionPage() {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={developmentImage} />
      </S.ImageContainer>
      <S.Text>Em breve...</S.Text>
    </S.Container>
  );
}
