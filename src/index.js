import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ScoreCounterContainer from './containers/ScoreCounterContainer.js'
import counter from './reducers/counter.js'

const store = createStore(counter)
const rootEL = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
        <ScoreCounterContainer/>
    </Provider>,
    rootEL
)

render()
store.subscribe(render)