import React from 'react'

import SimpleGrid from '../components/SimpleGrid'
import PortraitBox from '../components/PortraitBox'
import places from '../data/places'

const Home = () => {
	return (
		<>
			<SimpleGrid>
				{places.map((city, i) => (
					<PortraitBox key={i} title={city.title} image={city.url} />
				))}
			</SimpleGrid>
		</>
	)
}

Home.propTypes = {}

export default Home
