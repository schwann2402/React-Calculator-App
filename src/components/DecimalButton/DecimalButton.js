import './style.css'
import PropTypes from 'prop-types'

const DecimalButton = ({applyDecimal, id}) => (
    <button id={id} className="decimal-button h-100 w-100" onClick={() => applyDecimal()}>.</button>
)

DecimalButton.propTypes = {
  applyDecimal: PropTypes.func.isRequired
}

export default DecimalButton