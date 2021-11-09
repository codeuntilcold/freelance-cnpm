import { Link } from 'react-router-dom';
import './index.css';

export default function SubmitButton(props){
    return (
            <Link type = "submit" className = "button button--access"  onClick = {props.onClick} to = {props.link}>
                {props.name}
            </Link>
    );
}