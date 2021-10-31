import LargeButton from '../../../../components/button/LargeButton'
import CancelButton from "../../../../components/button/CancelButton";
import NameJob from './NameJob';
import BaseInfo from './BaseInfo';
import DetailInfo from './DetailInfo';
import './index.css'

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobInput(){
    return(
    <Container maxWidth='lg'>
        <div className="job-management">
        <Sidebar active={1} role="employer" />
        <div className = "job-management__item">
            <h1 className = "job-heading">Thông tin công việc</h1>
            <NameJob/>
            <BaseInfo/>
            <DetailInfo/>
            <div className ="item__button item__button--foot">
                <CancelButton
                    className = "button-large"
                    name = "Hủy"
                />
                <LargeButton
                    type = "large"
                    name = "Xác nhận"
                />
            </div>
        </div>
            <div className = "job-management__footer"></div>
        </div>
    </Container>

    )
}

export default JobInput;