import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [counterGood, setCunterGood] = useState(0)
    const [counterOk, setCounterOk] = useState(0)
    const [counterBad, setCounterBad] = useState(0)

    const increaseGood = () => {
        console.log('increaseGood')
        setCunterGood(counterGood + 1)
    }
    const increaseOk = () => {
        console.log('increaseOk')
        setCounterOk(counterOk + 1)
    }
    const increaseBad = () => {
        console.log('increaseBad')
        setCounterBad(counterBad + 1)
    }
    const resetAll = () => {
        setCunterGood(0)
        setCounterOk(0)
        setCounterBad(0)
    }

    const exposedValue = {
        counterGood,
        counterOk,
        counterBad,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll,
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}
    
export {    
    Context,
    ProviderWrapper,    
}    
