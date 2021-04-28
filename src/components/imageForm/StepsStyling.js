import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  margin-top: 40px;
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  display: flex;
  flex-direction: space-between;
`;

export const StepsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  width: 500px;
  padding: 40px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const StepsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const StepsH1 = styled.h1`
  font-size: 2.5rem;
  color: #C68642;
  margin-bottom: 64px;
`;

export const StepsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const StepsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
