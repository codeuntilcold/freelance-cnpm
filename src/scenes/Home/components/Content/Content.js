import React from 'react';
import { Link } from 'react-router-dom';

import './Content.css'

const Content = () => {
    return (
        <div className="main-content">
            <div className="text-wrapper">
                <h1>Thế giới việc làm trong tầm tay bạn !</h1>
                <h2>Muốn tìm nhân sự cho công ty của bạn?</h2>
                <h2>Hay bạn muốn tìm công việc phù hợp với mình?</h2>          
                
                <Link to="/Register" style={{color:"var(--logo-color)"}}>
                    <button className="button"><span>Bắt đầu ngay !</span></button>
                </Link>
            </div>
        </div>
        
    )
};


export default Content;