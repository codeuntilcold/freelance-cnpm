import AccessButton from '../../../../components/button/AccessButton';
import DeleteButton from '../../../../components/button/DeleteButton';
import './index.css';

function JobItem(props){
    return (
        <div className = "item-container">
            <h2 className = "item__name">{props.name}</h2>
            <p className = "item__field">
                <span className = "item__field--name">Trạng thái</span> 
                <span className = "item__field--content">{props.status}</span>
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Đơn mới</span>
                <span className = "item__field--content">{props.waiting}</span> 
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Số lượng</span>
                <span className = "item__field--content">{props.accepted}/{props.need}</span>
            </p>
            
            <p className = "item__button">
                <DeleteButton
                    name = "Xóa"
                    link = "/job-management"
                />
                <AccessButton
                        name = "Danh sách"
                        link = {`/job-management/job${props.id}`}
                    />
                <AccessButton
                        name = "Chỉnh sửa"
                        link = {`/job-management/edit-job${props.id}`}
                    />        
            </p>
        </div>
    )
}

export default JobItem;
