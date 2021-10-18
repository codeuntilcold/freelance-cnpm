import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Profile() {
    return (
        <div className="profile">
            <Container maxWidth='xs'>
                <h1>This is the profile page</h1>
                <h2>It is in the scenes/Profile folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}