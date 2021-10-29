import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Stats from './components/Stats/index'
import './index.css'
export default function Profile() {

    return (
        <Container>
        <div className="profile">
            <Sidebar active={4} role="freelancer"/>
            <ProfileContent></ProfileContent>
            <Stats></Stats>
        </div>
        </Container>
    )
}