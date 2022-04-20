import { Icon } from "../Icon";
import searchIcon from "../../assets/search.svg";
import notificationIcon from "../../assets/notification.svg";
import profileImage from "../../assets/profileImage.jpg";
import * as S from "./styles";
import { HamburguerIcon } from "../HamburguerIcon";

interface PageHeaderInterface {
  title?: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PageHeader({ title, show, setShow }: PageHeaderInterface) {
  return (
    <S.Container>
      <S.PageTitleAndHamburguerContainer>
        <S.PageTitle data-cy="page-title">{title}</S.PageTitle>
        <HamburguerIcon show={show} setShow={setShow} />
      </S.PageTitleAndHamburguerContainer>
      <S.TopRightContainer>
        <S.SearchAndNotificationsContainer>
          <Icon src={searchIcon} />
          <Icon src={notificationIcon} />
        </S.SearchAndNotificationsContainer>

        <S.ProfileContainer>
          <S.ProfileName>Leonardo Dias</S.ProfileName>
          <S.ProfileImage src={profileImage} />
        </S.ProfileContainer>
      </S.TopRightContainer>
    </S.Container>
  );
}
