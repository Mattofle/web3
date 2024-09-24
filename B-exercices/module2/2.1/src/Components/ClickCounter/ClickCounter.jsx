import { useState } from 'react'

const ClickCounter = ({title, message = "🔥"}) => {
    console.log("ClickCounter + title" + title)
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            {count >= 10 ? `${message}` : null}
            </button>
        </div>
    )
}

export default ClickCounter