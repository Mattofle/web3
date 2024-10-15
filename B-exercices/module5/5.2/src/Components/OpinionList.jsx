import { Context as OpinionContext } from "../Contexts/OpinionContext";
import { useContext , useState } from "react";

function OpinionList() {
    const { opinions, voteOpinion } = useContext(OpinionContext)
    

    return (
        <div>
            <h1>Opinions</h1>
            <ul>
                {opinions.map(opinion => (
                    <li key={opinion.id}>
                        {opinion.opinion} {opinion.score}
                        <button onClick={() => voteOpinion(opinion.id, 1)}>Vote Up</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OpinionList