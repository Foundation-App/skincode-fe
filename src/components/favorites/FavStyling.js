import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`;

export const FavoriteWrapper = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
`;

export const FavH1 = styled.h1`
  font-size: 2.5rem;
  color: #C68642;
  margin: 50px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FavImg = styled.img`
  width: 20px;
  height:20px;
  margin:10px;
  margin-bottom: 20px;
  }
`;