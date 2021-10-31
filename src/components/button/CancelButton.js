import { Link } from 'react-router-dom';
import './index.css';

export default function CancelButton(props){
    return <Link to={props.link} className ="button button--cancel">{props.name}</Link>;
}