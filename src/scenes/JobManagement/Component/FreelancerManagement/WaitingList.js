import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import WaitingItem from './WaitingItem';
import './index.css'

function WaitingList(){
    return (
        <div>
            <h3 className = "list__name">
                Đơn mới
            </h3>
            <WaitingItem
                name= "Nguyễn Văn A"
                description = "Lập trình viên"
            />  
            <WaitingItem
                name= "Trần văn B"
                description = "Lập trình viên"
            />          
        </div>
    )
}

export default WaitingList;