import React from 'react';
import { Link } from 'react-router-dom';

function Employer({ employer, job }) {
    return (
        <div className="company">
            
            <div className="employer-section">
                <p>{employer.name}</p>
            </div>

            <div className="div-button">
                <Link to={`/profiles/employer/${job['employer-id']}`}>
                    <button className="about-us">Về chúng tôi</button>
                </Link>
            </div>

        </div>
    )
}

export default Employer
