import PropTypes from 'prop-types';
import './style.css';

const OperationButton = ({ applyOperation, text }) => {
  return (
    <button className="operation-button h-100 w-100" onClick={() => applyOperation(text)}>
        {text}
    </button>
  )
}

OperationButton.propTypes = {
  text: PropTypes.string.isRequired,
  applyOperation: PropTypes.func.isRequired
}

export default OperationButton