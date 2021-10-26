// import { Link } from 'react-router-dom';
import { Container } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Feed/index'
import Stats from './components/Stats/index'
import './index.css'

export default function Jobsfeed() {
    return (
        <Container maxWidth='lg'>
            <div className="jobsfeed">
                <Sidebar active={0} role="freelancer"/>
                
                <Feed />

                <Stats />
            </div>
        </Container>
    )
}