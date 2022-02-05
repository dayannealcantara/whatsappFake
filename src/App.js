import React, { useEffect, useState } from "react";
import "./App.css";
import Api from"./api";
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
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: '712GQ6EzOSV2SccktYYVvBIjnfg2',
    name: "Dayanne Alcantara",
    image: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-1/p200x200/250926823_4716617788390442_7568369757914123256_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGj0jrxWaoHcjM7yFlJGW5GOidCAv1_Sdc6J0IC_X9J1_cPZd4gP_3XAtb_56mIBYVGAWob5qr7EX_1G5PwNX9z&_nc_ohc=dB4t2dqqkzAAX9ILdxR&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9eUNW0M0LU-fKgE5QtVhXBi8nMNORTObn5Aj1D3RJpzw&oe=620433B1'
  });
  const [showNovoChat, setShowNovoChat] = useState(false);

  useEffect (()=> {
    if(user !== null) {
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user])

  const handleNovoChat = () => {
    setShowNovoChat(true);
  };
  const handleLogin = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      image: u.photoURL
    };
    await Api.addUser(newUser);
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
        {activeChat.chatId !== undefined && 
        <ChatWindow
        user={user}
        data={activeChat} />}
        {activeChat.chatId === undefined && <ChatInicial />}
      </div>
    </div>
  );
}

export default App;
