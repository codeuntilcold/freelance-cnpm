import React, { useState, useEffect, useContext, useCallback } from "react";
import './index.css';
import { useHistory } from "react-router";
import { ProfileContext } from "../../index";
import {Link} from "react-router-dom";
import CustomInfo from "./components/CustomInfo";
import Info from "./components/Info";
import InfoTag from "./components/InfoTag";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Popup from "../Popup/Popup";
import JCard from "../../../../components/JCard";
export default function CentralInfo() {
    const {profile, setProfile, saveProfile, setSaveProfile, editable, param, jobs} = useContext(ProfileContext);
    const [buttonPopup, setButtonPopup] = useState(false);
    const history = useHistory();
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    const LoadData = useCallback( (Name = "None") =>{
        switch(Name){
            case "skills":
                setData([...profile["skills"]]);
                setDataType(Name);
                break;
            case "domain":
                setData([...profile["domain"]]);
                setDataType(Name);
                break;
            case "education":
                setData([...profile["education"]]);
                setDataType(Name);
                break;
            case "about-me":
                setData(profile["about-me"]);
                setDataType(Name);
                break;
            default:
                break;
        }
    }, [profile]);
    function handleAboutMe (){
        console.log("handleAboutMe");
        setButtonPopup(true);
        LoadData("about-me");
    }
    function handle (Name = "None"){
        setButtonPopup(true);
        LoadData(Name);
    }
    function handleSave(){
        alert("Save");
    }
    function handleCancel(){
        history.go();
    }
    useEffect(() => {
        LoadData(dataType);
        // console.log(profile.jobs.length, jobs.length)
    }, [buttonPopup, LoadData, dataType, jobs])
    useEffect(()=>{
        console.log("ở trong", jobs.length);
    })
    return (
        <div>
            <div className="central-column">
                    <PageHeader title="Thông tin doanh nghiệp"/>
                    {/* Đây là trang của employer
                    {profile.name} */}
                    {
                        saveProfile ? (
                            <JCard>
                                <h2>Đã có thông tin bị thay đổi, bạn có chắc chắn muốn lưu?</h2>
                                <button onClick={()=>handleSave()}>Có</button>
                                <button onClick={()=>handleCancel()}>Không</button>
                            </JCard>
                        ) : ""
                    }
                    {buttonPopup ? (<Popup setTrigger={setButtonPopup} data={data} setData={setData} profile={profile} setProfile={setProfile} dataType={dataType} setSaveProfile={setSaveProfile} />) : ""}
                    <CustomInfo profile={profile} setProfile={setProfile} setSaveProfile={setSaveProfile} Editable={editable} Handle={handleAboutMe} content={param.Type === "employer" ? "Về chúng tôi" : "Về tôi"}/> 
                   {
                       "domain" in profile ? (
                           <div>
                            {
                                
                                <InfoTag Name={"Công việc"} Editable="Uneditable">
                                    {
                                        jobs.map((job, index)=>(
                                            <Link to={`/jobdetails/${job._id}`} className="text-link">
                                            <Info key={index} content={job.name}/>
                                            </Link>
                                        ))
                                    }
                                </InfoTag>  
                            }

                           <InfoTag Name={"Phạm vi công việc"} Handle={()=>{handle("domain")}} Editable={editable}>
                                {profile.domain.map((domain, index)=>(
                                    <Info key={index} content={domain}/>
                                    ))
                                }
                            </InfoTag>
                            </div>
                       ) : (
                           <div>
                            <InfoTag Name={"Công việc"} Editable="Uneditable">
                                    {
                                        jobs.map((job, index)=>(
                                            
                                            <Link to={`/jobdetails/${job._id}`} className="text-link">
                                            <Info key={index} content={job.name} status={job.status}/>
                                            </Link>
                                        ))
                                    }
                            </InfoTag>
                            {/* <CustomInfo profile={profile} setProfile={setProfile} setSaveProfile={setSaveProfile} Editable={editable} handle={handleAboutMe}/>  */}
                           <InfoTag Name={"Kĩ năng"} Handle={()=>{handle("skills")}} Editable={editable} >
                           {
                               profile.skills.map((skill, index)=>(
                                   <Info key={index} content={skill}/>
                               ))
                           }
                           </InfoTag>
                           <InfoTag Name={"Học vấn"} Handle={()=>{handle("education")}} Editable={editable}>
                                {
                                    profile.education.map((item, index)=>(
                                        <Info key={index} content={item}/>
                                    ))
                                }
                           </InfoTag>
                           </div>
                       )}

                </div>
        </div>
    )
}
