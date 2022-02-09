import { useState } from "react";

const Edit = (props) => {

    const [newItem, setItem] = useState({
        title:props.props.state.items[props.props.state.selectedIndex].title,
        subtitle: props.props.state.items[props.props.state.selectedIndex].title
    });
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
        props.props.callbackEdit(props.props.state.selectedIndex,newItem)
    }

    const cancel = (e) => {
        props.props.formAction("")
    }
    //
    return (
        <>
            <div>
                <h1>EDIT</h1>
                
                <form>
                    <div className="form-group">
                        <input className="m-1" type="text" name="title" defaultValue={props.props.state.items[props.props.state.selectedIndex].title}id="id" placeholder="Title" onChange={handleChange} /> <br />
                        <input className="m-1" type="text" name="subtitle" id="number" placeholder="Subtitle" defaultValue={props.props.state.items[props.props.state.selectedIndex].subtitle}  onChange={handleChange} /> <br />
                    </div>
                </form>
            </div>
            <button onClick={insert}>EDIT</button>
            <button onClick={cancel}>cancl</button>
        </>
    )
}

export default Edit