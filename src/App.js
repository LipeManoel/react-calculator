import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [state, setState] = useState('clear');

  const handleAddNumber = (number) => {
    if (state === 'result') {
      setCurrentNumber(number);
      setState('clear');
      return;
    }

    setCurrentNumber(prev =>
      prev === '0' ? number : prev + number
    );
  };

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setState('clear');
  };

  const calculate = () => {
    const a = Number(firstNumber);
    const b = Number(currentNumber);

    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b === 0 ? 'Erro' : a / b;
      default:
        return b;
    }
  };

  const handleOperation = (op) => {
    if (firstNumber !== '0' && operation !== '') {
      const result = calculate();
      setFirstNumber(String(result));
      setCurrentNumber('0');
    } else {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }

    setOperation(op);
    setState('clear');
  };

  const handleEquals = () => {
    if (operation === '' || firstNumber === '0') return;

    const result = calculate();
    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation('');
    setState('result');
  };

  const handleEraseNumbers = () => {
    setCurrentNumber(prev =>
      prev.length > 1 ? prev.slice(0, -1) : '0'
    );
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="<" onClick={handleEraseNumbers} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="*" onClick={() => handleOperation('*')} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
