import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Profile() {
    return (
        <div className="profile">
            <Container maxWidth='xs'>
                <h1>This is the profile page</h1>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}