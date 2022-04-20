import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
import exitButtonImage from "../../assets/exitButton.svg";

interface MobileSideBarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileSidebar({ show, setShow }: MobileSideBarProps) {
  const history = useLocation();
  const navigate = useNavigate();

  return (
    <S.NavContainer show={show}>
      <S.ExitButtonContainer>
        <S.ExitButton onClick={() => setShow(!show)} src={exitButtonImage} />
      </S.ExitButtonContainer>
      <S.StyledMenu>
        <S.LinksList>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/")}
              isSelected={history.pathname === "/"}
            >
              Visão Geral
            </S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/lojas")}
              isSelected={history.pathname === "/lojas"}
            >
              Lojas
            </S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/vendas")}
              isSelected={history.pathname === "/vendas"}
            >
              Vendas
            </S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/clientes")}
              isSelected={history.pathname === "/clientes"}
            >
              Clientes
            </S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/produtos")}
              isSelected={history.pathname === "/produtos"}
            >
              Produtos
            </S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link
              onClick={() => navigate("/planos_e_metas")}
              isSelected={history.pathname === "/planos_e_metas"}
            >
              Planos e Metas
            </S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link
              onClick={() => navigate("/configuracoes")}
              isSelected={history.pathname === "/configuracoes"}
            >
              Configurações
            </S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link
              onClick={() => navigate("/")}
              isSelected={history.pathname === "/logout"}
            >
              Sair
            </S.Link>
          </S.ListItem>
        </S.LinksList>
      </S.StyledMenu>
    </S.NavContainer>
  );
}
