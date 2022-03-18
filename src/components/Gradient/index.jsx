import { useContext, useEffect, useState } from 'react'
import { Context } from "../../context"

export default function Gradient() {

    const {items, setItems, rotation, type, handleRotationChange, setType, gradient, setGradient} = useContext(Context)

    useEffect(() => {
        const allColors = items.reduce(
            (prev, curr) => `${prev}, ${curr.color} ${curr.breakpoint}%`,
            'delete'
          );
          
        const allColorsCleaned = allColors.split('delete, ')[1]

        const gradientCSS = type === 'linear' ? `linear-gradient( ${rotation}deg, ${allColorsCleaned})` : `radial-gradient( circle at center, ${allColorsCleaned})`
    
        setGradient(gradientCSS)
    })

    return (
        <div className='gradient-container'>
            <div className='title-container'>
                <h1 className="gradient-title">Create your CSS gradient</h1>
                <div className='input-container'>
                    <div>
                        <input type="radio" id="linear" name="gradient_type" value="linear" onClick={() => setType('linear')} defaultChecked />
                        <label htmlFor="linear">linear</label>
                    </div>
                    <div>
                        <input type="radio" id="radiant" name="gradient_type" value="radiant" onClick={() => setType('radiant')} />
                        <label htmlFor="radiant">radiant</label>
                    </div>
                </div>
                <input type="range" id="rotation" name="rotation" min="0" max="360" step="10" onChange={(e) => handleRotationChange(e)} />
                <p className='gradient-output'>{gradient}</p>
            </div>
            <div className="gradient" style={{ background: gradient }}></div>
        </div>
    )
}