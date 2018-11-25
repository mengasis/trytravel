import React from 'react'

import List from '../components/List'
import Box from '../components/Box'
import places from '../data/places'

const PlacesList = () => {
	return (
		<div>
			<List>
				{places.map((city, i) => (
					<Box key={i} title={city.title} image={city.url} />
				))}
			</List>
		</div>
	)
}

export default PlacesList
