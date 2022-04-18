import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StoreTotal = styled.div`
  display: flex;
  flex: 1;
  min-width: 250px;
  max-width: 260px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px;
`;

export const StoreTotalText = styled.p`
  text-align: center;
  color: var(--black);
  font-size: 3rem;
  font-weight: 800;
  -webkit-text-stroke: 1px #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--light-grey);
  border-radius: 10px;
  transition: 0.2s;
  min-width: 250px;
  max-width: 260px;
  padding: 22px;

  &:hover {
    cursor: pointer;
    border-color: #d0e2ff;

    p {
      color: var(--pink);
    }

    h2 {
      color: var(--pink);
    }
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--grey);
  transition: 0.2s;
`;

export const CardText = styled.p`
  text-align: center;
  color: var(--black);
  transition: 0.2s;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 20px;
`;
