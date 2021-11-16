import React from 'react';
import {useState, useEffect} from 'react';
import { TextField } from '@mui/material';
import MiniHeader from "../MiniHeader";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
function Popup(props) {
    // console.log(props.data)
    const [render, setRender] = useState(true);
    function Delete (Element=""){
        let temp = props.data;
        
        const Eindex = temp.indexOf(Element);
        if (Eindex!= -1){
            temp.splice(Eindex, 1);
        }
        else console.log("Element not found");
        props.setData(temp);
        console.log(props.data)
        setRender(!render);
    }

    function insert(){
        console.log("insert")
        const newValue = document.getElementById("insert").value;
        if (newValue != ""){
        let temp = props.data;
        temp.push(newValue);
        props.setData(temp);
        setRender(!render);
        }
    }

    function Save(){
        props.setProfile({...props.profile, skills: props.data});
        // console.log(props.profile);
        props.setTrigger(false);
    }
    useEffect(() => {
    }, [render])
    return(
        <div className="Popup">
            <div className="PopupInner">
                <button className="close-btn" onClick={()=>{props.setTrigger(false)}}>Close</button>
                {/* {props.children} */}
                <h1>Kĩ năng</h1>
                    {
                        props.data.map((addr) => (
                            <div>
                                <span>{addr}</span>
                                <button onClick={() =>{Delete(addr)}}>xoas</button>
                            </div>
                        ))
                    }
                    <input type="text" name="insert" id="insert" placeholder="Thêm Kĩ năng mới"/>
                    <button onClick={()=>{insert()}}>Thêm</button>

                <button className="submit" onClick={()=>{Save()}}>Save</button>
                {/* <button className="cancel" onClick={()=>{Cancel()}}>Cancel</button> */}
            </div>
        </div>
    )
}

export default Popup
