import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
export default function InfoTag(props){
    const {Name, Handle,Editable} = props;
    return (
        <div className="InfoTag">
            <div className="Header">
            <span className="Content">{Name}</span>
            {(Editable == true) ?<EditOutlinedIcon className="EditIcon" onClick={Handle}  style={{fontSize:'30px'}}/> :""}
            </div>
            {props.children}
        </div>
    )
}