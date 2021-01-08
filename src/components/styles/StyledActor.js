import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
 
  background-image: linear-gradient(90deg,#f61b10,#ef0963);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    
  }

  .actor-name {
    display: block;
    font-size: 20px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
