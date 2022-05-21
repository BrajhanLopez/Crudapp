import React, { useTransition } from 'react';

const Items = ({users, removeuser, updateuser}) => {
    return (
        <div className='div_items'>
            <h1 className="title-lusers">List users</h1>
           <div className="div-listuser">
            {
             users.map(user=>
                 <li key={user.id} className="li-user">
                     
                  <h3>{user.first_name} {user.last_name}</h3>
                  <hr />
                    <h5><b> CORREO </b></h5>
                    <p>{user.email}</p>
                    <h5> <b>CUMPLEAÑOS </b> </h5>
                    <p>{user.birthday}</p>
                    <hr />
                    <div className='butons_crud'>
                    <div className='delete' onClick={() => removeuser(user.id)}><i className="fa-solid fa-trash-can icon-list"></i></div>
                    <div className='edit' onClick={()=>updateuser(user) }>
                    <i className="fa-solid fa-pencil icon-list"></i>


                    </div>
                    </div>
                 </li>)       
                
            }
</div>

        </div>
    );
};

export default Items;