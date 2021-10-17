import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Home() {
    return (
        <div className="home">
            <Container maxWidth='xs'>
                <h1>This is the home page</h1>
                <Link to='/'>Back to home</Link>
            </Container>
        </div>
    )
}