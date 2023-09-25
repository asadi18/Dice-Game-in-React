import styled from "styled-components";
const ScorePage = ({score}) => {
  return (
    <Score>
      <h1> {score} </h1>
      <p>Total Score</p>
    </Score>
  );
};

export default ScorePage;

const Score = styled.div`
  
  max-width: 200px;
  text-align: center;
  

  h1{
    font-size: 86px;
    line-height: 2px;
    
  }
  p{
  
    font-size: 24px;
    font-weight: 500px;
  }
`;
