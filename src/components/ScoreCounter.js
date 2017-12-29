import React from 'react'

const ScoreCounter = ({ value, onIncrement, onDecrement }) => (
    <p>
        { value }
        <br/>
        <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
    </p>
)

export default ScoreCounter