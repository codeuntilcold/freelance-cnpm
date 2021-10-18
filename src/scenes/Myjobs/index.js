import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Myjobs() {
    return (
        <div className="myjobs">
            <Container maxWidth='xs'>
                <h1>This is the My jobs page</h1>
                <h2>It is in the scenes/Myjobs folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}