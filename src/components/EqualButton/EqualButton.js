import PropTypes from 'prop-types'
import './style.css'

const EqualButton = ({calculateResult, text, id}) => {
  return(
  <button id={id} className="equal-button h-100 w-100" onClick={calculateResult}>
    {text}
  </button>
  )
}

EqualButton.propTypes = {
  calculateResult: PropTypes.func.isRequired
}

export default EqualButton