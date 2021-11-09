import React from 'react';
import { Link } from 'react-router-dom';

function Employer() {
    return (
        <div className="company">
            
            <div className="employer-section">
                <p>Tên doanh nghiệp</p>
            </div>

            <div className="div-button">
                <Link to='/profile'>
                    <button className="about-us">Về chúng tôi</button>
                </Link>
            </div>

        </div>
    )
}

export default Employer
