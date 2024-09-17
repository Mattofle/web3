import coolimg from "./Capture d’écran 2024-09-17 113152.png"
const Header = (props) => {
    console.log("header")
    return (

      <div>
        <img src={coolimg} alt="coolimg" />
        <h1>{props.course}</h1>
      </div>

    )
  }

export default Header