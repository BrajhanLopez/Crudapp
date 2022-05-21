import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Form from './components/Form'
import Items from './components/Items'

function App() {
 
useEffect(()=> {
  
axios.get('https://users-crud1.herokuapp.com/users/')
.then(res=> console.log(res.data))



},[])






  const usersdefault = [
{
  id: 1,
  firstname: 'Franco',
lastname: 'Soto',
email: '123@grms.com',
password: 'pass',
birth: '2000-12-12'
},
{
  id: 2,
  firstname: 'Sara',
lastname: 'Ramones',
email: '545@grms.com',
password: '234',
birth: '1990-05-12'
}



  ]


  const [users, setusers] = useState(usersdefault)
  const [userselected, setuserselected] = useState(null)

  const adduser = (user) => {
    // es un push
    setusers([...users, user])
  }

  const removeuser = id => {
  const userfiltered= users.filter(user => user.id != id)
   setusers(userfiltered)


  }

const updateuser = user1 => {

  setuserselected(user1);



}


const updateuser2 = () => setuserselected(null)


const edituser = user => {

const index = users.findIndex(user=>user.id === userselected.id )
users[index]= user
setusers([...users])
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
