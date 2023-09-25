import styled from "styled-components"
const Guidelines = ()=>{
    return (
        <Guidense>
            <h2>Here is the Guidlines</h2>
            <li>First Select any Number</li>
            <li>Roll the Dice</li>
            <li>Dice = Selected ? You Won ! </li>
            <li>If you goes wrong then you will get -2 points</li>

        </Guidense>
    )
}

const Guidense = styled.div`

 background-color: #c6c8f8;
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 border-radius: 10px;
 max-width: 500px;
 margin-top: 30px;
 h2{
    padding-top: 10px;
    padding-left: 20px;
 }
 li{
    padding-left: 30px;
    padding-bottom: 30px;
 }



`



export default Guidelines