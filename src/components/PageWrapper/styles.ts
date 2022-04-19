import styled from "styled-components";

export const Container = styled.main`
  display: flex;
`;

export const PageContent = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 30px 40px;

  @media (max-width: 1180px) {
    height: auto;
  }

  @media (max-width: 800px) {
    padding: 30px 20px;
  }
`;
