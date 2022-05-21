import React, { useEffect, useState } from 'react';

const Form = ({adduser, userselected, updateuser2, edituser}) => {

const [fname, setfname] = useState("")
const [lname, setlname] = useState("")
const [email, setemail] = useState("")
const [pass, setpass] = useState("")
const [birth, setbirth] = useState("")

useEffect(()=> {
if (userselected !== null) {
    setfname( userselected.first_name );
    setlname( userselected.last_name );
    setemail( userselected.email );
    setpass( userselected.password );
    setbirth(userselected.birthday);
}
else {
    setfname('');
    setlname('');
    setemail('');
    setpass('');
    setbirth('');
}

},[userselected])


const user = {

first_name: fname,
last_name: lname,
email: email,
password: pass,
birthday: birth

}



    const submit = e => {

if ( userselected === null ) {
    adduser(user)
    setfname('');
    setlname('');
    setemail('');
    setpass('');
    setbirth('');
}
else {
    edituser(user)
    updateuser2();


}

       

        //e.target.previousSibling.value =""
      }




    return (
        <div className='div-form'>
            <h2>New user</h2>
            <div className='div-name'>
                <i className="fa-solid fa-user"></i>
                <input className='text' type="text" placeholder='first name'
                onChange={e=>setfname(e.target.value)}
                value={fname}
                />
                <input className='text' type="text" placeholder='last name' 
                onChange={e=>setlname(e.target.value)}
                value={lname}/>
            </div>
<br />
            <div className='div-mail'>
                <i className="fa-solid fa-envelope"></i>
                <input className='text' type="text" placeholder='email'
                onChange={e=>setemail(e.target.value)}
                value={email}/>
                
                
            </div>
<br />
            <div className='div-pass'>
                <i className="fa-solid fa-lock"></i>
                <input  className='text' type="password" placeholder='password' 
                onChange={e=>setpass(e.target.value)}
                value={pass}/>
            </div>
<br />
            <div className='div-date'>
                <i className="fa-solid fa-cake-candles"></i>
                <input className='text' type="date" 
                onChange={e=>setbirth(e.target.value)}
                value={birth}/>
                
                
            </div>
<br />
            <button className='buton' onClick={submit}>upload</button>
        </div>
    );
};

export default Form;