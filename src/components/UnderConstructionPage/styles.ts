import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  @media (max-width: 1180px) {
    margin: 0;
  }

  @media (max-width: 400px) {
    justify-content: flex-start;
    margin-top: 60px;
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  margin-top: 30px;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--black);
`;
