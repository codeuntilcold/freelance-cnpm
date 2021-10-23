import React from 'react';
import './index.css';

function DetailBox() {
    return <div className="detailBox">
        <div className="inShort">
            <div className="title">
                <p>THÔNG TIN TUYỂN DỤNG</p>
            </div>
            <div className="index">
                <div>
                    <p>- Mức lương:</p>
                </div>
                <div>
                    <p>- Số lượng cần tuyển:</p>
                </div>
                <div>
                    <p>- Yêu cầu kinh nghiệm:</p>
                </div>
                <div>
                    <p>- Yêu cầu giới tính:</p>
                </div>
                <div>
                    <p>- Địa điểm làm việc:</p>
                </div>
            </div>
        </div>
    </div>;
}

export default DetailBox;