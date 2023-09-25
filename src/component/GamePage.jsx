import DiceRoll from "./DiceRoll";
import NumberSelector from "./NumberSelect";
import ScorePage from "./ScorePage";
import styled from "styled-components";
import { useState } from "react";
import Guidelines from "./Guidelines";

const GamePage = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [defnum, setNum] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showGuide, setShowGuide] = useState(false)

  const generateRandomNum = (e) => {
    return Math.floor(Math.random() * e) + 1;
  };

  const diceUpdate = () => {
    if (!defnum) {
      return setError("Please Select the Number First!");
    }

    const randNum = generateRandomNum(6);
    setCurrentDice((prev) => randNum);

    if (defnum == randNum) {
      setScore(score + randNum);
    } else {
      setScore(score - 2);
    }
    setNum(undefined);
  };

  const resetScore = ()=>{
    setScore(0)
  }

  return (
    <MainDiv>
      <div className="topSection">
        <ScorePage score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          defnum={defnum}
          setNum={setNum}
        />
      </div>
      <DiceRoll currentDice={currentDice} diceUpdate={diceUpdate} />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=> setShowGuide((prev) =>!prev)}
        >{showGuide? "Hide": 'Show'} Guidelines</Button>
      </div>
      {showGuide && <Guidelines/>}
    </MainDiv>
  );
};

const MainDiv = styled.main`
  padding: 15px;
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
  }
  .btns{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

  }
`;

const Button = styled.button`
  background: black;
  padding: 10px 18px;
  color: white;
  min-width: 220px;
  max-width: 220px;
  min-height: 44px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    font-weight: 600;
    transition: 0.3s background ease-in;
  }
`;

export default GamePage;
