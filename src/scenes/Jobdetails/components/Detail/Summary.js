import React from 'react'

function Section({ text, content }) {
    return (
        <span>
            - {text}: {content}<br></br>
        </span>
    )
}

function Summary() {
    return (
        <div className="summary">
            <div className="summary_left">
                THÔNG TIN TUYỂN DỤNG
            </div>
            <div className="summary_right">
                <Section text="Mức lương" content="20.000" />
                <Section text="Số lượng cần tuyển" content="15" />
                <Section text="Yêu cầu về kinh nghiệm" content="2 năm kinh nghiệm" />
                <Section text="Yêu cầu về giới tính" content="Không có yêu cầu" />
                <Section text="Địa điểm làm việc" content="Thành phố Hồ Chí Minh" />
            </div>
        </div>
    )
}

export default Summary
