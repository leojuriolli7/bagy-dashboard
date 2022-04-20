import styled from "styled-components";
import { ShowInterface } from "../../helper/interfaces";

export const BurguerMenuContainer = styled.button<ShowInterface>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 40px;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  @media (max-width: 840px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--black);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: ${({ show }) => show && "white"};

    :first-child {
      transform: ${({ show }) => (show ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ show }) => (show ? "0" : "1")};
      transform: ${({ show }) => (show ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ show }) => (show ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const BurguerLines = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: var(--black);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;
