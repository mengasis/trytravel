import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../commons/Header'
import Body from '../commons/Body'
import Footer from '../commons/Footer'

const Container = styled.div`
	display: grid;
	grid-template-rows: 100px auto 100px;
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
