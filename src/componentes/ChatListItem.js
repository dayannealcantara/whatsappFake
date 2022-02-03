import React from "react";
import "./chatlist.css";
import ImagemUsuario from "../imagens/avatar.jpg";


const ChatListItem = () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem-img" img src={ImagemUsuario} alt="" />
      <div className="chatListItem-lines">
      <div className="chatListItem-line">
        <div className="chatListItem-name">Luiz</div>
        <div className="chatListItem-hrs">22:40</div>
      </div>
      <div className="chatListItem-line">
        <div className="chatListItem-msg">
          <p>E aí, falou com </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatListItem;
