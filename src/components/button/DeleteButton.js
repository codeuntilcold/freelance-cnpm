import { Link } from 'react-router-dom';
import './index.css';

export default function DeleteButton(props){
    return (
        <Link 
            to={props.link} 
            className ="button--delete button"
            onClick = {props.onClick}
        >
            {props.name}
        </Link>
    );
}