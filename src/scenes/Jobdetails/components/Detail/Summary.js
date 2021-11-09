import React from 'react'

function Section({ text, content }) {
    return (
        <span>
            - {text}: {content}<br></br>
        </span>
    )
}

function Summary({ content }) {

    return (
        <div className="summary">
            <div className="summary_left">
                <p>THÔNG TIN TUYỂN DỤNG</p>
            </div>
            <div className="summary_right">
                <Section text="Mức lương" content={content.salary} />
                <Section text="Số lượng cần tuyển" content={content.target} />
                <Section text="Yêu cầu về kinh nghiệm" content={content.prerequisite} />
                <Section text="Yêu cầu về giới tính" content={content.sex} />
                <Section text="Địa điểm làm việc" content={content.location} />
            </div>
        </div>
    )
}

export default Summary
