import { useContext } from 'react'
import { Context } from "../../context"

export default function ColorAdder() {

    const {index, handleIndexChange} = useContext(Context)

    const handleColorAdd = () => {
        handleIndexChange(index + 1)
    }

    return (
        <div className={'adder-container adder__' + index} onClick={() => handleColorAdd()}>
            <button className="btn-adder"><span>{index < 6 ? '+' : '-'}</span></button>
            <span>{index < 6 ? 'Add color' : 'Reset'}</span>
        </div>
    )
}