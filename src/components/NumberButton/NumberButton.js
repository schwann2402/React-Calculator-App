import './style.css';
import PropTypes from 'prop-types';

const NumberButton = ({ number, clickNumber }) => {
    return (
        <button className="number-button h-100 w-100" onClick={() => clickNumber(number)}>
            {number}
        </button> 
    );
}

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  clickNumber: PropTypes.func.isRequired
}

export default NumberButton;