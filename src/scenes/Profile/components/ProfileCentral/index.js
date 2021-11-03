import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import CustomInfo from "./CustomInfo";
import InfoTag from "./InfoTag";
import Info from "./Info";
import './index.css'
export default function ProfileCentral(){
    const Handle = () =>{
        console.log('handling edit button')
    }
        const Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat omnis voluptates vel ipsum officiis soluta sed, maiores eos aperiam.";
    return (
        <div class="central-column">
                <PageHeader title="Thông tin cá nhân"/>
                <CustomInfo Name="Freelancer's name here" Location="TP.HCM" HourlyRate="85.000" Content={Content}></CustomInfo>
                <InfoTag Name={"Lịch sử công việc"} Handle={Handle}>
                    <Info content="Công việc 1, có một lá thư dưới ngăn bàn, có 2 lá thư dưới ngăn bàn, có 3 lá thư dưới ngăn bàn" status="Done"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Cancelled"/>
                </InfoTag>
                <InfoTag Name={"Kỹ năng"} Handle={Handle} >                    
                    <Info content="Công việc 1" status="Delete"/>
                    <Info content="Công việc 1" status="Delete"/>
                    <Info content="Công việc 1" status="Delete"/>
                </InfoTag>
                <InfoTag Name={"Trình độ học vấn"} Handle={Handle}></InfoTag>
                <Link to='/'>Back to index</Link>
        </div>
    );
}