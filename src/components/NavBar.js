import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const List = styled.ul`
	background: #6a4188;
	display: flex;
	justify-content: center;
	align-items: center;

	list-style-type: none;
	margin: 0;
	padding: 0;
`

const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100px;
	list-style: none;
	transition: 0.2s;
`

const Nav = styled(NavLink)`
	text-decoration: none;
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;

	:hover {
		opacity: 0.7;
	}
`
const styleActive = {
	background: 'white',
	fontWeight: 900,
	color: 'black'
}

class NavBar extends Component {
	render() {
		return (
			<List>
				<Item>
					<Nav exact to="/" activeStyle={styleActive}>
						Home
					</Nav>
				</Item>
				<Item>
					<Nav exact to="/list" activeStyle={styleActive}>
						Listing
					</Nav>
				</Item>
			</List>
		)
	}
}

export default NavBar
