import React from 'react'
import './index.css';
import ItemsList from './ItemsList';

const Content = ({items, handleCheck, deleteItem} ) => {

    return(
    <main>
    {(items.length)? 
    (
        <ItemsList 
        items={items} 
        handleCheck={handleCheck}
        deleteItem={deleteItem}
        />
    ) : ( <p> Your list is empty</p> )
    }

    </main>

)
}

export default Content





/* import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
 */

/* 

const [count, setCount]= useState(99);

function incrementfun()
{
     setCount(count+1) 
    setCount ((count) => { return count+1})
    
}

function decrementfun()
{
    setCount(count-1)
}

return (
<main>
    <p> Lets {handleNamechange()} React</p> <br />
    <button> Change  </button> <br />
    <button onClick={decrementfun}> - </button>
    <span> {count} </span>
    <button onClick={incrementfun}> + </button>

</main>
)
______________________



const [name, setName]= useState("Learn");

function handleNamechange()
{
    const names=["Learn", "Pratice", "Knowledge"];
    const int=Math.floor(Math.random()*3);
    setName(names[int]);
}

return(
    <main>
        <p> Lets {name} React</p> <br />
        <button onClick={handleNamechange}> change</button>

    </main>

)

*/