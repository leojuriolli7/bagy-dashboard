import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

export function MobileSidebar({ show }: any) {
  const history = useLocation();
  const navigate = useNavigate();

  return (
    <S.NavContainer show={show}>
      <S.StyledMenu>
        <S.LinksList>
          <S.ListItem>
            <S.Link
              onClick={() => navigate("/")}
              isSelected={history.pathname === "/"}
            >
              Visao Geral
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
              Configuracoes
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
