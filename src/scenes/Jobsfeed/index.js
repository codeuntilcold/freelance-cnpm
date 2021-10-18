import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Jobsfeed() {
    return (
        <div className="jobsfeed">
            <Container maxWidth='xs'>
                <h1>This is the jobsfeed page</h1>
                <h2>It is in the scenes/Jobsfeed folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}