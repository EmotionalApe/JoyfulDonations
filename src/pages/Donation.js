import React from 'react'

export default function Donation() {
  return (
    <div>
    <form action="" method="get" style={{marginLeft:"50px", marginBottom:"50px"}}>
    <label name="q6">E-mail</label>
    <input type="text" id="name" /><br/>

    <label name="q1">Full Name</label>
    <input type="text" id="name"/><br/>

    <label name="q4">Gender</label><br/>
    <formm action="/action_page.php">
     <input type="radio" id="m" name="fav_language" value="HTML"/>
     <label for="m">Male</label>
     <input type="radio" id="f" name="fav_language" value="CSS"/>
     <label for="f">Female</label><br/>
    </formm>

    <label name="q7">Address</label><br/>
    <input type="text" id="name"/><br/>

    <label name="q2">Donation type</label><br/>
    <select id="name" name="type">
        <option  id="name"value="select" ></option>
        <option  id="name"value="Books">Books</option>
        <option  id="name"value="Movies">Movies</option>
        <option  id="name"value="Games">Games</option>
        <option  id="name"value="other">other</option>
    </select><br/>    
    </form>
    </div>
  )
}
