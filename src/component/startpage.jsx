import styled from "styled-components";

const StartPage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dice-1.png" alt="Dice">
      </div>

      <div className="content">
        <h1>Play Dice Game</h1>
        <Button onClick={toggle}>Start Playing</Button>
      </div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  display: flex;
  max-width: 1180px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;
  gap: 20px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .content h1 {
    font-size: 96px;
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
