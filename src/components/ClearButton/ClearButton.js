import PropTypes from 'prop-types'
import './style.css'

const ClearButton = ({ clear, id }) => (
    <button id={id} className="clear-button h-100 w-100" onClick={() => clear()}>AC</button>
)

ClearButton.propTypes = {
  clear: PropTypes.func.isRequired
}

export default ClearButton