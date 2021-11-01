import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../MiniHeader";
export default function InfoTag({Name, Handle}){
    return (
        <div className="InfoTag">
            <MiniHeader Content={Name} MiniIcon={EditOutlinedIcon} handle={Handle()}></MiniHeader>
        </div>
    )
}