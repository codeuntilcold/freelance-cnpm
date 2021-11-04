import CancelButton from "../../../../components/button/CancelButton";
import SubmitButton from "../../../../components/button/SubmitButton";
import CornerFooter from '../../../../components/CornerFooter'

import NameJob from './NameJob';
import BaseInfo from './BaseInfo';
import DetailInfo from './DetailInfo';
import './index.css'

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobInput(props){
    return(
    <Container maxWidth='lg'>
        <div className="job-management whole-page-container">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item central-collumn">
                <h1 className = "job-heading central-page-header">Thông tin công việc</h1>
                <form>
                    <NameJob
                        name = {props.name}
                    />
                    <BaseInfo
                        salary = {props.salary}
                        total = {props.total}
                        experience = {props.experience}
                        sex = {props.sex}
                        address = {props.address}
                        deadline = {props.deadline}
                    />
                    <DetailInfo
                        description = {props.description}
                        requirement = {props.requirement}
                        benefit = {props.benefit}
                    />
                    <div className ="item__button item__button--foot">
                        <CancelButton
                            className = "button-large"
                            name = "Hủy"
                            link = '/job-management'
                        />
                        <SubmitButton
                            name = "Xác nhận"
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

export default JobInput;