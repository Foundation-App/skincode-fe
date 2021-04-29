import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #FFF;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  margin: 50px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StepsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const StepsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const StepsButton = styled.button`
  justify-content: center;
  align-items: center;
  border:none;
  background: transparent;
  justify-content: center;
  align-items: center;
  cursor:pointer;

`;

export const StepsImage= styled.img`
  border:none;
  background: transparent;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  &:active, &:hover {
    transform: scale(1.5);
  }

`;


