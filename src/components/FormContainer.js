import ButtonIncrement from "./ButtonIncrement"
import Edit from "./Edit";
import List from "./List";

const FormContainer = (props) => {
    if (props.state.formOpen === "add") {
        return (<ButtonIncrement props={props} />)
    } else if (props.state.formOpen === "edit") {
        return (<Edit props={props} />)
    } else {
        return (<List props={props} />)
    }
}



export default FormContainer;