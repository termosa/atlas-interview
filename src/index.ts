import ReactDOM from 'react-dom'
import React from 'react'
import Root from './lib/root'

const mountPointSelector = '#atlas-interview-app'

ReactDOM.render(
    React.createElement(Root, { mountPointSelector }),
    document.querySelector(mountPointSelector)
)
