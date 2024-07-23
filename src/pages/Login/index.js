import React from 'react';
import './login.css'
import logoImagem from '../../assets/logo-imagem.png';

export default function Login(){
    return(
           <div className='login-container'>
                <section className='form'>
                    <img src={logoImagem} alt="login" id="img1" />
                    <form>
                        <h1>Login User</h1>
                        <input placeholder='Login' />
                        <input placeholder='Password' />
                        <button className='button' type='submit'>Login</button>
                    </form>
                </section>
           </div>
)
}