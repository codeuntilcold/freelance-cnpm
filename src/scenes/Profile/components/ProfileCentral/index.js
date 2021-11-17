import React from "react";
import { useState, useEffect } from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import JCard from "../../../../components/JCard";
import CustomInfo from "./CustomInfo";
import InfoTag from "./InfoTag";
import Info from "./Info";
import Popup from "../Popup/Popup";
import './index.css'
export default function ProfileCentral(props){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [profile, setProfile] = useState(
        {
            "name": "Nguyễn Văn Minh",
            "address": [ "33/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM", "12 Lê Lợi", "193 Hùng Vương"],
            "phone": "0945123456",
            "email": "minhnguyen12@gmail.com",
            "about-me": "Lao động tự do, cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr1",
            "createdAt": "05/11/2021"
        })
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");

    function LoadData (Name = "None"){
        switch(Name){
            case "skills":
                setData([...profile.skills]);
                setDataType(Name);
                break;
            case "education":
                setData([...profile.education]);
                setDataType(Name)
                break;
        }
    }
    function Handle (Name = "None"){
        setButtonPopup(true);
        LoadData(Name);
    }
    useEffect(() => {
        LoadData(dataType);
        // console.log("index")
    }, [buttonPopup])
        const Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat omnis voluptates vel ipsum officiis soluta sed, maiores eos aperiam.";
    return (
        <div class="central-column">

                { buttonPopup ? (<Popup setTrigger={setButtonPopup} data={data} setData={setData} profile={profile} setProfile={setProfile} dataType={dataType} setSaveProfile={props.setSaveProfile}>
                </Popup>): ""}
                <PageHeader title="Thông tin cá nhân"/>
                {
                    props.saveProfile ? (
                        <JCard>
                            <h2>Thông tin cá nhân đã có sự thay đổi, bạn có chắc chắn muốn lưu những thay đổi đó không?</h2>
                            <button>Có</button>
                            <button>Không</button>
                        </JCard>
                        ) : ""
                }
                <CustomInfo Name="Freelancer's name here" Location="TP.HCM" HourlyRate="85.000" Content={Content}></CustomInfo>
                <InfoTag Name={"Lịch sử công việc"} Handle={()=>{Handle("History")}} Editable={false}>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Done"/>
                </InfoTag>
                <InfoTag Name={"Kỹ năng"} Handle={()=>{Handle("skills")}} Editable={true}>  
                    {
                        profile.skills.map((skill) => (
                            <Info content={skill}/>
                            ))
                    }                  
                </InfoTag>
                <InfoTag Name={"Trình độ học vấn"} Handle={()=>{Handle("education")}} Editable={true}>
                    {
                        profile.education.map((certificate) =>(
                            <Info content={certificate}/>
                        ))
                    }
                </InfoTag>
        </div>
    );
}