import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function Jobdetails() {
    return (
        <div className="jobdetails">
            <Container maxWidth='xs'>
                <h1>This is the job's details page</h1>
                <h2>It is in the scenes/Jobdetails folder</h2>
                <Link to='/'>Back to index</Link>
            </Container>
        </div>
    )
}