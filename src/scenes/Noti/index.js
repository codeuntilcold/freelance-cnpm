import { Container } from '@mui/material'
import './index.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import NotiList from './NotiList'

function Noti() {
    return (
        <Container maxWidth='lg'>

            <div className='noti'>

                <Sidebar active={3} role="freelancer"/>

                <NotiList />

            </div>
            
        </Container>
    )
}

export default Noti



