import * as S from "./styles";

interface ProductsInterface {
  date: string;
  id: number;
  price: string;
  productName: string;
  store: string;
}

export function ProductsTable({ products }: any) {
  return (
    <S.Container>
      <S.ProductsTable>
        <S.TableRow>
          <S.TableHead>Produto</S.TableHead>
          <S.TableHead>Loja</S.TableHead>
          <S.TableHead>Preço</S.TableHead>
          <S.TableHead>Data</S.TableHead>
        </S.TableRow>
        {products.map((product: ProductsInterface) => (
          <S.TableRow key={product.id}>
            <S.ProductData>{product.productName}</S.ProductData>
            <S.ProductData>{product.store}</S.ProductData>
            <S.ProductData>
              <S.ProductPrice>{`R$${product.price}`}</S.ProductPrice>
            </S.ProductData>
            <S.ProductData>
              <S.ProductDate>{product.date}</S.ProductDate>
            </S.ProductData>
          </S.TableRow>
        ))}
      </S.ProductsTable>
    </S.Container>
  );
}
