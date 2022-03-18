import './scss/main.scss';
import Gradient from './components/Gradient';
import ColorSelector from './components/ColorSelector';
import {Context} from './context'
import { useState } from 'react';
import ColorAdder from './components/ColorAdder';
const randomColor = require('randomcolor');

function App() {

	const [items, setItems] = useState([])
	const [rotation, setRotation] = useState(0)
	const [type, setType] = useState('linear')
	const [index, setIndex] = useState(1)
	const [gradient, setGradient] = useState('')

	const handleIndexChange = () => {
		if (index < 6)  {
			setItems((prev) => [...prev, { id: index, color: randomColor(), breakpoint: index * 20 }])
			setIndex(index + 1)
		} else {
			setGradient('')
			setItems([])
			setIndex(1)
		}
	}
	
	const handleRotationChange = (e) => {
		const rotationValue = e.target.value
		setRotation(rotationValue)
	}

	return (
		<Context.Provider value={{items, setItems, rotation, type, setType, handleRotationChange, index, handleIndexChange, gradient, setGradient}}>
			<div className="app-container">
				<Gradient />
				<ColorAdder />
				{items.map((item) => <ColorSelector key={item.id} data={{ id: item.id, color: item.color, breakpoint: item.breakpoint }}/>)}
			</div>
		</Context.Provider>
	);
}

export default App;
