import PropTypes from 'prop-types'
import './style.css'

const DisplayScreen = ({result, id}) => (
  <div id={id} className='display-screen w-100 text-end p-2'>
    {result}
  </div>
) 

DisplayScreen.propTypes = {
  result: PropTypes.number.isRequired
}

export default DisplayScreen

