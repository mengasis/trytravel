import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../shared/Header'
import Body from '../shared/Body'

import NavBar from '../components/NavBar'

const Container = styled.div`
	display: grid;
	grid-template: 60px 1fr / 1fr;
	height: 100vh;
`

const App = ({ children }) => (
	<Container>
		<Header>
			<NavBar />
		</Header>
		<Body>{children}</Body>
	</Container>
)

App.propTypes = {
	children: PropTypes.node.isRequired
}

export default App
