import { Link } from 'react-router-dom';
import './index.css';

export default function SubmitButton(props){
    return (
        <Link to = {props.link}>
            <input type = "submit" className = "button button--access" value = {props.name} onClick = {props.onClick}/>
        </Link>
    );
}