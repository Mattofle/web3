import React, { useState } from "react";
import { v4 as uuid } from 'uuid'
const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([])

    const addOpinion = (opinion) => {
        const newOpinion = {
            id: uuid(),
            opinion: opinion,
            score : 1
        }
        setOpinions([...opinions, newOpinion])
    }

    const voteOpinion = (id, score) => {
        const newOpinions = opinions.map(opinion => {
            if (opinion.id === id) {
                return {
                    ...opinion,
                    score: opinion.score + score
                }
            }
            return opinion
        })
        setOpinions(newOpinions)
    }

    const exposeValue = {
        opinions,
        addOpinion,
        voteOpinion
    }

    return <Context.Provider value={exposeValue}>
        { props.children }
    </Context.Provider>
}
    
export {    
    Context,
    ProviderWrapper,    
}    
