import React from 'react'

const ReactRouter = () => {
    return (
        <div>
            <h1>React Router</h1>
            <p>npm install react-router-dom</p>
            <p>{'{BrowserRouter as Router, Switch, Route}'}</p>
            <p>in app file, wrap everything excluding container ie classname='App' in <u>Router</u> tag</p>
            <p>inside router tag, include your Nav component, underneath add <u>Switch</u> tag and inside Switch include <u>Route</u> tag</p>
            <p>each Route tag will include path=' ', component=' ' and exact for home page</p>

            <p>in the nav component, import {'{Link}'} from 'react-router-dom'</p>
            <p>inside the ul tags, wrap all li with a <u>Link</u> tag with to='' as props</p>
        </div>
    )
}

export default ReactRouter
