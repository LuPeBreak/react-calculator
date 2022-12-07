import Input from "./components/Input/index";
import Button from "./components/Button/index";
import { Container, Content, Column, Row } from "./styles";
import { useState } from "react";
import reactLogo from './assets/react-logo.svg'

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${currentNumber === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(currentNumber) + Number(firstNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleSubtractNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== 0) {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubtractNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <img src={reactLogo} width={72} alt="logo react" />
      <h1>Calculadora React</h1>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={() => handleOnClear()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="*" onClick={handleMultiplyNumbers} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="#" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
