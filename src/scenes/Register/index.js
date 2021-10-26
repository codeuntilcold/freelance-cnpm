import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import SignUp from './components/index';
import './index.css'


export default function Register() {
    return (
        <div className="register">
            <SignUp/>
            {/* <Container maxWidth='xs'>
                <h1>This is the register page</h1>
                <h2>It is in the scenes/Register folder</h2>
                <Link to='/'>Back to index</Link>
            </Container> */}
        </div>
    )
}