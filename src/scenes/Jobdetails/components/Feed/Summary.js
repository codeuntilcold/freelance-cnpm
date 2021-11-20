import React from 'react'

function Section({ text, content }) {
    return (
        <span>
            - {text}: {content}<br></br>
        </span>
    )
}

function Summary({ job }) {

    return (
        <div className="summary">
            <div className="summary_left">
                <p>THÔNG TIN TUYỂN DỤNG</p>
            </div>
            <div className="summary_right">
                <Section text="Mức lương" content={job.salary} />
                <Section text="Số lượng cần tuyển" content={job.total} />
                <Section text="Yêu cầu về kinh nghiệm" content={job.requirement} />
                <Section text="Yêu cầu về giới tính" content={job.sex} />
                <Section text="Địa điểm làm việc" content={job.address} />
            </div>
        </div>
    )
}

export default Summary
