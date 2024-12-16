import React from 'react'
import SingleItem from './SingleItem'

export default function Items( { items, removeItem, editItem } ) {
    return (
        <div className='items'>
            {items.map( ( item ) => <SingleItem key={item.id} item={item} editItem={editItem} removeItem={removeItem} /> )}
        </div>
    )
}
