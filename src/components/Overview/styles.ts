import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  margin-top: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 1600px) {
    gap: 15px;
  }
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
  margin-top: 10px;

  @media (min-width: 1600px) {
    font-size: 2.6rem;
  }
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

  @media (min-width: 1600px) {
    min-width: 200px;
    max-width: 255px;
    padding: 25px 0;
  }

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
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--grey);
  transition: 0.2s;

  @media (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const CardText = styled.p`
  text-align: center;
  color: var(--black);
  transition: 0.2s;
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 16px;

  @media (min-width: 1600px) {
    font-size: 2rem;
  }
`;

export const LoadingScreenContainer = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey);
`;
export const LoadingText = styled.p`
  color: var(--black);
  font-size: 1.5rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid var(--light-grey);
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1125px;

  @media (min-width: 1600px) {
    max-width: 1070px;
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    padding-bottom: 20px;
  }

  @media (max-width: 1090px) {
    display: none;
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 30px;

  @media (min-width: 1600px) {
    gap: 15px;
  }

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
