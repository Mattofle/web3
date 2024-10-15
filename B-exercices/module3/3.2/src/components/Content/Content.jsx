const Content = (props) => {
    console.log("content")
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }

export default Content