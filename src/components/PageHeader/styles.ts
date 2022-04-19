import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitleAndHamburguerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: var(--black);
  font-weight: 800;
  -webkit-text-stroke: 1px #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 10px;

  @media (max-width: 840px) {
    margin-left: 30px;
  }

  @media (max-width: 800px) {
    margin-left: 50px;
  }
`;

export const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const SearchAndNotificationsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  @media (max-width: 434px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  padding-left: 20px;
  border-left: 1px solid var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;

  &:hover {
    cursor: pointer;

    p {
      color: var(--pink);
    }

    img {
      outline-color: var(--pink);
      outline-offset: -1px;
    }
  }
`;

export const ProfileName = styled.p`
  color: var(--black);
  font-weight: 500;

  @media (max-width: 555px) {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 47px;
  border-radius: 50%;
  outline: 2px solid var(--light-grey);
  outline-offset: 2px;
`;
