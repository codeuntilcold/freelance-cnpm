import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../MiniHeader";
export default function InfoTag(props){
    const {Name, Handle} = props;
    return (
        <div className="InfoTag">
            <MiniHeader Content={Name} MiniIcon={EditOutlinedIcon} Handle={Handle()}></MiniHeader>
            {props.children}
        </div>
    )
}