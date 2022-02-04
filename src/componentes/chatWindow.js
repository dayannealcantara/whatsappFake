import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "./MessageItem"
import "./chatWindow.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

const ChatWindow = ({user}) => {

  const body = useRef();

let recognition = null;
let SpeechRecognition =
  window.SpeechRecognition || window.webKitSpeechRecognition;
if(SpeechRecognition !== undefined) {
  recognition = new SpeechRecognition();
}


  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);  
  const [list, setList] = useState([
      {author:123, main: 'bla bla bla bla'},
       {author:123, main: 'oieeee'},
        {author:1234, main: 'ola ola ola'},
        {author:123, main: 'bla bla bla bla'},
        {author:123, main: 'oieeee'},
         {author:1234, main: 'ola ola ola'},
         {author:123, main: 'bla bla bla bla'},
         {author:123, main: 'oieeee'},
          {author:1234, main: 'ola ola ola'},
          {author:123, main: 'bla bla bla bla'},
          {author:123, main: 'oieeee'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'},
           {author:1234, main: 'ola ola ola'}
           
      
      ])

      useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
          body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight

        }


      },[list]);
    

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };
  const handleSendClick = () => {};
  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) =>{
          setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerInfo">
          <img
            className="chatWindow-headerImg"
            src="https://image.flaticon.com/icons/png/512/163/163847.png"
            alt=""
          />
          <div className="chatWindow-headerName">Mariazinha</div>
        </div>

        <div className="chatWindow-headerButtons">
          <div className="chatWindow-headerBtn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-headerBtn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-headerBtn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatWindow-main">
          {list.map((item, key) => (
              <MessageItem
              key={key}
              data={item}
              user={user}   
             />
          ))}
      </div>
      <div
        className="chatWindow-emoji"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow-footer">
        <div className="chatWindow-footerPre">
          <div
            className="chatWindow-headerBtn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow-headerBtn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow-footerInput">
          <input
            className="input-footer"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow-footerPos">
          {text !== "" && (
            <div onClick={handleSendClick} className="chatWindow-headerBtn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
          {text === "" && (
            <div onClick={handleMicClick} className="chatWindow-headerBtn">
              <MicIcon style={{ color:listening? '#126ece' : "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
