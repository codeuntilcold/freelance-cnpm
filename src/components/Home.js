import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Home() {
    return (
        <div className="home">
            <Container >
                <h1>This is the home page</h1>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}