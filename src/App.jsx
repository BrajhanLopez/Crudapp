import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Form from './components/Form'
import Items from './components/Items'

function App() {
 
  const [users, setusers] = useState([])

useEffect(()=> {
  
axios.get('https://users-crud1.herokuapp.com/users/')
.then(res=> setusers(res.data))



},[])


const getuser = () => {
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res=> setusers(res.data))


}



 


  
  const [userselected, setuserselected] = useState(null)

  const adduser = (user) => {
    // es un push
   // setusers([...users, user])
axios.post('https://users-crud1.herokuapp.com/users/', user)
.then(()=> getuser())

  }

  const removeuser = id => {
 // const userfiltered= users.filter(user => user.id != id)
   //setusers(userfiltered)
 axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
 .then(()=> getuser())
  }

const updateuser = user1 => {

  setuserselected(user1);



}


const updateuser2 = () => setuserselected(null)


const edituser = user => {

//const index = users.findIndex(user=>user.id === userselected.id )
//users[index]= user
//setusers([...users])

axios.put(`https://users-crud1.herokuapp.com/users/${userselected.id}/`,user)
.then(()=> getuser())
}
//console.log(userselected);

  return (
    <div className="App">
      <Items users={users} removeuser={removeuser} updateuser={updateuser}/>
      <Form adduser={adduser} userselected={userselected} edituser={edituser} updateuser2={updateuser2}/>
    
    

    </div>
  )
}

export default App
