import styled from "styled-components";

interface ShowInterface {
  show: boolean;
}

interface LinkInterface {
  isSelected: boolean;
}

export const NavContainer = styled.div<ShowInterface>`
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  z-index: 10;
  background-color: #363740;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  padding-right: 50px;

  @media (max-width: 425px) {
    width: 100%;
    padding-right: 2rem;
  }
`;

export const StyledMenu = styled.nav`
  margin-top: 50px;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  gap: 40px;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const ListItem = styled.li``;

export const Link = styled.a<LinkInterface>`
  text-decoration: none;
  color: ${({ isSelected }) =>
    isSelected ? "var(--pink)" : "var(--light-grey)"};
  transition: color 0.3s linear;
  font-size: 2rem;

  &:hover {
    color: var(--light-grey);
  }
`;
