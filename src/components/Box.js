import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const Container = styled.div`
	border-radius: 5px;
	background: #f2f2f2;
	grid-row-end: span ${({ level }) => level || 1};
`

const Image = styled.img`
	max-width: 100%;
`
const Box = ({ level, image }) => (
	<LazyLoad height={100}>
		<Container level={level}>
			<Image src={image} />
		</Container>
	</LazyLoad>
)

Box.defaultProps = {
	level: 1
}

Box.propTypes = {
	level: PropTypes.number,
	image: PropTypes.string.isRequired
}

export default Box
