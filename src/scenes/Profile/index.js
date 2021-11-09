import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileCentral from './components/ProfileCentral/index';
import Stats from './components/Stats/index';
import './index.css';
export default function Profile() {

    return (
        <Container maxWidth="lg">
        <div className="whole-page-container">
            <Sidebar active={4} role="freelancer"/>
            <ProfileCentral/>
            <Stats></Stats>
        </div>
        </Container>
    )
}