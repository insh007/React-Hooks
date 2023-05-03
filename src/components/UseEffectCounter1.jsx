import React, { useEffect, useState } from 'react'

const UseEffectCounter1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `title clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count+1)} >Click {count} times</button>
        </div>
    )
}

export default UseEffectCounter1
