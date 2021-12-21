import React from 'react';
import './App.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <>
        <div>
            <p to={path} className='table_items'>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.surname}</p>
            </p>
            
        </div>
    </>
}

export default DialogItem;