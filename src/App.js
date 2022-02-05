import React, { useState } from "react";
import "./App.css";
import ChatListItem from "./componentes/ChatListItem";
import ChatInicial from "./componentes/chatInicial";
import ChatWindow from "./componentes/chatWindow";
import NovoChat from "./componentes/novoChat";
import TelaLogin from "./componentes/telaLogin";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";


const App= () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: "Mariazinha",image: "https://image.flaticon.com/icons/png/512/163/163847.png"},
    {chatId: 2, title: "Pedro", image:"https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_960_720.png"},
    {chatId: 3, title: "Alana", image:"https://educa.ranzi.com.br/wp-content/uploads/2021/08/girl-2-2.png"},
    {chatId: 4, title: "Fulano de tal", image:"https://static.vecteezy.com/ti/vetor-gratis/p1/2002310-icone-personagem-isolado-de-avatar-negro-gr%C3%A1tis-vetor.jpg"},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);

  const [showNovoChat, setShowNovoChat] = useState(false);

  const handleNovoChat = () => {
    setShowNovoChat(true);
  };
  const handleLogin = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser);
  }


  if(user === null) {
    return(<TelaLogin onReceive={handleLogin}/>);
  }

  return (
    <div className="appWindow">
      <div className="sidebar">
        <NovoChat
          chatList={chatList}
          user={user}
          show={showNovoChat}
          setShow={setShowNovoChat}
        />
        <header>
          <img src={user.image} className="imgUsuario" />
          <div className="header-btn">
            <div className="button">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="button" onClick={handleNovoChat}>
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
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>

      <div className="contentArea">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatInicial />}
      </div>
    </div>
  );
}

export default App;
