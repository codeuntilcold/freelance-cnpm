import { Container } from '@mui/material'
import './index.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Detail/index'
import Stats from './components/Stats/index'

export default function Jobdetails() {

    const job = {
        title: "Lau dọn phân xưởng",
        salary: "20.000đ/h",
        target: "15/20",
        prerequisite: "Không",
        sex: "Nam/Nữ",
        location: "TP.HCM",
        description: "Xưởng đóng cửa lâu ngày, cần người lên phụ dọn dẹp để mở cửa trở lại.",
        requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
        deadline: "DD/MM/YYYY"
    }

    return (
        <Container maxWidth='lg'>
            <div className='whole-page-container'>
                <Sidebar active={0} role="freelancer"/>

                <Feed content={job}/>

                <Stats />
            </div>
        </Container>
    )
}