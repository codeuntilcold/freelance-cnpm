import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import CustomInfo from "./CustomInfo/CustomInfo";
import InfoTag from "./InfoTag/InfoTag";
import './ProfileContent.css'
export default function ProfileContent(){
        const Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat omnis voluptates vel ipsum officiis soluta sed, maiores eos aperiam.";
    return (
        <div class="ProfileContent">
                <PageHeader content="Thông tin cá nhân"/>
                <CustomInfo Name="Freelancer's name here" Location="TP.HCM" HourlyRate="85.000" Content={Content}></CustomInfo>
                <InfoTag Name={"Lịch sử công việc"}></InfoTag>
                <InfoTag Name={"Kỹ năng"}></InfoTag>
                <Link to='/'>Back to index</Link>
        </div>
    );
}