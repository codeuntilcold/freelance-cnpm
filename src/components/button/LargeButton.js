import { Link } from 'react-router-dom';
import './index.css';

export default function LargeButton(props){
    return <Link to={props.link} className ="button button--access button--large">{props.name}</Link>;
}