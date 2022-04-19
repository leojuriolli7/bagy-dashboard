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
  padding: 32px 0 0 0;

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

export const SalesTableHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 8px 0 30px;
`;

export const SalesTableTitleContainer = styled.div``;

export const SalesTableTitle = styled.p`
  color: var(--black);
  font-size: 1.3rem;
  font-weight: bold;
`;

export const SalesTableSubTitle = styled.p`
  color: var(--blue);
  font-size: 1rem;
  font-weight: bold;
  margin-top: 6px;
`;

export const SalesTableSelect = styled.select``;

export const SelectOption = styled.option``;

export const CompanyName = styled.p``;

export const CompanySalesAndIncome = styled.p``;

export const SalesTable = styled.table`
  width: 100%;
  margin-top: 24px;
  padding: 0 16px;
  border-collapse: collapse;
`;

export const SalesTableRow = styled.tr`
  border-bottom: 1px solid #dfe0eb;

  &:last-child {
    border: none;
  }
`;

export const SalesData = styled.td`
  padding: 20px 30px;
  color: var(--grey);
  font-weight: 500;
  font-size: 1rem;

  &:nth-child(3) {
    text-align: end;
  }
`;

export const SalesHighlightData = styled(SalesData)`
  color: var(--black);
  font-weight: bold;
`;
