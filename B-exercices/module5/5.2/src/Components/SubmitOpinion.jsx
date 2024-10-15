import { Context as OpinionContext } from "../Contexts/OpinionContext";
import { useContext , useState } from "react";

function SubmitOpinion() {
    const { opinions, addOpinion } = useContext(OpinionContext)
    const [opinion, setOpinion] = useState('')

    const handleAddOpinion = () => {
        addOpinion(opinion)
        setOpinion('')
    }

    return (
        <div>
            <h1>Opinions</h1>
            <input type="text" value={opinion} onChange={(e) => setOpinion(e.target.value)} />
            <button onClick={handleAddOpinion}>Add</button>
            
        </div>
    )
}

export default SubmitOpinion