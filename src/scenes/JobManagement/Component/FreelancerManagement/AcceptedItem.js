import Button from '../Button'
import './index.css'

function AcceptedItem(props){
    return (
        <div className = "item-container item-container--accepted">
            <p className = "item__name">{props.name}</p>
            <p className= "item__field item__field--name">Giới thiệu</p>
            <p className = "item__field item-content">{props.description}</p>
            <p className = "item__button">
                <Button
                    type = "access"
                    name = "Chi tiết"
                />
            </p>
        </div>
    )
}

export default AcceptedItem;