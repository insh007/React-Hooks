import React, {useState} from "react";

const HookCounter2 = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            // This will increment by 1
            // setCount(count+1)

            // This will increment by 5 each time although we increment in setCount by 1 but we are using its previous state witin loop so loop iterate completely from 0 to <5 for clicking on button each time
            // setCount((prevCount) => prevCount+1)

            
            // This will increment by 10 each time although we increment in setCount by 2 but we are using its previous state witin loop so loop iterate completely from 0 to <5 two times for clicking on button each time
            setCount((prevCount) => prevCount+2)
        }
    }

    return (
        <div>
            {/* <button onClick={() => setCount(count+5)} >Countt {count}</button> */}

            {/* In this we used previous state */}
            {/* <button onClick={() => setCount((a) => a+5)} >Count {count}</button> */}
            {/* <button onClick={() => setCount((prevCount) => prevCount+1)} >Count's {count}</button> */}

            <button onClick={incrementFive} >Count5: {count}</button>
        </div>
    )
}

export default HookCounter2