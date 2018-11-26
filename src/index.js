import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './containers/App'
import Home from './containers/Home'
import Masonry from './containers/Masonry'
import Error404 from './containers/Error404'

import GlobalStyles from './shared/GlobalStyles'

const Root = (
	<>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/list" component={Masonry} />
					<Route component={Error404} />
				</Switch>
			</App>
		</BrowserRouter>
		<GlobalStyles />
	</>
)

ReactDOM.render(Root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
