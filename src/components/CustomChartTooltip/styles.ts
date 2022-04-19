import styled from "styled-components";

export const TooltipContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TooltipText = styled.p`
  font-size: 1.1rem;
  color: var(--pink);
`;

export const TooltipTextGrey = styled(TooltipText)`
  color: var(--grey);
`;
