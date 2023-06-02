import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 24px;
  width: 96px;
  height: 144px;
  border: 2px solid white;
  border-radius: 12px;
`;

export const StyledCardBack = styled(StyledCard)`
  background: DarkTurquoise;
`;

export const StyledCardFront = styled(StyledCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: White;
  font-size: 72px;
`;