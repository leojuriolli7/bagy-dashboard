import { Icon } from "../Icon";
import searchIcon from "../../assets/search.svg";
import notificationIcon from "../../assets/notification.svg";
import profileImage from "../../assets/profileImage.jpg";
import * as S from "./styles";

export function PageHeader({ title }: any) {
  return (
    <S.Container>
      <S.PageTitle>{title}</S.PageTitle>
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
