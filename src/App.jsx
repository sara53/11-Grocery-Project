import { useState } from 'react';
import Form from './Form'
import Items from './Items';
import { toast, ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
const App = () => {

  const saveToLocalStorage = ( items ) => {
    items ? localStorage.setItem( 'list', JSON.stringify( items ) ) : null
  }

  const defaultList = JSON.parse( localStorage.getItem( 'list' ) || '[]' )
  const [ items, setItems ] = useState( defaultList )

  const addItem = ( item ) => {
    let newItem = {
      id: nanoid(),
      name: item,
      completed: false
    }
    let newList = [ ...items, newItem ]
    setItems( newList );
    saveToLocalStorage( newList )
    toast.success( "New Item added" )
  }
  const removeItem = ( itemId ) => {
    setItems( items.filter( item => item.id !== itemId ) );
    toast.warning( "Item Removed" )
  }

  const editItem = ( itemId ) => {
    let newItems = items.map( ( item ) => {
      if ( item.id === itemId ) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    } )

    saveToLocalStorage( newItems )

    setItems( newItems )
  }
  return <section className="section-center">
    <ToastContainer position='top-center' />
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem} />
  </section>;
};

export default App;
