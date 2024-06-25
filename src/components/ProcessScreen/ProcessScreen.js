import PropTypes from 'prop-types'

const ProcessScreen = ({id, process}) => 
  <div id={id}>{process}</div>



ProcessScreen.propTypes = {
  process: PropTypes.string.isRequired
}
export default ProcessScreen