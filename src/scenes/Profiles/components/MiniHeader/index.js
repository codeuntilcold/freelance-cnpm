import { fontSize } from "@mui/system";
import React from "react";
import './index.css';
export default function({MiniIcon, Content, Handle, Editable}){
    // console.log(`${typeof(Handle)} ${Content}`);
    return (
        <div>
            <span className="MiniHeader-Content">{Content}</span> 
            <span>
            <MiniIcon onClick={Handle} style={{fontSize:'30px'}} className={"MiniHeader-Icon " + Editable}/>
            </span>
        </div>
    );
}