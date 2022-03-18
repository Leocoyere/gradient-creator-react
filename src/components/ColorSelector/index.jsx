import { useContext } from 'react'
import { Context } from "../../context"

export default function ColorSelector({data}) {

    const {items, setItems} = useContext(Context)

    const handleColorChange = (e) => {
        const arrayFiltered = items.filter((item) => item.id !== data.id)
        const prevItem = items.filter((item) => item.id === data.id)
        const newItem = { id: data.id, color: e.target.value, breakpoint: prevItem[0].breakpoint}
        const newArray = [...arrayFiltered, newItem]
        const newArraySorted = newArray.sort((val1, val2) => val1.id - val2.id)
        setItems(newArraySorted)
    }

    const handleBreakpointChange = (e) => {
        const arrayFiltered = items.filter((item) => item.id !== data.id)
        const prevItem = items.filter((item) => item.id === data.id)
        const newItem = { id: data.id, color: prevItem[0].color, breakpoint: e.target.value}
        const newArray = [...arrayFiltered, newItem]
        const newArraySorted = newArray.sort((val1, val2) => val1.id - val2.id)
        setItems(newArraySorted)
    }

    return (
        <div class={"item-container item__" + data.id}>
            <input type="color" className="input-color" defaultValue={data.color} onChange={(e) => handleColorChange(e)}/>
            <input type="number" className="input-breakpoint" defaultValue={data.breakpoint} onChange={(e) => handleBreakpointChange(e)}/>
        </div>
    )
}