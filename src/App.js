import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormContainer from './components/FormContainer';

function App() {

  const [state, setState] = useState(
    {
      openForm:"",
      selectedIndex:0,
      items: [
        {
          title:"hello",
          subtitle:"World"
        },
      ]
    }
  );

  const AddData = (data) => {
    let items2 = [...state.items];
    console.log("ITEMS",items2);
    items2.push(data)
    setState({ items: [...items2] })
  }

  const deleteItem = (index) => {
    console.log(state.items);
    let items2 = [...state.items];
    console.log(items2);
    console.log("ITEM", items2);
    items2.splice(index, 1);
    setState({ items: [...items2] })
  }

  const editItem = (index,data) => {
    let items2 = [...state.items];
    items2[index]=data;
    setState({ items: [...items2] })
  }

  const formAction = (action,index) => {
    if (action === "add") {
      setState({ ...state,formOpen: "add" })
    }
    if (action === "") {
      setState({ ...state,formOpen: "" })
    }
    if (action === "edit") {
      setState({ ...state,formOpen: "edit",selectedIndex:index})
    }
  }
  console.log("STATE",state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormContainer callback={AddData} callbackEdit={editItem} callbackDelete={deleteItem} formAction={formAction} state={state} />
      </header>
    </div>
  );
}

export default App;
