import React, { useState } from 'react'
import UseEffectOnceEffect9 from './UseEffectOnceEffect9'

const UseEffectCleanUp10 = () => {
    const [display, setDisplay] = useState(true)


    return (
        <div>
            <button onClick={() => setDisplay(!display)} > Toggle display </button>
            {display && <UseEffectOnceEffect9 />}
        </div>
    )
}


export default UseEffectCleanUp10
