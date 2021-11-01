import { fontSize } from "@mui/system";
import React from "react";
import './index.css';
export default function({MiniIcon, Content, Handle}){

    return (
        <span>
            <span className="MiniHeader-Content">{Content}</span> 
            <span onClick={Handle}>
            <MiniIcon style={{fontSize:'30px'}} className="MiniHeader-Icon"/>
            </span>
        </span>
    );
}