import React from "react";
import './index.css';
import DetailBox from "../DetailBox/index";

function Detail() {
    return (
        <div className="detail">
            <div className="detail__header">
                <h1>Chi tiết công việc</h1>
            </div>

            <DetailBox />
        </div>
    );
}

export default Detail;