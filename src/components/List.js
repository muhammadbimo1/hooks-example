const List = (props) => {
    const openForm = (e) => {
        props.props.formAction("add")
    }
    const remove = (e) => {
        props.props.callbackDelete(e.target.name)
    }
    const openEdit = (e) => {
        props.props.formAction("edit",e.target.name)
    }
    return(
        <>list
        <button onClick={openForm}>Add</button>
        <div>
                {props.props.state.items.map((item, index) => {
                    return (
                        <div key={index} className="card m-2" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 style={item.isDone ? { textDecoration: "line-through" } : { textDecoration: "" }} className="card-title text-dark">{item.title}</h5>
                                <h6 style={item.isDone ? { textDecoration: "line-through" } : { textDecoration: "" }} className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
                                {/* <button className="btn btn-primary" name={index} onClick={(e) => val.dispatch({ type: "DONE", index: e.target.name })}>{item.isDone ? "UNDO" : "DONE"}</button> */}
                                <button className="btn btn-danger m-1" name={index} onClick={remove}>DELETE</button>
                                <button className="btn btn-primary m-1" name={index} onClick={openEdit}>EDIT</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default List;