import styled from "styled-components";
import arrowSvg from "../../assets/arrow.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--light-grey);
  flex: 1;
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

export const GraphInfoSelect = styled.select`
  position: relative;
  appearance: none;
  border: none;
  outline: none;
  background: url(${arrowSvg}) bottom 0px right 0px no-repeat #fff;
  font-size: 1.6rem;
  padding-right: 15px;
  padding-bottom: 3px;
  color: black;
  font-weight: 700;
  margin-top: 5px;
  text-decoration: underline;
`;
