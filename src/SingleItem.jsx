import React from 'react'

export default function SingleItem( { item, removeItem, editItem } ) {
    console.log( "item", item )
    return (

        <div className='single-item'>
            <input checked={item.completed} type="checkbox" onChange={() => editItem( item.id )} />
            <p style={{
                textDecoration: item.completed ? 'line-through' : ''
            }}>{item.name}</p>
            <button className='btn remove-btn' onClick={() => removeItem( item.id )} >Delete</button>
        </div>
    )
}
