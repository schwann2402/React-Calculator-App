import { Component } from 'react';
import NumberButton from '../../components/NumberButton';
import OperationButton from '../../components/OperationButton';
import ClearButton from '../../components/ClearButton';
import DecimalButton from '../../components/DecimalButton';
import DisplayScreen from '../../components/DisplayScreen';
import EqualButton from '../../components/EqualButton';
import './Calculator.css';
import ProcessScreen from '../../components/ProcessScreen';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '0',
      result: 0,
      process: '',
      currentOperation: '',
      multiplier: 1
    }
  }

  clickNumber = number => {
    let num = this.state.number
    let proc = this.state.process

    if(num === '0') {
      num = ''
      proc = ''
    }

    if(proc.match(/[+|\-|x|\/]$/)) {
      num = ''
    }

    this.setState({
      ...this.state,
      number: num + number,
      process: proc + number
    })
  }

  executeOperation = (operator1, operation, operator2, multiplier) => {
    let res = 0
    switch(operation) {
      case '+':
        res = operator1 + operator2
        break

      case '-':
        res = operator1 - operator2
        break

      case 'x':
        res = operator1 * operator2
        break

      case '/':
        res = operator1 / operator2
        break
    }

    return res * multiplier
  }

  applyOperation = operation => {
    let newState = this.state

    if(!newState.currentOperation) {
      newState = {
        ...newState,
        result: Number(newState.number)
      }
    }

    if(newState.process.match(/[+|\-|x|\/]$/)) {
      newState = {
        ...newState,
        process: operation != '-' ? newState.process.slice(0, -1) : newState.process,
        currentOperation: '',
        multiplier: 1
      }

      if(operation == '-') {
        newState = {
          ...newState,
          multiplier: -1
        }
      }
    }

    if(newState.currentOperation) {
      console.log(newState.currentOperation, newState.multiplier)
      const res = this.executeOperation(newState.result, newState.currentOperation, Number(newState.number), newState.multiplier)
      newState = {
        ...newState,
        result: res,
        number: +res.toFixed(4),
        multiplier: 1
      }
    }

    this.setState({
      ...newState,
      currentOperation: newState.multiplier == -1 ? this.state.currentOperation : operation,
      process: newState.process + operation
    })
  }

  applyDecimal = () => {
    if(this.state.number.includes('.'))
      return

    this.setState({
      ...this.state,
      number: this.state.number + '.',
      process: this.state.process + '.'
    })
  }

  clear = () => {
    this.setState({
      result: 0,
      number: '0',
      // operationSign: [],
      process: '',
      currentOperation: '',
      multiplier: 1
    })
 
  }

  calculateResult = () => {
    if(this.state.process.match(/[+|\-|x|\/]$/))
      return

    const res = this.executeOperation(this.state.result, this.state.currentOperation, Number(this.state.number), this.state.multiplier)
    this.setState({
      ...this.state,
      result: res,
      number: +res.toFixed(4),
      currentOperation: ''
    })
  }
  
  render() {
    return (
      <div className="whole-calculator">
        <h1>ReactJs Calculator</h1>
        <div className="calculator-container container w-50">
          <div className="row g-0">
            <div className="col-12">
              <div className="display-container p-2">
                {this.state.result}
                <ProcessScreen id="process" process={this.state.process} />
                <DisplayScreen className="display-screen hidden" id="display" result={this.state.number} />
              </div>
              
            </div>
          </div>
          <div className="row g-0">
            <div className="col-6">
              <ClearButton id="clear" clear={this.clear}/>
            </div>
            <div className="col-3">
              <OperationButton id="divide" text="/" applyOperation={this.applyOperation} />
            </div>
            <div className="col-3">
              <OperationButton id="multiply" text="x" applyOperation={this.applyOperation} />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-3">
              <NumberButton id="seven" number={7} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <NumberButton id="eight" number={8} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <NumberButton id="nine" number={9} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <OperationButton id="subtract" text="-" applyOperation={this.applyOperation}/>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-3">
              <NumberButton id="four" number={4} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <NumberButton id="five" number={5} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <NumberButton id="six" number={6} clickNumber={this.clickNumber} />
            </div>
            <div className="col-3">
              <OperationButton id="add" text="+" applyOperation={this.applyOperation}/>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-9">
              <div className="row g-0">
                <div className="col-4">
                  <NumberButton id="one" number={1} clickNumber={this.clickNumber} />
                </div>
                <div className="col-4">
                  <NumberButton id="two" number={2} clickNumber={this.clickNumber} />
                </div>
                <div className="col-4">
                  <NumberButton id="three" number={3} clickNumber={this.clickNumber} />
                </div>
              </div>
              <div className="row g-0">
                <div className="col-8">
                  <NumberButton id="zero" number={0} clickNumber={this.clickNumber} />
                </div>
                <div className="col-4">
                  <DecimalButton id="decimal" value="." applyDecimal={this.applyDecimal}/>
                </div>
              </div>
            </div>
            <div className="col-3">
              <EqualButton id="equals" text="=" calculateResult={this.calculateResult}/>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Calculator;