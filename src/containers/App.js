import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../commons/Header'
import Body from '../commons/Body'
import Footer from '../commons/Footer'

const Container = styled.div`
	display: grid;
	grid-template: 150px 1fr 100px/ 1fr;
	grid-template-areas:
		'header '
		'body'
		'footer';
	height: 100vh;
`

const App = ({ children }) => (
	<Container>
		<Header />
		<Body>{children}</Body>
		<Footer />
	</Container>
)

App.propTypes = {
	children: PropTypes.node.isRequired
}

export default App
