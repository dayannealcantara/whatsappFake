import React from "react";
import "./App.css";
import ImagemUsuario from"./imagens/usuario.png"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from"@material-ui/icons/MoreVert"

export default () => {
  return (
    <div className="appWindow">
      <div className="sidebar">
        <header>
          <img src={ImagemUsuario} className="imgUsuario" />
          <div className="header-btn">
          <div className="button">
            <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            <div className="button">
            <ChatIcon style={{color:'#919191'}} />
            </div>
            <div className="button">
            <MoreVertIcon style={{color:'#919191'}} />
            </div>
          </div>
        </header>
        <div className="busca"></div>
        <div className="chatList"></div>
      </div>

      <div className="contentArea"></div>
    </div>
  );
};
