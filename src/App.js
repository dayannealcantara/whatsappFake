import React, { useState, useEffect } from "react";
import "./App.css";
import ChatListItem from "./componentes/ChatListItem";
import ChatInicial from "./componentes/chatInicial";
import ChatWindow from "./componentes/chatWindow"

import ImagemUsuario from "./imagens/usuario.png";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function  App  ()  {

  const [chatList, setChatList] = useState([
    {chatId:1, title:'Mariazinha', image:'https://image.flaticon.com/icons/png/512/163/163847.png'},
    {chatId:2, title:'Pedro', image:'https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_960_720.png'},
    {chatId:3, title:'Alana', image:'https://educa.ranzi.com.br/wp-content/uploads/2021/08/girl-2-2.png'},
    {chatId:4, title:'Fulano de tal', image:'https://static.vecteezy.com/ti/vetor-gratis/p1/2002310-icone-personagem-isolado-de-avatar-negro-gr%C3%A1tis-vetor.jpg'}
  ]);
  const [activeChat, setActiveChat] =useState({});

  return (
    <div className="appWindow">
      <div className="sidebar">
        <header>
          <img src={ImagemUsuario} className="imgUsuario" />
          <div className="header-btn">
            <div className="button">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="button">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="button">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="busca">
          <div className="buscaInput">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, key) =>(
            <ChatListItem 
            key={key}
             data={item}
            active={activeChat.chatId === chatList[key].chatId}
            onClick={()=>setActiveChat(chatList[key])}
            />
          ))}
         </div>
      </div>

      <div className="contentArea">
        {activeChat.chatId !== undefined && 
        <ChatWindow />        
        } 
        {activeChat.chatId === undefined && 
         <ChatInicial />
        }    
      </div>
    </div>
  );
};

export default App;
