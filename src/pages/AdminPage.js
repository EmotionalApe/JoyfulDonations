
import React, { useRef, useState, useEffect} from 'react'
import {getFirestore,doc, getDocs, collection} from "firebase/firestore"
import {app} from "../firebase"

import './AdminPage.css'

const firestore = getFirestore(app)

function AdminPage() {
    // let docsSnap = null

    const getDocument = async()=> {
        const reqRef=collection(firestore,"DonationReqs")
        var docsSnap = await getDocs(reqRef);
        docsSnap.forEach(data => console.log(data.data()))
    }

    useEffect(()=>{
        getDocument()
        
    },[])

    

    const list = [
        {
            id: 1, 
            name: "request 1",
        },
        {
            id: 2, 
            name: "request 2",
        },
        ,
        {
            id: 3, 
            name: "request 3",
        },
        ,
        {
            id: 4, 
            name: "request 4",
        }
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='requests'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        // updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>
                                <button className='decline' type='button' onClick={() => handleDelete(current.id)}>Decline</button>
                                <button className='accept' type='button' style={{marginLeft:"20px", marginRight:"5px"}}>Accept</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const choice = event.target.elements.choice.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, choice: choice} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}


function AddList({setList}) {
    const req = useRef()
    const choice = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const choice = event.target.elements.choice.value;
        const newlist = {
            id: 3,
            name,
            choice
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        req.current.value = ""
        choice.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <label style={{marginLeft:"200px"}}>Pending Requests</label>
            <label style={{marginLeft:"350px"}}>Give your choice</label>
        </form>
    )
}

export default AdminPage;