import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import React from 'react'
import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { db } from "../../../../services/db";
import { Timestamp, setDoc, doc, deleteDoc } from "@firebase/firestore";

function ToText({ text }) {
    return (
        <span>
            {text}
        </span>
    )
}  

function Job({ job, employer, applyList, setRender }) {
    const param = useParams();

    // fix format deadline
    var time = "";  
    if (job.deadline)
        time = FormatDate(job.deadline);

    const [ save, setSave ] = useState(false);
    const [ apply, setApply ] = useState(false);

    let applyToJob = {
        "_id": `a${GetId(applyList)}`,
        "createdAt": '',
        "freelancer-id": "fr2",
        "job-id": `${param.jobID}`,
        "status": "Đang đợi"
    };

    let JobSaved = {
        "_id": `a${GetId(applyList)}`,
        "createdAt": '',
        "freelancer-id": "fr2",
        "job-id": `${param.jobID}`,
        "status": "Đã lưu"
    };

    const saveJob = () => {
        setSave(!save);
    };

    const applyJob = () => {
        setApply(!apply);
    };

    return (
        <div className="job">
            <div className="info">
                <div className="job-section">
                    {job.name}
                </div>

                <Link to='/profile'>
                    <div className="section">{employer.name}</div>
                </Link>

                <div className="deadline">
                    <AccessTimeIcon />
                    Hạn chót nộp hồ sơ: {time}
                </div>
            </div>

            <div className="double-button">
                <div className="div-button">
                    <button className="apply" onClick={() => {
                        if (checkApplyStatus(param, apply, applyList) === false){
                            alert("Bạn muốn ứng tuyển vào công việc này?");
                            applyJob();
                            applyToJob.createdAt = ToTimestamp(new Date());
                            setRender(prev=>!prev);
                            PostData(applyToJob);
                        }
                        else alert("Bạn đã ứng tuyển vào công việc này!");
                    }}>
                        { 
                            checkApplyStatus(param, apply, applyList)
                            ? <ToText text="Đã ứng tuyển" /> 
                            : <ToText text="Ứng tuyển ngay" />
                        }
                    </button>
                </div>

                <div className="div-button">
                    <button className="normal" onClick={() => {
                        if (checkSaveStatus(param, save, applyList) === false){
                            saveJob();
                            JobSaved.createdAt = ToTimestamp(new Date());
                            setRender(prev=>!prev);
                            PostData(JobSaved);
                        }
                        else {
                            saveJob();
                            setRender(prev=>!prev);
                            DeleteData(JobSaved);
                        }
                    }}>
                        { 
                            save
                            ? <ToText text="Bỏ lưu tin" /> 
                            : <ToText text="Lưu tin" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Job;

function FormatDate(date){
    let year = date.getYear() + 1900;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (day < 10)
        return  '0' + day + '-' + month + '-' + year;
    return day + '-' + month + '-' + year;
}

function ToTimestamp(date){
    return Timestamp.fromDate(new Date(date));
}

function PostData(apply){
    var fetchData = async()=>{
        await setDoc(doc(db, "apply_for", apply._id), apply);
    } 
    fetchData();
}

function DeleteData(apply){
    var fetchData = async()=>{
        await deleteDoc(doc(db, "apply_for", apply._id));
    } 
    fetchData();
}

function GetId(applyList){
    let current = 0;

    for(let i = 0; i < applyList.length; i++){
        if ('a' + current === applyList[i]._id){  
            current++;
        }
    }

    return current;
}

function checkApplyStatus(param, apply, applyList){
    if (apply === false) {
        for(let i = 0; i < applyList.length; i++){
            let temp = applyList[i];
            if (temp['freelancer-id'] === "fr2"){  
                if (temp['job-id'] === param.jobID){
                    if (temp['status'] === "Đang đợi"){
                        apply = true;
                    }    
                }
            }
        }
    }
    return apply;
}

function checkSaveStatus(param, save, applyList){
    if (save === false){
        for(let i = 0; i < applyList.length; i++){
            let temp = applyList[i];
            if (temp['freelancer-id'] === "fr2"){  
                if (temp['job-id'] === param.jobID){
                    if (temp['status'] === "Đã lưu"){
                        save = true;
                    }    
                }
            }
        }
    }
    return save;
}