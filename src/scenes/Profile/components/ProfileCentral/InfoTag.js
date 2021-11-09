import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../MiniHeader";
export default function InfoTag(props){
    const {Name, Handle,Editable} = props;
    return (
        <div className="InfoTag">
            <MiniHeader Content={Name} MiniIcon={EditOutlinedIcon} Handle={Handle} Editable={Editable} ></MiniHeader>
            {props.children}
        </div>
    )
}