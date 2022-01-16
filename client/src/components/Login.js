import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitUser = ()=> {
        Axios.post('http://localhost:3001/api/insert', {
            name : name,
            email : email,
            password : password
        }).then(()=>{
            alert('Successful insert');
        })
    }

    return (
        <div className='container mt-5'>
           <h1>Login</h1>

           <div className='row justify-content-center'>
               <div className='col-sm-8'>
                   <div className='card'>
                       <div className='card-body'>
                           <form>
                               <div className='form-group'>
                                   <label>Name</label>
                                   <input type='text' className='form-control' name='name' onChange={(e)=> {
                                       setName(e.target.value)
                                   }}></input>
                               </div>
                               <div className='form-group'>
                                   <label>Email</label>
                                   <input type='email' className='form-control' name='email' onChange={(e)=> {
                                       setEmail(e.target.value)
                                   }}></input>
                               </div>
                               <div className='form-group'>
                                    <label >Password</label>
                                    <input type='password' className='form-control' name='password' onChange={(e)=> {
                                        setPassword(e.target.value)
                                    }}></input>
                               </div>
                               <button type='submit' className='btn btn-dark' onClick={submitUser}>Login</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>



        </div>
       

    )
}

export default Login;