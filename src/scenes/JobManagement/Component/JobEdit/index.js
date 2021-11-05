import CancelButton from "../../../../components/button/CancelButton";
import SubmitButton from "../../../../components/button/SubmitButton";
import CornerFooter from '../../../../components/CornerFooter'

import NameJob from './NameJob';
import BaseInfo from './BaseInfo';
import DetailInfo from './DetailInfo';
import './index.css'

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobEdit({job}){
    return(
    <Container maxWidth='lg'>
        <div className="job-management whole-page-container">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item central-collumn">
                <h1 className = "job-heading central-page-header">Chỉnh sửa công việc</h1>
                <form>
                    <NameJob
                        job = {job}
                    />
                    <BaseInfo
                        job = {job}
                    />
                    <DetailInfo
                        job = {job}
                    />
                    <div className ="item__button item__button--foot">
                        <CancelButton
                            key = {job._id + 'c'}
                            className = "button-large"
                            name = "Hủy"
                            link = '/job-management'
                        />
                        <SubmitButton
                            key = {job._id + 'a'}
                            name = "Lưu"
                        />
                    </div>
                </form>
            </div>
            <div className = "job-management__footer">
                <CornerFooter/>
            </div>
        </div>
    </Container>

    )
}

export default JobEdit;