import React, { Component } from 'react'
import axios from 'axios'
import DynamicGrid from '../components/DynamicGrid'
import Box from '../components/Box'
import Title from '../shared/Title'

class Masonry extends Component {
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

	setUrl = (id, height) => `https://picsum.photos/250/${height}?image=${id}`

	render() {
		return (
			<>
				<Title>Masonry</Title>
				<DynamicGrid>
					{this.state.images.map((item, index) => (
						<React.Fragment key={index}>
							<Box image={this.setUrl(item[0].id, 100)} level={1} />
							<Box image={this.setUrl(item[1].id, 210)} level={2} />
							<Box image={this.setUrl(item[2].id, 320)} level={3} />
						</React.Fragment>
					))}
				</DynamicGrid>
			</>
		)
	}
}

export default Masonry
