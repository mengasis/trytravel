import styled from 'styled-components'

export default styled.section`
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-template-rows: 450px 450px;
	gap: 10px;
	justify-content: center;
	justify-items: center;
`
