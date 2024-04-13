import type { ReactNode } from 'react'
import './style.scss'

type Props = {
	children: ReactNode
	onClick: () => void
}

export const Button = ({ children, onClick }: Props) => {
	return (
		<button type='button' className='btn-test' onClick={onClick}>
			{children}
		</button>
	)
}