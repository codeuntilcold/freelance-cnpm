// import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo'
import NormalLoginForm from './components/index';
import './index.css'

export default function Login() {
    return ( 
        <div>
            <Logo/>
            <div className = "login">
                <NormalLoginForm />         
            </div>
        </div>

    )
}