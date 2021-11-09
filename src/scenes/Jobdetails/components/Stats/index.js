import React from 'react';
import './index.css';
import CornerFooter from '../../../../components/CornerFooter'
import Employer from './Employer';

function Sidebar() {

    return (
        <div className="stats">

            <Employer />

            <CornerFooter />

        </div>
    );
}

export default Sidebar;