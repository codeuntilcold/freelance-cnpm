import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Register() {
    return (
        <div className="register">
            <Container maxWidth='xs'>
                <h1>This is the register page</h1>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}