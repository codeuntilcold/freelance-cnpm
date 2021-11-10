import React from "react";
import { useState, useEffect } from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import CustomInfo from "./CustomInfo";
import InfoTag from "./InfoTag";
import Info from "./Info";
import Popup from "./Popup";
import './index.css'
import MiniHeader from "../MiniHeader";
import RemoveIcon from '@mui/icons-material/Remove';
import Profile from "../..";
export default function ProfileCentral(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupOption, setPopupOption] = useState("None");
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
    let Data =         {
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
        };
    const Handle = (Name = "None") =>{
        setPopupOption(Name);
        setButtonPopup(true);
    }
    useEffect(() => {
        console.log(profile);
        Data = profile;
    }, [buttonPopup])
        const Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat omnis voluptates vel ipsum officiis soluta sed, maiores eos aperiam.";
    return (
        <div class="central-column">
                <PageHeader title="Thông tin cá nhân"/>
                <CustomInfo Name="Freelancer's name here" Location="TP.HCM" HourlyRate="85.000" Content={Content}></CustomInfo>
                <InfoTag Name={"Lịch sử công việc"} Handle={()=>{Handle("History")}} Editable="Uneditable">
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} Data={Data} setProfile={setProfile}>
                </Popup>
                    <Info content="Công việc 1, có một lá thư dưới ngăn bàn, có 2 lá thư dưới ngăn bàn, có 3 lá thư dưới ngăn bàn" status="Done"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Done"/>
                    <Info content="Công việc 1" status="Ongoing"/>
                    <Info content="Công việc 1" status="Cancelled"/>
                </InfoTag>
                <InfoTag Name={"Kỹ năng"} Handle={()=>{Handle("Kỹ năng")}} >  
                    {
                        profile.skills.map((skill) => (
                            <Info content={skill}/>
                            ))
                    }                  
                </InfoTag>
                <InfoTag Name={"Trình độ học vấn"} Handle={()=>{Handle("Học vấn")}}>
                    {
                        profile.education.map((certificate) =>(
                            <Info content={certificate}/>
                        ))
                    }
                </InfoTag>
                {/* <Link to='/'>Back to index</Link> */}
        </div>
    );
}