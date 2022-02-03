import React from "react";
import './chatWindow.css';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
            <div className="chatWindow-footerPre"></div>  
            <div className="chatWindow-footerInput"></div> 
            <div className="chatWindow-footerPos"></div>   
            </div>          
        </div>
    );
}

export default ChatWindow