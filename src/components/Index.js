import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function Home() {
    return (
        <div className="index">
            <Container maxWidth='xs'>
                <h1>This is the Index page</h1>
                <Link to='/Home'>Go to home page</Link> <br />
                <Link to='/Jobdetails'>Go to jobdetails page</Link> <br />
                <Link to='/Jobsfeed'>Go to jobsfeed page</Link> <br />
                <Link to='/Login'>Go to login page</Link> <br />
                <Link to='/Myjobs'>Go to my jobs page</Link> <br />
                <Link to='/Profile'>Go to profile page</Link> <br />
                <Link to='/Register'>Go to register page</Link> <br />

            </Container>
        </div>
    )
}