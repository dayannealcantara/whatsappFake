import React from "react";
import "./App.css";
import ImagemUsuario from "./imagens/usuario.png";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from"@material-ui/icons/Search"

const App = () => {
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
            <SearchIcon   fontSize="small" style={{ color: "#919191" }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>


        </div>

        <div className="chatList"></div>
      </div>

      <div className="contentArea"></div>
    </div>
  );
};

export default App;
