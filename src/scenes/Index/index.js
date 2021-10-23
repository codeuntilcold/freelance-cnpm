import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import './index.css'
export default function Home() {
    return (
        <div className="index">
            <Container>
                <h1>This is the Index page</h1>
                <Link className='link' to='/home'>Go to home page</Link> <br />
                <Link className='link' to='/jobdetails'>Go to jobdetails page</Link> <br />
                <Link className='link' to='/jobmanagerment'>Go to jobmanagerment page</Link> <br />
                <Link className='link' to='/jobsfeed'>Go to jobsfeed page</Link> <br />
                <Link className='link' to='/login'>Go to login page</Link> <br />
                <Link className='link' to='/myjobs'>Go to my jobs page</Link> <br />
                <Link className='link' to='/profile'>Go to profile page</Link> <br />
                <Link className='link' to='/register'>Go to register page</Link> <br />
                <Link className='link' to='/notification'>Go to notification page</Link> <br />

            </Container>
        </div>
    )
}