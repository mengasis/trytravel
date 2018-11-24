import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	border-radius: 12px;
`

const Image = styled.img`
	border-radius: 50px;
`

const Error404 = ({ image }) => (
	<Container>
		<Image src={image} />
	</Container>
)

Error404.propTypes = {
	image: PropTypes.string.isRequired
}

Error404.defaultProps = {
	image: 'https://http.cat/404'
}

export default Error404
