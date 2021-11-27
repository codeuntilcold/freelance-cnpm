import React from 'react';
import './index.css';
import CornerFooter from '../../../../components/CornerFooter'
import Employer from './Employer';

function Sidebar({ content, job }) {

    return (
        <div className="stats">

            <Employer employer={content} job={job} />

            <CornerFooter />

        </div>
    );
}

export default Sidebar;