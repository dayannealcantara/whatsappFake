import React from 'react';
import Api from "../api"
import './telaLogin.css';

const TelaLogin = ({onReceive}) => {
 const handleLoginFacebook = async () =>{
     let result = await Api.fbPopup();
     if(result) {
         onReceive(result.user)
     }else {
         alert("Erro!");
     }
 }
     return (
        <div className='login'>
             <img src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente2.png?resize=640%2C640&ssl=1" alt="" />
            <button onClick={handleLoginFacebook}> Logar com o Facebook</button>
        </div>
    )
}

export default TelaLogin