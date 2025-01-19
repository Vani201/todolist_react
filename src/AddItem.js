import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
     <form className='addform' onSubmit={handleSubmit}>
        <label htmlFor="AddItem"> Add Item</label>
        <input 
            type="text" 
            id='addItem'
            autoFocus 
            placeholder='Add Item' 
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit'> <FaPlus /></button>


     </form>
  )
}

export default AddItem
