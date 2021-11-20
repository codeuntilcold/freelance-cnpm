import React from 'react';
import './index.css';
import CornerFooter from '../../../../components/CornerFooter'
import Employer from './Employer';

function Sidebar({ content }) {

    return (
        <div className="stats">

            <Employer content={content} />

            <CornerFooter />

        </div>
    );
}

export default Sidebar;