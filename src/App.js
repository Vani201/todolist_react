import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './index.css';
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";


function App() {

  const [items, setItems]= useState(
    [
      {
        id:1,
        checked:true,
        item:"Learning"
      }
     
    ]);

const [newItem, setNewItem]= useState('');

const [search, setSearch]= useState('');

const addItem = (item)=>{
  const id= items.length? items[items.length-1].id+1 : 1;
  const addNewItem= {id, checked:false, item}
  const listItems= [...items, addNewItem]
  setItems(listItems)
  localStorage.setItem("to_do_list", JSON.stringify(listItems))
}

const handleCheck=(id) =>{
    const listItems= items.map((item)=> item.id===id ? {...item, checked:!item.checked}: item)
    setItems(listItems)
    localStorage.setItem("to_do_list", JSON.stringify(listItems))
}


const deleteItem= (id)=> {
    const listItems= (items.filter((item)=> item.id!==id))
    setItems(listItems)
    localStorage.setItem("to_do_list", JSON.stringify(listItems))
}


const handleSubmit= (e) =>{
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem)
  // Add item
  addItem(newItem)
  setNewItem(''); // to get a empty space in add item input
}
  

  return (
    <div className="App">
      <Header title="TO DO LIST" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items={ items.filter(item =>
            ((item.item).toLowerCase()).includes(search.toLowerCase()))
        }
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer 
        length={items.length}
      />
    </div>

  );
 
}

export default App;



/* function handleNamechange()
  {
    const names=["Learn", "Pratice", "Knowledge"];
    const int=Math.floor(Math.random()*3);
    return names[int]
  }
  
  return (
   <div>
     Learning React
     <p> Lets {handleNamechange()} react </p>
   </div>
  ); */