import { Container } from '@material-ui/core';

import Button from '../Button'

function JobItem(props){
    return (
        <div className = "item-container">
            <p className = "item__name">{props.name}</p>
            <p className = "item__field">
                <span className = "item__field--name">Trạng thái</span> 
                <span className = "item__field--content">{props.status}</span>
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Đơn mới</span>
                <span className = "item__field--content">{props.waitng}</span> 
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Số lượng</span>
                <span className = "item__field--content">{props.accepted}/{props.need}</span>
            </p>
            <p className = "item__button">
                <Button
                    type = "delete"
                    name = "Xóa"
                    link = "/"
                />
                <Button
                    type = "access"
                    name = "Danh sách"
                    link = "/Freelancerlist"
                />
                <Button
                    type = "access"
                    name = "Chỉnh sửa"
                    link = "/ew"
                />
            </p>
        </div>
    )
}


export default JobItem;