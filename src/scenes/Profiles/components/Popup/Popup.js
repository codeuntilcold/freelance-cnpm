import React from 'react';
import {useState, useEffect} from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { TextareaAutosize } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
import "./Popup.css"
// import { Check } from '@mui/icons-material';
function Popup(props) {
    // console.log(props.data)
    const [render, setRender] = useState(true);
    function Delete (Element=""){
        let temp = props.data;
        
        const Eindex = temp.indexOf(Element);
        if (Eindex!== -1){
            temp.splice(Eindex, 1);
        }
        else console.log("Element not found");
        props.setData(temp);
        // console.log(props.data)
        setRender(!render);
    }
    function insertContact(){
        const newValue = document.getElementById("insert").value;
        const newType = document.getElementById("type").value;
        if (newValue !== ""){
            let temp = props.data;
            temp.push({Type: newType, Value: newValue});
            props.setData(temp);
            setRender(!render);
        }
    }
    function insert(){
        if (props.dataType === "contact") insertContact()
        // console.log("insert")
        else{
            const newValue = document.getElementById("insert").value;
            if (newValue !== ""){
                let temp = props.data;
                temp.push(newValue);
                props.setData(temp);
                document.getElementById("insert").value = "";
                setRender(!render);
            }
        }
    }
    function handleTextArea(){
        let newValue = document.getElementById("textarea").value;
        props.setData(newValue);
        // console.log(props.data);
    }
    function Save(){
        props.setProfile({...props.profile, [props.dataType]: props.data})
        props.setSaveProfile(true);
        props.setTrigger(false);
    }
    function changeAddress(addr){
        var first = addr;
        let temp = props.data;
        // eslint-disable-next-line eqeqeq
        temp.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
        props.setData(temp);
        document.getElementById("addrAlert").innerHTML="Changed";
        setRender(!render);
        document.getElementById("selectPrimaryAddr").hidden = true;
    }
    function nameHandle(dataType="Mặc định"){
        switch(dataType){
            case "about-me":
                return <h1>Giới thiệu</h1>
            case "skills":
                return <h1>Kĩ năng</h1>
            case "domain":
                return <h1>Phạm vi công việc</h1>
            case "education":
                return <h1>Học vấn</h1>
            case "contact":
                return <h1>Liên lạc</h1>
            case "address":
                return <h1>Địa chỉ</h1>
            default:
                return <h1>Không tìm thấy dữ liệu</h1>
        }
    }
    function switchHandle(dataType="aboutme"){
        switch (dataType){
            case "about-me":
                return <div>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        value={props.data}
                        style={{ width: "80%" }}
                        id="textarea"
                        onChange={handleTextArea}
                    />
                </div>
            case "contact":
                return <div>
                    {props.data.map((item, index) =>(
                                    <div className="Item" key={index}>
                                        {
                                                <div>
                                                    <span>{item.Value}</span>
                                                    <RemoveIcon className="DeleteIcon" onClick={()=>{Delete(item)}} />
                                                </div>

                                        }
                                    </div>
                        ))
                    }
                    <select name="type" id="type">
                       <option value="Phone">SĐT</option>
                       <option value="Email">Email</option>
                    </select>
                    <input type="text" name="insert" id="insert" placeholder="Thêm mới"/>
                        <AddIcon onClick={()=>{insert()}}/>
                </div>
            case "address":
                return <div>
                    <div className="PrimaryAddr">
                    <span style={{marginRight : "5px"}}>Current Primary address:</span>
                    <select name="selectPrimaryAddr" id="selectPrimaryAddr">
                        <option value="" disabled defaultValue hidden>Select</option>
                        {
                            props.data.map((item, index)=>(
                                <option key={index} value={item} onClick={()=>{changeAddress(item)}}>{item}</option>
                            ))
                        }
                    </select>
                    <span id="addrAlert"></span>
                    </div>
                    {props.data.map((item,index) =>(
                                <div className="Item" key={index}>
                                    {
                                            <div>
                                                <span>{item}</span>
                                                <RemoveIcon className="DeleteIcon" onClick={()=>{Delete(item)}} />
                                                {/* <CheckIcon onClick={()=>{changeAddress(item)}}/> */}
                                            </div>

                                    }
                                </div>
                            ))
                    }
                    <input type="text" name="insert" id="insert" placeholder="Thêm mới"/>
                    <AddIcon onClick={()=>{insert()}}/>
                </div>
            default:
                return <div>
                        {props.data.map((item) =>(
                                    <div className="Item" key={item}>
                                        {
                                                <div>
                                                    <span>{item}</span>
                                                    <RemoveIcon className="DeleteIcon" onClick={()=>{Delete(item)}} />
                                                </div>

                                        }
                                    </div>
                                ))
                        }
                        <input type="text" name="insert" id="insert" placeholder="Thêm mới"/>
                        <AddIcon onClick={()=>{insert()}}/>
                </div>
        }
    }
    useEffect(() => {
    }, [render])
    return(  
        <div>
        <div className="Popup">
                <div className="PopupInner">
                    <div className="Body">
                        {nameHandle(props.dataType)}
                        {switchHandle(props.dataType)}
                    </div>
                    <div className="Confirmation">
                    <button className="button button--access" onClick={()=>{Save()}}>Lưu</button>
                    <button className="button button--cancel" onClick={()=>{props.setTrigger(false)}}>Huỷ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
