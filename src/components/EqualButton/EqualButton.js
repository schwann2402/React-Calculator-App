const EqualButton = ({calculateResult, text}) => {
  <button className="equal-button h-100 w-100" onClick={calculateResult}>
    {text}
  </button>
}

EqualButton.propTypes = {
  calculateResult: PropTypes.func.isRequired
}

export default EqualButton