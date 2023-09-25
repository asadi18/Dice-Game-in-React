import styled from "styled-components";
const NumberSelector = ({setError, error,defnum, setNum}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numselectrester = (value)=>{
    setNum(value);
    setError("")
  }

  return (
    <NumSelectTab>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Rectangles
            isSelected={defnum === value}
            key={i}
            onClick={()=>numselectrester(value)}
          >
            {value}
          </Rectangles>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelectTab>
  );
};

const NumSelectTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`;

const Rectangles = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
export default NumberSelector;
