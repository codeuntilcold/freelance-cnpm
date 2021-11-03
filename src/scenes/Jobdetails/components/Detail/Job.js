import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ToText({ text, content }) {
    return (
        <span>
            {text}{content}
        </span>
    )
}

function Job({ content }) {

    const [ save, setSave ] = useState(false)
    const [ apply, setApply ] = useState(false)

    const onClickButton = () => {
        setSave(!save)
    }

    const applyJob = () => {
        setApply(!apply)
    }

    return (
        <div className="job">
            <div className="info">
                <div className="job-section">
                    Lau dọn phân xưởng
                    {/* {content.title} */}
                </div>

                <Link to='/profile'>
                    <div className="section">Tên doanh nghiệp</div>
                </Link>

                <div className="deadline">
                    <AccessTimeIcon />
                    Hạn chót nộp hồ sơ: DD/MM/YYYY 
                    {/* {content.deadline} */}
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
                    <button onClick={() => {onClickButton()}}>
                        { save 
                            ? <ToText text="Tin đã lưu" content="" /> 
                            : <ToText text="Lưu tin" content="" /> }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Job