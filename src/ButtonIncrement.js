
const ButtonIncrement = (props) => {

    const increment = () => {
        let number = props.number + 1
        props.callback(number)
      }

    return (
        <>
        <button onClick={increment}>+</button>
        </>
    )
}

export default ButtonIncrement