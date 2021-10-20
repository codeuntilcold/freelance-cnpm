import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Sidebar from '../../components/Sidebar/Sidebar'
import './index.css'
export default function Profile() {
    return (
        <div className="profile">
            <Sidebar active={4} role="freelancer"/>
            <Container maxWidth='xs'>
                <h1>This is the profile page</h1>
                <h2>It is in the scenes/Profile folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}