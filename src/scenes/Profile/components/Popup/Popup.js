import React from 'react';
import {useState, useEffect} from 'react';
import { TextField } from '@mui/material';
import MiniHeader from "../MiniHeader";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { fontSize } from '@mui/system';
import { Phone, Mail} from '@mui/icons-material';
import "./Popup.css"
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
    function insertContact(){
        const newValue = document.getElementById("insert").value;
        const newType = document.getElementById("type").value;
        if (newValue != ""){
            let temp = props.data;
            temp.push({Type: newType, Value: newValue});
            props.setData(temp);
            setRender(!render);
        }
    }
    function insert(){
        if (props.dataType == "contact") insertContact()
        // console.log("insert")
        else{
            const newValue = document.getElementById("insert").value;
            if (newValue != ""){
                let temp = props.data;
                temp.push(newValue);
                props.setData(temp);
                setRender(!render);
            }
        }
    }

    function Save(){
        props.setProfile({...props.profile, [props.dataType]: props.data})
        props.setSaveProfile(true);
        // switch(props.dataType){
        //     case "skills":
        //         props.setProfile({...props.profile, skills: props.data});
        //         break;
        //     case "Học vấn":
        //         props.setProfile({...props.profile, education: props.data})
        //         break;
        // }

        // console.log(props.profile);
        props.setTrigger(false);
    }
    useEffect(() => {
    }, [render])
    return(
        <div className="Popup">
            <div className="PopupInner">
                <div className="Body">
                {/* {props.children} */}
                <h1>{props.dataType}</h1>
                    {   
                            props.data.map((item) =>(
                                <div className="Item">
                                    {
                                             <div>
                                                <span>{props.dataType == "contact" ? (item.Value) : (item)}</span>
                                                <RemoveIcon className="DeleteIcon" onClick={()=>{Delete(item)}} />
                                            </div>

                                    }
                                </div>
                            ))
                            // )
                        }
                    { props.dataType == "contact" ? (
                        <select name="type" id="type">
                        <option value="Phone">SĐT</option>
                        <option value="Email">Email</option>
                        </select>) : ""    
                    }
                    <input type="text" name="insert" id="insert" placeholder="Thêm mới"/>
                    <AddIcon onClick={()=>{insert()}}/>
                </div>
                <div className="Confirmation">
                <button className="submit" onClick={()=>{Save()}}>Lưu</button>
                <button className="close" onClick={()=>{props.setTrigger(false)}}>Huỷ</button>
                </div>
            </div>
        </div>
    )
}

export default Popup
