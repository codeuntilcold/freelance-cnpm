import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Login() {
    return (
        <div className="login">
            <Container maxWidth='xs'>
                <h1>This is the login page</h1>
                <h2>It is in the scenes/Login folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}