import AccessButton from '../../../../components/button/AccessButton'

import './index.css'

function AcceptedItem(props){
    return (
        <div className = "item-container item-container--accepted">
            <p className = "item__name">{props.name}</p>
            <p className = "item__field item-content">{props.addresss}</p>
            <p className= "item__field item__field--name">{props.aboutMe}</p>
            <p className = "item__button">
                <AccessButton
                    name = "Chi tiết"
                    link = "/profile"
                />
            </p>
        </div>
    )
}

export default AcceptedItem;