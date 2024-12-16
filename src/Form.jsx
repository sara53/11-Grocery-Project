import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Form( { addItem } ) {
    let [ newItem, setNewItem ] = useState( '' )
    const submitHandler = ( e ) => {
        e.preventDefault();
        if ( !newItem ) {
            toast.error( "Fill input Data " )
            return;
        }
        addItem( newItem )
        setNewItem( "" )

    }
    return (
        <form onSubmit={submitHandler}>
            <h4>Grocery Bud</h4>
            <div className='form-control'>
                <input type="text" className='form-input' value={newItem} onChange={( e ) => setNewItem( e.target.value )} />
                <button className='btn' type='submit'>add Item</button>
            </div>
        </form>
    )
}
