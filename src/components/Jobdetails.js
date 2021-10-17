import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Jobdetails() {
    return (
        <div className="jobdetails">
            <Container maxWidth='xs'>
                <h1>This is the job's details page</h1>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}