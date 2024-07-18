// import { MouseEvent } from "react";

import { useState } from "react";

//  passing props in the components
// {items:[], heading:string} using interface
interface Props{
  items: string[];
  heading:string
  // (item:string)=> void
  onSelectItem: (item:string)=> void;
}

function ListGroup({items, heading, onSelectItem}:Props) {
  // const items = ["New York", "San Francisco", "Kigali", "Paris"];
//   let selectedIndex = 0
  
//   hook:  to tell react that this component will have data that will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
//   items = [];

  // const message = items.length === 0 ? <p>No item found 😒</p> : null
  // // you can also use a function to return that message
  // function getMessage(){
  //     return items.length === 0 ? <p>No item found 😒</p> : null
  // }

//   event handler
//   const handleClick = (event:MouseEvent)=> console.log(event)

  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 && <p>No item found😒</p>} */}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li 
          className={selectedIndex=== index? "list-group-item active": "list-group-item"}
          key={item}
          onClick={ ()=> { 
            setSelectedIndex(index)
            onSelectItem(item)
          }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
