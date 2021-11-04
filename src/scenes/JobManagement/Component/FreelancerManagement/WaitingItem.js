import AccessButton from '../../../../components/button/AccessButton'
import './index.css'

function WaitingItem(props){
    return (
        <div className = "item-container">
            <p className = "item__name">{props.name}</p>
            <p className = "item__field item-content">{props.address}</p>
            <p className= "item__field item__field--name">{props.aboutMe}</p>
            <p className = "item__button">
                <AccessButton
                    type = "access"
                    name = "Xác nhận"
                />
                <AccessButton
                    type = "access"
                    name = "Chi tiết"
                    link = "/profile"
                />
            </p>
        </div>
    )
}

export default WaitingItem;