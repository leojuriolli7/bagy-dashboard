import * as S from "./styles";

export function MobileSidebar({ show }: any) {
  return (
    <S.NavContainer show={show}>
      <S.StyledMenu>
        <S.LinksList>
          <S.ListItem>
            <S.Link>Visao Geral</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Lojas</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Vendas</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Clientes</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Produtos</S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link>Planos e Metas</S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link>Configuracoes</S.Link>
          </S.ListItem>

          <S.ListItem>
            <S.Link>Sair</S.Link>
          </S.ListItem>
        </S.LinksList>
      </S.StyledMenu>
    </S.NavContainer>
  );
}
