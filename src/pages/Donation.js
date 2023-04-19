import React, { useState } from 'react'
import {getFirestore, collection, addDoc} from "firebase/firestore"
import {app} from "../firebase"


const firestore = getFirestore(app);

export default function Donation() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [donation, setDonation] = useState('');


  const writeData = async()=> {
    const result = await addDoc(collection(firestore, "DonationReqs"),
    {
      Email:email,
      Name:name,
      Gender:gender,
      Address:address,
      Donation:donation
    })

    console.log(result)
  }

  return (
    <div>
    <form action="" method="get" style={{marginLeft:"50px", marginBottom:"50px"}}>
    <label name="mail">E-mail</label>
    <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>

    <label name="name">Full Name</label>
    <input type="text" id="name" onChange={(e)=>setName(e.target.value)} value={name}/><br/>

    <label name="gender">Gender (M/f)</label>
    <input type="text" id="gender"onChange={(e)=>setGender(e.target.value)} value={gender}/><br/>

    <label name="address">Address</label><br/>
    <input type="text" id="address" onChange={(e)=>setAddress(e.target.value)} value={address}/><br/>

    <label name="donation">Donation Type (Books, Movies, Games, Toys, etc)</label><br/>
    <input type="text" id="donation" onChange={(e)=>setDonation(e.target.value)} value={donation}/><br/>

    




    {/* <label name="q4">Gender</label><br/>
    <form action="/action_page.php">
     <input type="radio" id="m" />
     <label htmlFor="m">Male</label>
     <input type="radio" id="f" />
     <label htmlFor="f">Female</label><br/>
    </form>

    <label name="q7">Address</label><br/>
    <input type="text" id="name"/><br/>

    <label name="q2">Donation type</label>
    <select id="name" name="type">
        <option  id="name"value="select" ></option>
        <option  id="name"value="Books">Books</option>
        <option  id="name"value="Movies">Movies</option>
        <option  id="name"value="Games">Games</option>
        <option  id="name"value="other">other</option>
    </select><br/>  */}

    
    </form>
    <button onClick={writeData}>Submit</button>
    </div>
  )
}
