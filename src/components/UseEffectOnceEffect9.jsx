import React, { useState, useEffect } from 'react'

const UseEffectOnceEffect9 = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // Performing Cleanup
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    // Note :   
    // by passign empty array we just said this particular effect is not depending on any props or state
    // so useEffect only renders once just after rendering the component
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UseEffectOnceEffect9
