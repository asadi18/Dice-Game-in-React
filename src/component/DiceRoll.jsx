import { useState } from "react";
import styled from "styled-components";
const DiceRoll = ({diceUpdate, currentDice}) => {
  


  return (
    <DiceContainer>
      <div className="img-container" onClick={diceUpdate}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Roll the Dice</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  .img-container img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

export default DiceRoll;
