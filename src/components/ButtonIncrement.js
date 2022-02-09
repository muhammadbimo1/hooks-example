import { useState } from "react";

const ButtonIncrement = (props) => {

    const [newItem, setItem] = useState({});

    const handleChange = (e) => {
        //TODO:Validation
        let item = {
            ...newItem,
            [e.target.name]: e.target.value,
        }
        console.log(newItem);
        setItem(item)
    }

    const insert = () => {
        props.props.callback(newItem)
    }

    const cancel = (e) => {
        props.props.formAction("")
    }

    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <input className="m-1" type="text" name="title" id="id" placeholder="Title" onChange={handleChange} /> <br />
                        <input className="m-1" type="text" name="subtitle" id="number" placeholder="Subtitle" onChange={handleChange} /> <br />
                    </div>
                </form>
            </div>
            <button onClick={insert}>ADD</button>
            <button onClick={cancel}>Cancel</button>
        </>
    )
}

export default ButtonIncrement