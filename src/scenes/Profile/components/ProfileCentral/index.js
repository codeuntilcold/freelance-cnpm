import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import CustomInfo from "./CustomInfo";
import InfoTag from "./InfoTag";
import Info from "./Info";
import Popup from "./Popup";
import './index.css'
export default function ProfileCentral(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const Handle = () =>{
        console.log('handling edit button')
        setButtonPopup(true);
    }
        const Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat omnis voluptates vel ipsum officiis soluta sed, maiores eos aperiam.";
    return (
        <div class="central-column">
                <PageHeader title="Thông tin cá nhân"/>
                <CustomInfo Name="Freelancer's name here" Location="TP.HCM" HourlyRate="85.000" Content={Content}></CustomInfo>
                <InfoTag Name={"Lịch sử công việc"} Handle={Handle} Editable="Uneditable">
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My popup</h3>
                </Popup>
                    <Info content="Công việc 1, có một lá thư dưới ngăn bàn, có 2 lá thư dưới ngăn bàn, có 3 lá thư dưới ngăn bàn" status="Done"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Cancelled"/>
                </InfoTag>
                <InfoTag Name={"Kỹ năng"} Handle={Handle} >                    
                    <Info content="Công việc 1"/>
                    <Info content="Công việc 1"/>
                    <Info content="Công việc 1"/>
                </InfoTag>
                <InfoTag Name={"Trình độ học vấn"} Handle={Handle}></InfoTag>
                <Link to='/'>Back to index</Link>
        </div>
    );
}