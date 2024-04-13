import { Button } from 'components/Button'

export const App = () => {
	return (
		<div>
			<Button onClick={() => console.log('clicked')}>Click</Button>
		</div>
	)
}