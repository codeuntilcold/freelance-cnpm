import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import React from 'react';
import { useState } from "react";
import { db } from "../../../../services/db";
import { Timestamp, setDoc, doc, deleteDoc } from "@firebase/firestore";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ToText({ text }) {
    return (
        <span>
            {text}
        </span>
    )
}  

function Job({ job, employer, applyList, setRender, role, id }) {

    const param = useParams();

    // fix format deadline
    var time = "";  
    if (job.deadline) time = FormatDate(job.deadline);

    const [ save, setSave ] = useState(false);
    const saveJob = () => {
        setSave(!save);
    };

    const [ apply, setApply ] = useState(false);
    const applyJob = () => {
        setApply(!apply);
    };

    const applyID = GetId(applyList);
    let applyToJob = {
        "_id": `a${applyID}`,
        "createdAt": '',
        "freelancer-id": `${id}`,
        "job-id": `${param.jobID}`,
        "status": "Đang đợi",
        "notifications": [
            {
                "message": "Bạn đã ứng tuyển vào công việc " + `${job.name}`,
                "isRead": false
            }
        ]
    };

    let JobSaved = {
        "_id": `a${applyID}`,
        "createdAt": '',
        "freelancer-id": `${id}`,
        "job-id": `${param.jobID}`,
        "status": "Lưu"
    };

    if (role === "freelancer"){
        return (
            <div className="job">
                <div className="info">
                    <div className="job-section">
                        {job.name}
                    </div>

                    <Link to={`/profiles/employer/${job['employer-id']}`}>
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
                            if (WorkStatus(param, applyList, id)) {
                                alert("Bạn đang làm công việc này.");
                            }
                            else if (job.deadline < new Date()){
                                alert("Đã quá hạn nộp hồ sơ!");
                            }
                            else if (job.confirmed === job.total){
                                alert("Số lượng người cần tuyển cho công việc đã đủ!");
                            }
                            else {
                                if (CheckApplyStatus(param, apply, applyList, id) === false){
                                    var answer = window.confirm("Bạn muốn ứng tuyển vào công việc này?");
                                    if (answer === true){
                                        applyJob();
                                        const i = SavedIndex(param, applyList, id);
                                        DeleteData('a' + i);
                                        applyToJob.createdAt = FormatDate(new Date());
                                        setRender(prev=>!prev);
                                        PostData(applyToJob);
                                    }
                                }
                                else alert("Bạn đã ứng tuyển vào công việc này!");
                            }
                        }}>
                            {
                                CheckApplyStatus(param, apply, applyList, id)
                                ? <ToText text="Đã ứng tuyển" /> 
                                : <ToText text="Ứng tuyển ngay" />
                            }
                        </button>
                    </div>

                    <div className="div-button">
                        <button className="normal" onClick={() => {
                            if (CheckSaveStatus(param, save, applyList, id) === false){
                                saveJob();
                                JobSaved.createdAt = ToTimestamp(new Date());
                                setRender(prev=>!prev);
                                PostData(JobSaved);
                            }
                            else {
                                saveJob();
                                setRender(prev=>!prev);
                                const i = SavedIndex(param, applyList, id);
                                DeleteData('a' + i);
                            }
                        }}>
                            {
                                CheckSaveStatus(param, save, applyList, id)
                                ? <ToText text="Bỏ lưu tin" /> 
                                : <ToText text="Lưu tin" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else if (role === "employer") {
        return (
            <div className="job">
                <div className="info">
                    <div className="job-section">
                        {job.name}
                    </div>

                    <Link to={`/profiles/employer/${job['employer-id']}`}>
                        <div className="section">{employer.name}</div>
                    </Link>

                    <div className="deadline">
                        <AccessTimeIcon />
                        Hạn chót nộp hồ sơ: {time}
                    </div>
                </div>
            </div>
        );
    }
    else {
        console.log("No specified role");
        return <h1>Please specify role</h1>
    }
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

function DeleteData(applyID){
    var fetchData = async()=>{
        await deleteDoc(doc(db, "apply_for", applyID));
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

function CheckApplyStatus(param, apply, applyList, roleID){
    let temp = applyList[0];
    if (apply === false) {
        for(let i = 0; i < applyList.length; i++){
            temp = applyList[i];
            if (temp['freelancer-id'] === roleID){  
                if (temp['job-id'] === param.jobID){
                    if (temp['status'] === "Đang đợi"){
                        apply = true;
                        break;
                    }
                    else if (temp['status'] === "Lưu"){
                        apply = false;
                        break;
                    }
                }
            }
        }
    }
    return apply;
}

function CheckSaveStatus(param, save, applyList, roleID){
    for(let i = 0; i < applyList.length; i++){
        let temp = applyList[i];
        if (temp['freelancer-id'] === roleID){  
            if (temp['job-id'] === param.jobID){
                if (temp['status'] === "Lưu" || temp['status'] === "Đang đợi"){
                    save = true;
                }
            }
        }
    }
    return save;
}

function WorkStatus(param, applyList, roleID){
    var result = false;
    for(let i = 0; i < applyList.length; i++){
        let temp = applyList[i];
        if (temp['freelancer-id'] === roleID){  
            if (temp['job-id'] === param.jobID){
                if (temp['status'] === "Đang làm"){
                    result = true;
                }
            }
        }
    }
    return result;
}

function SavedIndex(param, applyList, roleID){
    let result = 0;
    for(let i = 0; i < applyList.length; i++){
        let temp = applyList[i];
        if (temp['freelancer-id'] === roleID){  
            if (temp['job-id'] === param.jobID){
                if (temp['status'] === "Lưu"){
                    result = i;
                }
            }
        }
    }
    return result;
}