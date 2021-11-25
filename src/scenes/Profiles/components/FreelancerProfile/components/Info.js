import React from "react";
function Info (props){
    const {content, status} = props;
    return (
        <div className="Info">
        <span className="InfoContent">{content}</span>
        <div className={status + " InfoStatus"}>
            <span className="InfoStatusContent">{status}</span>
        </div>
        </div>
    )
}
export default Info