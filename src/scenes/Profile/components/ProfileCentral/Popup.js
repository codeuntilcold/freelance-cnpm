import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
        <div className="Popup">
            <div className="PopupInner">
                <button className="close-btn" onClick={()=>{props.setTrigger(false)}}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
