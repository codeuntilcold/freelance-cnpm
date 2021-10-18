import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import './index.css'
export default function Home() {
    return (
        <div className="index">
            <Container>
                <h1>This is the Index page</h1>
                <Link className='link' to='/Home'>Go to home page</Link> <br />
                <Link className='link' to='/Jobdetails'>Go to jobdetails page</Link> <br />
                <Link className='link'  to='/Jobsfeed'>Go to jobsfeed page</Link> <br />
                <Link className='link'  to='/Login'>Go to login page</Link> <br />
                <Link className='link'  to='/Myjobs'>Go to my jobs page</Link> <br />
                <Link className='link'  to='/Profile'>Go to profile page</Link> <br />
                <Link className='link'  to='/Register'>Go to register page</Link> <br />

            </Container>
        </div>
    )
}