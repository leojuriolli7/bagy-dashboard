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
`;

export const MenuList = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li<ListItemProps>`
  width: 100%;
  list-style: none;
  background-color: ${(props) => props.isSelected && "#463746"};
  border: ${(props) => props.isSelected && "1px solid white"};
  border-left: ${(props) => props.isSelected && "3px solid #FC3C8D"};
  padding: ${(props) => (props.isSelected ? "13px 24px" : "14px 27px")};
  margin-top: 15px;

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
