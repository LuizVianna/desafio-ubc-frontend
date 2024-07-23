import React,{ useState } from 'react';
import './login.css'
import api from '../../services/api';
import{ useNavigate } from 'react-router-dom';


import logoImagem from '../../assets/logo-imagem.png';

export default function Login(){

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');

    const navigate = useNavigate()

    async function login(event){
        event.preventDefault();
        const data = {
            UserName, Password
        };
        
         try{
                console.log(data);
                 const response = await api.post('/login', data);
                 localStorage.setItem('UserName',data.UserName);
                 localStorage.setItem('token', response.data);
                 navigate('/students')
        }
        catch(error){
            alert('O login falhou ' + error)
        }
    }

    return(
           <div className='login-container'>
                <section className='form'>
                    <img src={logoImagem} alt="login" id="img1" />
                    <form onSubmit={login}>
                        <h1>Login User</h1>
                        <input placeholder='Login'
                        value={UserName}
                        onChange={u=>setUserName(u.target.value)} />

                        <input placeholder='Password'
                        value={Password}
                        onChange={u=>setPassword(u.target.value)} />

                        <button className='button' type='submit'>Login</button>
                    </form>
                </section>
           </div>
)
}