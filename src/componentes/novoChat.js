import React, { useState, useEffect } from "react";
import "./novoChat.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Api from "../api";

const NovoChat = ({user, chatList, show, setShow}) => {
const[list, setList] = useState([]);

useEffect (() => {
    const getList = async () => {
        if(user !== null) {
            let results = await Api.getContactlist(user.id);
            setList(results);
        }

    }
    getList ();
}, [user]);

const addNovoChat = async (user2) => {
    await Api.addNovoChat(user, user2);

}

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
             <div  onClick={()=>addNovoChat(item)} className="novoChat-item">
                 <img  className="novoChat-itemImage"src={item.image} alt=""/>
                 <div className="novoChat-itemName">{item.name}</div>

             </div>
         ))}
      </div>
        </div>
        
    )
}

export default NovoChat