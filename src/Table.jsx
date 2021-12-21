import React from 'react';
import TableItem from './TableItem';
import './App.css';


const Tablee = (props) => {

    let state = props.tables;
    let dialogsElements = props.tables.map( d => <TableItem name={d.name} key={d.id} id={d.id} surname={d.surname} />  );
    let newMessageBody = null;
    let newMessageBodyTwo = null;


    let oncl = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyAC(body);
    };
    let oncl2 = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyTwoAC(body);
    };
    let oncl3 = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyTreAC(body);
    };

    let sendMessage = () => {
        props.addTableAC();
    };

    return (
            <>
            <div className='header'>
                <h4>ID</h4>
                <h4>Name</h4>
                <h4>Surname</h4>
            </div>
                <div className="tablee">{dialogsElements}</div>
                <div className='inputes'>
                <div><p>Id:</p><textarea value={newMessageBody}
                                onChange={oncl3}
                                placeholder='Enter your id'>
                        </textarea>
                    </div>
                    <div><p>Name:</p><textarea value={newMessageBody}
                                onChange={oncl}
                                placeholder='Enter your name'>
                        </textarea>
                    </div>
                    <div><p>Surname:</p><textarea value={newMessageBodyTwo}
                                onChange={oncl2}
                                placeholder='Enter your surname'>
                        </textarea>
                    </div>
                </div>
                <div className="table"><button className='table_add' onClick={sendMessage}>add</button></div>
            </>
        )
    }
    
export default Tablee;