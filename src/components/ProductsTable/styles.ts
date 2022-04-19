import styled from "styled-components";

export const Container = styled.div`
  max-width: 550px;
  width: 100%;
  height: 350px;
  background: #fff;
  overflow-y: scroll;
  box-shadow: 1px 7px 7px 0px rgb(0 0 0 / 31%);
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 30px 0 0 0;

  &::-webkit-scrollbar-track {
    background-color: #c4c4c450;
    border-radius: 15px;
    margin: 5px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fc3c8d70;
  }
`;

export const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:last-child {
    td {
      border: none;
    }
  }
`;

export const TableRow = styled.tr``;

export const TableHead = styled.th`
  color: var(--black);
  font-size: 1.3rem;
  font-weight: bold;
  text-align: start;
  padding-bottom: 56px;

  &:nth-child(1) {
    padding-left: 30px;
  }
`;

export const ProductData = styled.td`
  padding: 20px 0;
  color: var(--dark-grey);
  font-size: 0.9rem;
  border-bottom: 1px solid #dfe0eb;

  &:nth-child(1) {
    padding-left: 30px;
  }
`;

export const ProductPrice = styled.span`
  font-size: 12px;
  font-weight: bold;
  background: var(--blue);
  color: white;
  padding: 5px 15px;
  border-radius: 9px;
`;

export const ProductDate = styled(ProductPrice)`
  background: var(--yellow);
`;
