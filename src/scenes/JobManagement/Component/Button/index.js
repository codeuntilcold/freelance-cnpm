import { Link } from 'react-router-dom';
import './index.css';
function Button(props){
    if (props.type === "large") 
        return <Link to={props.link} className ="button button--access button--large">{props.name}</Link>;
    if (props.type === "delete")
        return <Link to={props.link} className ="button button--exit">{props.name}</Link>;
    if (props.type === "access")
        return <Link to={props.link} className ="button button--access">{props.name}</Link>;
    if (props.type === "exit")
        return <Link to={props.link} className ="button button--exit">{props.name}</Link>;
}



export default Button;