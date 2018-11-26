import React, { Component } from 'react'
import DynamicGrid from '../components/DynamicGrid'
import Box from '../components/Box'

import axios from 'axios'

class PlacesList extends Component {
	state = { images: [] }

	async componentDidMount() {
		const { data } = (await axios.get('https://picsum.photos/list')) || []
		this.setState({
			images: data.reduce((a, b, i, array) => {
				array.push(array.splice(0, 3))
				return array
			})
		})
	}

	setUrl = id =>
		`https://picsum.photos/${Math.floor(Math.random() * 1000) + 100}/${Math.floor(
			Math.random() * 1000
		) + 100}?image=${id}`

	render() {
		console.log(this.state.images)
		return (
			<>
				<DynamicGrid>
					{this.state.images.map((item, index) => (
						<React.Fragment key={index}>
							<Box image={this.setUrl(item[0].id)} level={1} />
							<Box image={this.setUrl(item[1].id)} level={2} />
							<Box image={this.setUrl(item[2].id)} level={3} />
						</React.Fragment>
					))}
				</DynamicGrid>
			</>
		)
	}
}

export default PlacesList
