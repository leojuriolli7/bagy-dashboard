import * as S from "./styles";
import dashboardLogo from "../../assets/dashboardLogo.svg";
import Geral from "../../assets/geral.svg";
import Lojas from "../../assets/lojas.svg";
import Clientes from "../../assets/clientes.svg";
import Produtos from "../../assets/produtos.svg";
import Planos from "../../assets/planos.svg";
import Vendas from "../../assets/vendas.svg";
import Config from "../../assets/config.svg";
import Sair from "../../assets/sair.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../Icon";

export function Sidebar() {
  const history = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoLink
          href="https://site.bagy.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <S.Logo
            src={dashboardLogo}
            title="Ir para o site da Bagy"
            alt="Dashboard Bagy"
          />
        </S.LogoLink>
      </S.LogoContainer>
      <S.Navigation>
        <S.MenuList>
          <S.ListItem
            onClick={() => navigate("/")}
            isSelected={history.pathname === "/"}
          >
            <S.LinkAndIconContainer>
              <Icon src={Geral} />
              <S.Link>Visão Geral</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/lojas")}
            isSelected={history.pathname === "/lojas"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Lojas} />
              <S.Link>Lojas</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/vendas")}
            isSelected={history.pathname === "/vendas"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Vendas} />
              <S.Link>Vendas</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/clientes")}
            isSelected={history.pathname === "/clientes"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Clientes} />
              <S.Link>Clientes</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/produtos")}
            isSelected={history.pathname === "/produtos"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Produtos} />
              <S.Link>Produtos</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/planos_e_metas")}
            isSelected={history.pathname === "/planos_e_metas"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Planos} />
              <S.Link>Planos e Metas</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/configuracoes")}
            isSelected={history.pathname === "/configuracoes"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Config} />
              <S.Link>Configurações</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>

          <S.ListItem
            onClick={() => navigate("/")}
            isSelected={history.pathname === "/logout"}
          >
            <S.LinkAndIconContainer>
              <S.Icon src={Sair} />
              <S.Link>Sair</S.Link>
            </S.LinkAndIconContainer>
          </S.ListItem>
        </S.MenuList>
      </S.Navigation>
    </S.Container>
  );
}
