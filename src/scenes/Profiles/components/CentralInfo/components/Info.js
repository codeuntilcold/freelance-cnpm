import React from "react";
function Info (props){
    const {content, status} = props;
    const convert = ()=>{
        switch(status){
            case "Đang đợi":
                return "Waiting"
            case "Lưu":
                return "Interest"
            case "Đang làm":
                return "Ongoing"
            default:
                return "Default"
        }
    }
    const convertStatus = convert();
    return (
        <div className="Info">
        <span className="InfoContent">{content}</span>
        <div className={convertStatus + " InfoStatus"}>
            <span className="InfoStatusContent">{status}</span>
        </div>
        </div>
    )
}
export default Info