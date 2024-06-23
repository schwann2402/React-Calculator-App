import PropTypes from 'prop-types'

const DisplayScreen = ({result}) => (
  <div>
    <div className='display-screen w-100 text-end p-2'>{result}</div>
  </div>
)

DisplayScreen.propTypes = {
  result: PropTypes.number.isRequired
}

export default DisplayScreen
