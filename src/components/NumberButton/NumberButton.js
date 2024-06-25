import './style.css';
import PropTypes from 'prop-types';

const NumberButton = ({ number, clickNumber, id }) => {
    return (
        <button id={id} className="number-button h-100 w-100" onClick={() => clickNumber(number)}>
            {number}
        </button> 
    );
}

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  clickNumber: PropTypes.func.isRequired
}

export default NumberButton;