import { Link } from 'react-router-dom';
import './index.css';

export default function AccessButton(props){
    return (
        <Link to={props.link} 
            className ="button button--access"
            onClick = {props.onClick}
        >
            {props.name}
        </Link>
    );
}