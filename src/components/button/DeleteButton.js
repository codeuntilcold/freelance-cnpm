import { Link } from 'react-router-dom';
import './index.css';

export default function DeleteButton(props){
    return <Link to={props.link} className ="button button--exit">{props.name}</Link>;
}