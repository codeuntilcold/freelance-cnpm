import React from 'react';
import {useState, useEffect} from 'react';
import MiniHeader from "../MiniHeader";
import RemoveIcon from '@mui/icons-material/Remove';
function Popup(props) {
    // const {Data, setData} = props;
    const [Data, setData] = useState(props.Data);
    const [renderState, setRenderState] = useState(false);
    const Delete = (Element="") =>{
        let temp = Data;
        
        const Eindex = temp.skills.indexOf(Element);
        if (Eindex!= -1){
            temp.skills.splice(Eindex, 1);
        }
        else console.log("Element not found");
        setData(temp);
        setRenderState(!renderState);
    }
    const Save = () =>{
        console.log("called Save");
        props.setProfile(Data);
        props.setTrigger(false);
    }
    useEffect(() => {
        console.log("rerender");
    }, [renderState]);
    return (props.trigger) ? (
        <div className="Popup">
            <div className="PopupInner">
                <button className="close-btn" onClick={()=>{props.setTrigger(false)}}>Close</button>
                {/* {props.children} */}
                <h1>Địa chỉ</h1>
                    {
                        Data.skills.map((addr) => (
                            <MiniHeader MiniIcon={RemoveIcon} Content={addr} Handle={()=>{Delete(addr)}}/>
                        ))
                    }
                <button className="submit" onClick={()=>{Save()}}>Save</button>
                {/* <button className="cancel" onClick={()=>{Cancel()}}>Cancel</button> */}
            </div>
        </div>
    ) : "";
}

export default Popup
