import React from "react";
import './chatWindow.css';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from"@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic"





const ChatWindow = () =>{
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerInfo">
                    <img className="chatWindow-headerImg" src="https://image.flaticon.com/icons/png/512/163/163847.png" alt=""/>
                    <div className="chatWindow-headerName">Mariazinha</div>
                </div>
               
                <div className="chatWindow-headerButtons">
                <div className="chatWindow-headerBtn">
                    <SearchIcon style={{color:'#919191'}} />                    
                </div>
                <div className="chatWindow-headerBtn">
                    <AttachFileIcon style={{color:'#919191'}} />                    
                </div>
                <div className="chatWindow-headerBtn">
                    <MoreVertIcon style={{color:'#919191'}} />                    
                </div>
                </div>
            </div>
            <div className="chatWindow-main"></div>
            <div className="chatWindow-footer">
            <div className="chatWindow-footerPre">
           
                <div className="chatWindow-headerBtn">
                    <InsertEmoticonIcon style={{color:'#919191'}} />                    
                </div>
                
            </div>  
            <div className="chatWindow-footerInput">
            <input className="input-footer" type="text" placeholder="Digite uma mensagem"/>    
            </div> 
            <div className="chatWindow-footerPos">
            <div className="chatWindow-headerBtn">
                    <SendIcon style={{color:'#919191'}} />                    
                </div>
            </div>   
            </div>          
        </div>
    );
}

export default ChatWindow