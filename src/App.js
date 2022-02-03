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
    {chatId:1, title:'Fulano de tal', image:''},
    {chatId:2, title:'Fulano de tal', image:''},
    {chatId:3, title:'Fulano de tal', image:''}
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
            <ChatListItem key={key} 
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
