import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
	cursor: pointer;
	position: relative;
	display: block;
`

const Figure = styled.figure`
	margin: 0;
`

const Image = styled.img`
	max-width: 100%;
	width: 300px;
	vertical-align: top;
`

const Overlay = styled.span`
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	text-align: center;

	${Container}:hover & {
		display: flex;
	}
`
const Title = styled.span`
	font-size: 60px;
	color: white;
	font-weight: 100;
`

const Text = styled.span`
	width: 80px;
	margin: 5px;
	font-weight: bold;
	text-align: center;
	display: inline-block;
`

const Box = ({ title, image }) => (
	<Container>
		<Figure>
			<Image src={image} />
		</Figure>
		<Overlay>
			<Title>{title}</Title>
			<p>
				<Text>150</Text>
				<Text>50</Text>
			</p>
		</Overlay>
	</Container>
)

Box.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Box
