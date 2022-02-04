import React, {useState} from "react";
import "./novoChat.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NovoChat = ({user, chatList, show, setShow}) => {
const[list, setList] = useState([
    {id:234, image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg',
    name: 'Bruna'
},
{id:234, image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg',
    name: 'Bruna'},
{id:234, image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg',
    name: 'Bruna'},
{id:234, image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg',
    name: 'Bruna'}
]);

const handleClose = () => {
    setShow(false);
}

    return(
        <div className="novoChat" style={{ left: show ? 0 : -415 }}>
            <div className="novoChat-header">
            <div onClick={handleClose} className="novoChat-button">
                <ArrowBackIcon style={{color: '#fff'}} />
            </div>
            <div className="novoChat-text">Nova Conversa</div>
        </div>
          <div className="novoChat-listContato">
         {list.map((item, key)=> (
             <div className="novoChat-item">
                 <img  className="novoChat-itemImage"src={item.image} alt=""/>
                 <div className="novoChat-itemName">{item.name}</div>

             </div>
         ))}
      </div>
        </div>
        
    )
}

export default NovoChat