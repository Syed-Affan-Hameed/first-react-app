import { MouseEvent } from "react";

function ListGroup() {
  let citiesArray = ["Mysore", "Banglore", "Delhi", "Noida", "Chandigarh"];
  // citiesArray=[];
  const handleEvent = (event: MouseEvent) => {
    console.log("handle Event" + event.clientX);
  };
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {citiesArray.length === 0 && <p>No Cities Found!. list is empty</p>}
        {citiesArray.map((item) => (
          <li className="list-group-item" key={item} onClick={handleEvent}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
