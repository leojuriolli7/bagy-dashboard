import styled from "styled-components";

interface ListItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  background-color: #363740;
  width: 260px;
  display: flex;
  flex-direction: column;
  padding-top: 26px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-left: 27px;
`;

export const Logo = styled.img``;

export const Navigation = styled.nav`
  width: 100%;
  margin-top: 18px;
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li<ListItemProps>`
  width: 100%;
  list-style: none;
  background-color: ${(props) => props.isSelected && "#463746"};
  border: ${(props) => props.isSelected && "1px solid white"};
  border-left: ${(props) => props.isSelected && "3px solid #FC3C8D"};
  padding: ${(props) => (props.isSelected ? "17px 24px" : "18px 27px")};

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;

export const LinkAndIconContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Icon = styled.img``;

export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
`;
