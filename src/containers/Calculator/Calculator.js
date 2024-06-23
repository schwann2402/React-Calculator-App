import { Component } from 'react';
import NumberButton from '../../components/NumberButton';
import OperationButton from '../../components/OperationButton';
import ClearButton from '../../components/ClearButton';
import DecimalButton from '../../components/DecimalButton';
import DisplayScreen from '../../components/DisplayScreen';
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "0",
      process: '',
      operationSign: ""
    }
  }

  clickNumber = number => {
    let numberQuantityArray = this.state.process.split(/\D/)
    console.log(numberQuantityArray)
    if (this.state.operationSign !== "" && numberQuantityArray.length > 2) {
      let num1 = Number(numberQuantityArray[0]);
      let num2 = Number(numberQuantityArray[1]);
      console.log(num1);
      console.log(num2);
      switch(this.state.operationSign) {
        case '+':
        this.setState({
          result: (num1 + num2).toString() + `${this.state.operationSign}` + number,
          process: (num1 + num2).toString() + `${this.state.operationSign}` + number,
        })
        break;
        case '-':
        this.setState({
          ...this.state, 
          result: (num1 - num2).toString() + `${this.state.operationSign}` + number,
          process: (num1 - num2).toString() + `${this.state.operationSign}` + number,
        })
        break;
        case 'x':
        this.setState({
          ...this.state, 
          result: (num1 * num2).toString() + `${this.state.operationSign}` + number,
          process: (num1 * num2).toString() + `${this.state.operationSign}` + number,
        })
        break;
        case '/':
        this.setState({
          ...this.state, 
          result: (num1 / num2).toString() + `${this.state.operationSign}` + number,
          process: (num1 / num2).toString() + `${this.state.operationSign}` + number,
        })
        break;
        default: return
      }
    } else if (this.state.result != 0) {
      this.setState({
        ...this.state, 
        result: number.toString(),
        process: this.state.process + number.toString()
      })
    } else {
      this.setState({
        ...this.state,
        result: number.toString(),
        process: number.toString()
      })
    }
  };


  applyOperation = operation => {
    if (operation === "=" && this.state.operationSign === "") {
      this.setState({
        ...this.state,
        operationSign: ""
      })
    }
     else if (operation === '=' && this.state.process.includes(this.state.operationSign)) {
      let num1 = this.state.process.slice(0, this.state.process.indexOf(this.state.operationSign));
      let num2 = this.state.process.slice(this.state.process.indexOf(this.state.operationSign) + 1, this.state.process.length);
      switch(this.state.operationSign) {
        case '+':
        this.setState({
          result: Number(num1) +  Number(num2),
          process: Number(num1)+  Number(num2),
          operationSign: ""
        })
        break;
        case '-':
        this.setState({
          ...this.state, 
          result: Number(num1).toFixed(6) -  Number(num2).toFixed(6),
          process: Number(num1).toFixed(6) -  Number(num2).toFixed(6),
          operationSign: ""
        })
        break;
        case 'x':
        this.setState({
          ...this.state, 
          result: Number(num1).toFixed(6) *  Number(num2).toFixed(6),
          process: (Number(num1).toFixed(6) *  Number(num2).toFixed(6)),
          operationSign: ""
        })
        break;
        case '/':
        this.setState({
          ...this.state, 
          result: Number(num1).toFixed(6) /  Number(num2).toFixed(6),
          process: Number(num1).toFixed(6) /  Number(num2).toFixed(6),
          operationSign: ""
        })
        break;
        default: return
      }
    } 
    else if (this.state.operationSign === "=") {
      this.setState({
        process: this.state.process + operation,
        result: operation
      })
      console.log(this.state.operationSign)
    } else {
      this.setState({
        process: this.state.process + operation,
        result: this.state.result + operation,
        operationSign: operation
    })
  }
}

  applyDecimal = () => {
    this.setState({
      ...this.state,
      process: this.state.process + '.',
      result: this.state.result + '.'
    })
  }

  clear = () => {
    console.log('Clear result');
    this.setState({
      result: '0',
      process: '',
      operationSign: ""
    })
  }
  
  render() {
    return (
      <>
        <div className="row g-0">
          <div className="col-12">
            <div className="display-container p-2">
              <div className='process-display-screen'>{this.state.process}</div>
              <DisplayScreen className="display-screen" id="display" result={this.state.result}/>
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
                <DecimalButton id="decimal" value="."  applyDecimal={this.applyDecimal}/>
              </div>
            </div>
          </div>
          <div className="col-3">
            <OperationButton id="equals" text="=" color="blue" applyOperation={this.applyOperation}/>
          </div>
        </div>
      </>
    )
  }
}

export default Calculator;