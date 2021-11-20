import React from 'react';
import { Link } from 'react-router-dom';

function Employer({ content }) {
    return (
        <div className="company">
            
            <div className="employer-section">
                <p>{content.name}</p>
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
