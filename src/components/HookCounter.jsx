import React, {useState} from "react"

const HookCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>This is counter</h1>
            <button onClick={() => setCount(count+1)} >Count {count} </button>
        </div>
    )
}

export default HookCounter
