import styled from "styled-components";
import chartCaptionPink from "../../assets/chartCaptionPink.svg";
import chartCaptionGrey from "../../assets/chartCaptionGrey.svg";

export const Container = styled.div`
  flex: 2;
`;

export const ChartTopInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 40px;
`;

export const ChartTitleContainer = styled.div``;

export const ChartTitle = styled.p`
  color: var(--black);
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ChartSubtext = styled.span`
  display: inline-block;
  color: var(--grey);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 10px;
`;

export const ChartCaptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const ChartCaption = styled.p`
  color: var(--grey);
  font-size: 0.9rem;
  padding-left: 25px;
  background: url(${chartCaptionPink}) left center no-repeat #fff;
`;

export const ChartCaptionGrey = styled(ChartCaption)`
  background: url(${chartCaptionGrey}) left center no-repeat #fff;
`;

export const ChartContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  box-shadow: -16px 27px 17px -25px rgb(0, 0, 0, 0.24);
`;
