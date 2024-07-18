// import Message from "./Message"
// import ListGroup from "./components/ListGroup"
import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

function App(){
  // let items = ["New York", "San Francisco", "Kigali", "Paris"];

//   const handleSelectItem = (item:string)=>{
//     console.log( item);
// }
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
const [alertVisible, setAlertVisible] = useState(false)
  return <div>
    {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>My Alert</Alert>}
    <Button color="success" onClick={()=> setAlertVisible(true)}>Button😍</Button>

  </div>
}

export default App

