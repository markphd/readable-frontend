import { connect } from 'react-redux'
import ScoreCounter from '../components/ScoreCounter'

function mapStateToProps (state) {
    return {
        value: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: (data) => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreCounter)