import { useState } from 'react'

const ClickCounter = ({title, message = "🔥", hoverMessage}) => {
    console.log("ClickCounter + title" + title)
    const storedCount = JSON.parse(localStorage.getItem("count"));
    const [count, setCount] = useState(storedCount ?? 0)
    const [hover, setHover] = useState(false)
    return (
        <div>
            <h2>{title}</h2>
            <h3>{hover ? hoverMessage : null}</h3>
            <button onClick={() => {
                setCount(count + 1)
                localStorage.setItem("count", JSON.stringify(count + 1))
            } }
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(!hover)}>
            count is {count}
            {count >= 10 ? `${message}` : null}
            </button>
        </div>
    )
}

export default ClickCounter