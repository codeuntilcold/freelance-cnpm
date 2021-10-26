import { Link } from 'react-router-dom';

import WaitingList from './WaitingList';
import AcceptedList from './AcceptedList';

export default function FreelancerList(){
    return (
        <div>
            <h1 className = "job-heading">Danh sách đơn</h1>
            <WaitingList/>
            <AcceptedList/>
        </div>
    );
}