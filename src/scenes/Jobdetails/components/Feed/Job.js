import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { collection, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

function ToText({ text, content }) {
    return (
        <span>
            {text}{content}
        </span>
    )
}  

function Job({ job }) {

    const [ save, setSave ] = useState(false);
    const [ apply, setApply ] = useState(false);

    // thêm------------------
    var time = "";  
    if (job.deadline)
        time = FormatDate(job.deadline);
    // ---------------------

    const onClickButton = () => {
        setSave(!save)
    };

    const applyJob = () => {
        setApply(!apply)
    };

    return (
        <div className="job">
            <div className="info">
                <div className="job-section">
                    {job.name}
                </div>

                <Link to='/profile'>
                    <div className="section">Tên doanh nghiệp</div>
                </Link>

                <div className="deadline">
                    <AccessTimeIcon />
                    Hạn chót nộp hồ sơ: {time}
                </div>
            </div>

            <div className="double-button">
                <div className="div-button">
                    <button className="apply" onClick={() => {applyJob()}}>
                        { apply 
                            ? <ToText text="Đã ứng tuyển" content="" /> 
                            : <ToText text="Ứng tuyển ngay" content="" /> }
                    </button>
                </div>

                <div className="div-button">
                    <button className="normal" onClick={() => {onClickButton()}}>
                        { save 
                            ? <ToText text="Bỏ lưu tin" content="" /> 
                            : <ToText text="Lưu tin" content="" /> }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Job

function FormatDate(date){
    let year = date.getYear() + 1900;
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10)
        return  '0' + day + '-' + month + '-' + year;
    return day + '-' + month + '-' + year;
}