import styled from "styled-components";
import arrowSvg from "../../assets/arrow.svg";

interface MonthlyIncomeStatusTextInterface {
  status: "positive" | "negative";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--light-grey);
  flex: 1;

  @media (max-width: 1350px) {
    flex-direction: row;
    border: 1px solid var(--light-grey);
    border-radius: 20px;
  }
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid var(--light-grey);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 120px;
  width: 100%;

  &:last-child {
    border: none;
  }

  @media (max-width: 1350px) {
    height: 140px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const InfoTitle = styled.p`
  color: var(--grey);
  font-weight: 600;
  font-size: 1.1rem;
`;

export const InfoSelected = styled.p`
  font-size: 1.6rem;
  color: black;
  font-weight: 700;
  margin-top: 5px;
`;

export const MonthlyIncomeStatusText = styled(
  InfoSelected
)<MonthlyIncomeStatusTextInterface>`
  color: ${({ status }) => (status === "positive" ? "#219653" : "red")};
`;

export const InfoSelectedUnderline = styled(InfoSelected)`
  background: url(${arrowSvg}) bottom right no-repeat #fff;
  padding-right: 13px;
  padding-bottom: 2px;
  text-decoration: underline;
`;

export const ChartInfoSelect = styled.select`
  position: relative;
  appearance: none;
  border: none;
  outline: none;
  background: url(${arrowSvg}) bottom right no-repeat #fff;
  font-size: 1.6rem;
  padding-right: 15px;
  padding-bottom: 2px;
  color: black;
  font-weight: 700;
  margin-top: 5px;
  text-align: center;
  text-decoration: underline;
`;

export const SelectOption = styled.option``;
